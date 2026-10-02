import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/data/services";
import { ServiceDetail } from "@/components/sections/service-detail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug);
  return { title: item ? item.headline : "Service" };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const item = services.find((s) => s.slug === slug);
  if (!item) notFound();

  return <ServiceDetail item={item} />;
}
