import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, solutionsPages } from "@/lib/data/services";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { bookCallHref } from "@/lib/site";
import { Check } from "lucide-react";

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

  return (
    <>
      <section className="works-glow">
        <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Solutions</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{item.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{item.description}</p>
          <PillCta href={bookCallHref} variant="lime" className="mt-8" external>
            Book a Call
          </PillCta>
        </div>
      </section>
      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[800px] px-5 md:px-8">
          <ul className="space-y-3">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/75">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BookCallBand />
    </>
  );
}
