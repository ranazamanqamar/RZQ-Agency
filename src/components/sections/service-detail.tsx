import Link from "next/link";
import { getCase, type CaseStudy } from "@/lib/data/cases";
import { presentService, type ServicePage } from "@/lib/data/services";
import { homeReviews } from "@/lib/data/testimonials";
import { bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { AwardsRecognition } from "@/components/sections/awards-recognition";
import { BookCallBand } from "@/components/sections/book-call-band";

export function ServiceDetail({ item }: { item: ServicePage }) {
  const page = presentService(item);
  const proofs = page.cases
    .map((slug) => getCase(slug))
    .filter((entry): entry is CaseStudy => entry != null);

  return (
    <>
      <div className="service-page-wash">
        <section className="px-5 pb-8 pt-16 md:px-8 md:pb-12 md:pt-24">
          <div className="mx-auto max-w-[1100px]">
            <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight md:text-6xl">{page.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{page.description}</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {page.proof.map((proof) => (
                <li key={proof.label}>
                  <p className="text-3xl font-medium tracking-tight md:text-4xl">{proof.value}</p>
                  <p className="mt-2 text-sm text-white/55">{proof.label}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PillCta href={bookCallHref} variant="lime" external>
                Book a Call
              </PillCta>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
            {page.quotes.map((quote) => (
              <figure key={quote.name}>
                <blockquote className="text-xl leading-snug text-white md:text-2xl">“{quote.text}”</blockquote>
                <figcaption className="mt-5 text-sm text-white/55">
                  <span className="font-medium text-white">{quote.name}</span>
                  <span className="block">{quote.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {proofs.length > 0 ? (
          <section className="px-5 pb-20 pt-4 md:px-8 md:pb-28">
            <div className="mx-auto max-w-[1400px]">
              <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">{page.storiesTitle}</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {proofs.map((proof) => (
                  <Link key={proof.slug} href={`/works/${proof.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden rounded-[28px] bg-[#141515]">
                      {proof.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={proof.image}
                          alt=""
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : null}
                    </div>
                    <h3 className="mt-5 text-xl font-medium">{proof.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{proof.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">{page.benefitsTitle}</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {page.offers.slice(0, 3).map((offer) => (
              <li key={offer.title}>
                <h3 className="text-xl font-medium">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{offer.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Business outcomes you will get</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.outcomes.map((outcome) => (
              <li key={outcome.title} className="rounded-[24px] bg-white/[0.04] p-6">
                <h3 className="text-lg font-medium">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{outcome.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AwardsRecognition variant="home" />

      <section className="px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {page.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-medium tracking-tight">{stat.value}</p>
              <p className="mt-3 font-medium">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">What product leaders say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeReviews.slice(0, 3).map((review) => (
              <figure key={review.name} className="rounded-[28px] bg-[#141515] p-6">
                <blockquote className="text-sm leading-relaxed text-white/80">“{review.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={review.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
                  <span className="text-sm">
                    <span className="block font-medium">{review.name}</span>
                    <span className="block text-white/50">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-5xl">We get things done with quality</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {page.quality.map((point) => (
              <li key={point.title}>
                <h3 className="text-xl font-medium">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{point.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="space-y-8">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-white/55">
            Focused design work starts from $6,000.{" "}
            <Link href="/pricing" className="text-lime hover:underline">
              See pricing
            </Link>
          </p>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
