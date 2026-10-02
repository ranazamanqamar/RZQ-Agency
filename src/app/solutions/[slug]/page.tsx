import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, solutionsPages } from "@/lib/data/services";
import { ServiceDetail } from "@/components/sections/service-detail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutionsPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug);
  return { title: item ? item.headline : "Solution" };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const item = solutionsPages.find((s) => s.slug === slug);
  if (!item) notFound();

  return <ServiceDetail item={item} />;
}
