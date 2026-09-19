import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCase, cases } from "@/lib/data/cases";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { bookCallHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  return { title: item ? item.title : "Case Study" };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${item.gradient}`}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-8 md:py-28">
          <Link href="/works" className="text-sm text-white/60 hover:text-lime">
            ← All works
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="pill-tag">
                {t}
              </span>
            ))}
            {item.metric && <span className="pill-tag text-lime!">{item.metric}</span>}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">{item.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{item.description}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[800px] px-5 md:px-8">
          {item.quote && (
            <blockquote className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xl leading-relaxed text-white/85">“{item.quote}”</p>
              {item.author && (
                <footer className="mt-6">
                  <div className="font-medium">{item.author}</div>
                  <div className="text-sm text-white/50">{item.role}</div>
                </footer>
              )}
            </blockquote>
          )}
          <p className="mt-10 text-white/60">
            This case study recreates the portfolio presentation from the reference agency site.
            The visual system, industry tagging, and outcome framing match the live works experience
            so the RZQ site stays complete while you build your own client roster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillCta href={bookCallHref} variant="lime" external>
              Book a Call
            </PillCta>
            <PillCta href="/works">More cases</PillCta>
          </div>
        </div>
      </section>
      <BookCallBand />
    </>
  );
}
