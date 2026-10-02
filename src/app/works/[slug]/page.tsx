import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCase, cases } from "@/lib/data/cases";
import { getCaseBody } from "@/lib/data/case-body";
import { CaseStudyBody } from "@/components/sections/case-study-body";
import { WorkTogetherCard } from "@/components/sections/work-together-card";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  const body = getCaseBody(slug);
  return { title: body?.headline ?? item?.title ?? "Case Study" };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  const body = getCaseBody(slug);
  if (!item || !body) notFound();

  return (
    <>
      <CaseStudyBody item={item} body={body} />
      <WorkTogetherCard />
    </>
  );
}
