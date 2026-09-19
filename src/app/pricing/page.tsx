import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { TestimonialsMarquee } from "@/components/sections/testimonials";
import { FounderPhoto } from "@/components/founder-photo";
import { PricingCurrencyGraphic } from "@/components/sections/pricing-currency-graphic";
import {
  designPlans,
  developerPlans,
  pricingFaqs,
  trustReasons,
} from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing for Product Design and Development",
};

function PlanCard({
  title,
  description,
  features,
  cta,
  href,
}: {
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/55">{description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/75">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
            {f}
          </li>
        ))}
      </ul>
      <PillCta href={href} variant="lime" className="mt-8 w-full justify-between" external={href.startsWith("tel:")}>
        {cta}
      </PillCta>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="pricing-glow">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Home / Pricing</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Start{" "}
              <span className="font-serif-italic font-normal text-lime">2x faster</span> with a
              transparent estimate
            </h1>
            <p className="mt-5 max-w-xl text-white/60">
              Our process saves clients&apos; project budgets by 32% and accelerates delivery by 40%.
            </p>
            <PillCta href={bookCallHref} variant="lime" className="mt-8" external arrow="left">
              Book a Call
            </PillCta>
          </div>
          <PricingCurrencyGraphic />
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Flexible engagement options for every stage</h2>
          <p className="mt-3 text-white/55">
            Choose the level of design involvement that fits your product goals.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {designPlans.map((p) => (
              <PlanCard key={p.title} {...p} href="/contact" />
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {developerPlans.map((p) => (
              <PlanCard
                key={p.title}
                {...p}
                href={p.cta === "Book a Call" ? bookCallHref : "/contact"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold">A clear breakdown to help you choose</h2>
          <p className="mt-4 text-white/55">
            If you compare freelancers, outsourcing vendors, and the {site.name} team, the
            differences in reliability, speed, and expertise become clear. Especially if you value
            quality, consistency, and predictable outcomes.
          </p>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold">Start your 3-day free trial</h2>
          <p className="mt-4 text-white/55">
            See the value, not the pitch. Experience real progress on your product for free before
            you invest.
          </p>
          <PillCta href={bookCallHref} variant="lime" className="mt-8" external>
            Book a Call · {site.phoneDisplay}
          </PillCta>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Why global companies trust {site.name}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((r) => (
              <div key={r.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/55">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden border-t border-white/5">
        <div className="mx-auto mb-8 max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">Client success is our best metric</h2>
        </div>
        <TestimonialsMarquee />
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-[0.9fr_1.2fr] md:px-8">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <FounderPhoto size={80} />
            <div className="mt-4 font-medium">{site.founderName}</div>
            <div className="text-sm text-white/50">{site.founderTitle}</div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              “I built {site.name} to make design and development transparent and human. Our clients
              stay with us because they see the difference clarity makes. If you’re tired of vague
              quotes and missed deadlines, contact us. We’ll estimate your project transparently and
              help you launch without wasted resources.”
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-3">
              {pricingFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-medium marker:content-none">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
