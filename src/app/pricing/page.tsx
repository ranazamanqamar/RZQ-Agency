import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { FounderPhoto } from "@/components/founder-photo";
import { HeroLogoMarquee } from "@/components/sections/hero-logo-marquee";
import { PricingCurrencyGraphic } from "@/components/sections/pricing-currency-graphic";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { comparisonRows, pricingFaqs, trustReasons } from "@/lib/data/pricing";
import { homeReviews } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Pricing for Product Design and Development",
};

function Mark({ on }: { on: boolean }) {
  return on ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime text-black">
      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center text-white/35">
      <X className="h-3.5 w-3.5" strokeWidth={2.25} />
    </span>
  );
}

export default function PricingPage() {
  const quote = homeReviews[0];

  return (
    <>
      <section className="pricing-hero">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Home / Pricing</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Start <span className="font-serif-italic font-normal text-lime">2x faster</span> with a
              transparent estimate
            </h1>
            <p className="mt-5 max-w-xl text-white/60">
              Our process saves clients&apos; project budgets by 32% and accelerates delivery by 40%.
            </p>
            <PillCta href={bookCallHref} variant="lime" className="mt-8" external arrow="left" split>
              Book a Call
            </PillCta>
          </div>
          <PricingCurrencyGraphic />
        </div>
        <div className="border-t border-white/15">
          <HeroLogoMarquee />
        </div>
      </section>

      <section className="pricing-plans section-pad">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
            <span className="font-serif-italic font-normal">Flexible</span> engagement options for every
            stage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            Choose the level of design involvement that fits your product goals.
          </p>
          <div className="mt-12">
            <PricingPlans />
          </div>
        </div>
      </section>

      <section className="pricing-compare section-pad">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A clear breakdown{" "}
              <span className="font-serif-italic font-normal">to help you choose</span>
            </h2>
            <p className="text-white/70">
            If you compare freelancers, outsourcing vendors, and the {site.name} team, the differences
            in reliability, speed, and expertise become clear. Especially if you value quality,
            consistency, and predictable outcomes.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-[28px] bg-white/[0.06]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-5 font-medium">Feature</th>
                  <th className="px-4 py-5 text-center text-2xl font-semibold tracking-tight">
                    {site.name}
                  </th>
                  <th className="px-4 py-5 text-center font-medium">Freelancers</th>
                  <th className="px-4 py-5 text-center font-medium">Outsourcing Vendor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/10 last:border-0">
                    <td className="px-6 py-4">{row.feature}</td>
                    <td className="px-4 py-4 text-center">
                      <Mark on />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Mark on={row.freelancers} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Mark on={row.vendor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pricing-trial section-pad">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 md:grid-cols-2 md:px-8">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Start your
            <span className="mt-2 block font-serif-italic font-normal text-lime">3-day free trial</span>
          </h2>
          <div>
            <p className="text-white/70">
              See the value, not the pitch. Experience real progress on your product for free before you
              invest.
            </p>
            <PillCta href={bookCallHref} variant="lime" className="mt-8" external split>
              Book a Call
            </PillCta>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Why global companies <span className="font-serif-italic font-normal">trust {site.name}</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((reason) => (
              <div key={reason.title} className="rounded-[24px] bg-white/[0.06] p-6">
                <h3 className="text-lg font-medium">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/55">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-reviews section-pad">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="font-serif-italic font-normal">Client success is</span>
            <span className="mt-2 block">our best metric</span>
          </h2>
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-col gap-3">
              {homeReviews.map((review) => (
                <div
                  key={review.company}
                  className="flex h-20 items-center justify-center rounded-[20px] bg-[#1a1a1a] px-6"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={review.logo} alt={review.company} className="max-h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
            <figure className="flex flex-col justify-between rounded-[28px] bg-lime p-8 text-black md:p-12">
              <blockquote className="text-3xl leading-snug md:text-4xl">
                “I was impressed with the{" "}
                <span className="font-serif-italic">{quote.emphasis}</span> and polish for all the
                features.”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={quote.photo} alt="" className="h-14 w-14 rounded-full object-cover" />
                <span>
                  <span className="block font-serif-italic text-2xl">{quote.name}</span>
                  <span className="block text-sm">{quote.role}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="rounded-[28px] bg-white p-8 text-black">
            <div className="flex items-center gap-4">
              <FounderPhoto size={72} />
              <div>
                <div className="font-serif-italic text-2xl">{site.founderName}</div>
                <div className="text-sm text-black/50">{site.founderTitle} & CEO</div>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed">
              “I built {site.name} to make design and development transparent and human. Our clients
              stay with us because they see the difference clarity makes. If you’re tired of vague
              quotes and missed deadlines, contact us. We’ll estimate your project transparently and
              help you launch without wasted resources.”
            </p>
            <PillCta href={bookCallHref} variant="lime" className="mt-8" external split>
              Book a Call
            </PillCta>
          </div>
          <div>
            <h2 className="sr-only">FAQ</h2>
            <div className="space-y-3">
              {pricingFaqs.map((faq) => (
                <details key={faq.q} className="group rounded-[20px] bg-white/[0.06] px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
                    {faq.q}
                    <span className="text-white/50 transition group-open:rotate-90">›</span>
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
