import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getIndustry, industries } from "@/lib/data/industries";
import { cases } from "@/lib/data/cases";
import { CaseCard } from "@/components/sections/case-card";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { bookCallHref, site } from "@/lib/site";

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

  const related = cases
    .filter(
      (c) =>
        c.industry.toLowerCase().includes(item.title.split(",")[0].toLowerCase().slice(0, 4)) ||
        item.tags.some((t) => c.tags.includes(t) || c.industry === t),
    )
    .slice(0, 6);

  return (
    <>
      <section className="works-glow">
        <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Industries</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{item.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{item.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="pill-tag">
                {t}
              </span>
            ))}
          </div>
          <PillCta href={bookCallHref} variant="lime" className="mt-8" external>
            Book a Call
          </PillCta>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-2xl font-bold">
            {site.name} is your trusted partner for {item.title} UI/UX design
          </h2>
          <p className="mt-3 max-w-2xl text-white/55">
            Partnering with enterprise platforms across global markets. See related work or{" "}
            <Link href="/works" className="text-lime hover:underline">
              browse all cases
            </Link>
            .
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(related.length ? related : cases.slice(0, 6)).map((c) => (
              <CaseCard key={c.slug} item={c} />
            ))}
          </div>
        </div>
      </section>
      <BookCallBand />
    </>
  );
}
