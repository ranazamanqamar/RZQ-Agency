import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, services } from "@/lib/data/services";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { bookCallHref, site } from "@/lib/site";
import { Check } from "lucide-react";

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

  return (
    <>
      <section className="works-glow">
        <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">
            Services / {item.category}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{item.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/60">{item.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillCta href={bookCallHref} variant="lime" external>
              Book a Call
            </PillCta>
            <PillCta href="/contact">Contact Us</PillCta>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <h2 className="text-2xl font-bold">What you get</h2>
          <ul className="mt-6 space-y-3">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/75">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-white/55">
            Typical projects start from $6,000. {site.name} is a full-cycle design and development
            partner — from discovery to post-launch support.{" "}
            <Link href="/pricing" className="text-lime hover:underline">
              See pricing →
            </Link>
          </p>
        </div>
      </section>
      <BookCallBand />
    </>
  );
}
