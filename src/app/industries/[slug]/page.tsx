import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/lib/data/industries";
import { IndustryDetail } from "@/components/sections/industry-detail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getIndustry(slug);
  return { title: item ? item.headline : "Industry" };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) notFound();

  return <IndustryDetail item={item} />;
}
