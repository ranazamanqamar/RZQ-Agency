import Link from "next/link";
import { getCase, type CaseStudy } from "@/lib/data/cases";
import type { Industry } from "@/lib/data/industries";
import { homeReviews } from "@/lib/data/testimonials";
import { bookCallHref, site } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";

const process = [
  { step: "01", title: "Discovery & Planning", detail: "Research, alignment, and scoping. 2 weeks" },
  { step: "02", title: "UX Stage", detail: "Wireframes, prototypes, and user flow. 7 days" },
  { step: "03", title: "UI Stage", detail: "UI concepts and high-fidelity UI. 1–2 months" },
  { step: "04", title: "Testing Stage", detail: "Usability tests, QA, and iteration. 3–5 days" },
  { step: "05", title: "Development Stage", detail: "Handoff, front-end build, and launch readiness. 4–6 weeks" },
];

const proofStats = [
  { value: "5.0", label: "Clutch rate" },
  { value: "89+", label: "Reviews" },
  { value: "500+", label: "Businesses" },
];

export function IndustryDetail({ item }: { item: Industry }) {
  const stories = item.stories
    .map((story) => {
      const entry = getCase(story.slug);
      return entry ? { ...story, entry } : null;
    })
    .filter((story): story is Industry["stories"][number] & { entry: CaseStudy } => story != null);

  return (
    <>
      <div className="service-page-wash">
        <section className="px-5 pb-8 pt-16 md:px-8 md:pb-12 md:pt-24">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Industries</p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-medium tracking-tight md:text-6xl">{item.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{item.body}</p>
            <p className="mt-8 text-sm text-white/70">
              <span className="text-2xl font-medium text-white">5.0</span>
              <span className="ml-3">89+ reviews on Clutch</span>
            </p>
            <div className="mt-10">
              <PillCta href={bookCallHref} variant="lime" external>
                Book a Call
              </PillCta>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
            {homeReviews.slice(0, 4).map((quote) => (
              <figure key={quote.name}>
                <blockquote className="text-xl leading-snug text-white md:text-2xl">“{quote.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-white/55">
                  <span className="font-medium text-white">{quote.name}</span>
                  <span className="block">{quote.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-sm text-white/55">Partnering with enterprise platforms across global markets</p>
          <h2 className="mt-6 max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">{item.focusTitle}</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {item.points.map((point, index) => (
              <li key={point.title} className="flex gap-4">
                <span className="text-sm text-white/40">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-snug">{point.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {item.stats.map((stat) => (
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
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-5xl">{item.storiesTitle}</h2>
          <div className="mt-12 space-y-16">
            {stories.map((story) => (
              <article key={story.slug} className="grid items-center gap-8 md:grid-cols-2">
                <Link href={`/works/${story.entry.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-[28px] bg-[#141515]">
                    {story.entry.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={story.entry.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : null}
                  </div>
                </Link>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span key={tag} className="pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium">{story.entry.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{story.entry.description}</p>
                  <p className="mt-6 text-sm font-medium text-white/80">Results we helped {story.entry.title} achieve</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {story.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-12">
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

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-[180px_1fr]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.photoSrc} alt="" className="h-40 w-40 rounded-full object-cover" />
          <div>
            <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-5xl">{item.proofTitle}</h2>
            <p className="mt-4 text-white/70">
              {site.founderName}
              <span className="block text-sm text-white/50">{site.founderTitle} & CEO</span>
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {proofStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-medium md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PillCta href={bookCallHref} variant="lime" external>
                Book a Call
              </PillCta>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">
            See how we approach {item.title} design
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            A staged process with a checkpoint at each handoff, so scope and timing stay visible.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {process.map((stage) => (
              <li key={stage.step}>
                <p className="text-sm text-white/40">{stage.step}</p>
                <h3 className="mt-2 font-medium">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{stage.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">{item.productsTitle}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {item.products.map((product) => (
              <li key={product.title} className="rounded-[24px] bg-white/[0.04] p-6">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.items.map((pill) => (
                    <span key={pill} className="pill-tag">
                      {pill}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="max-w-[18ch] text-3xl font-medium tracking-tight md:text-5xl">{item.benefitsTitle}</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {item.benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3 className="text-xl font-medium">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{benefit.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">FAQ</h2>
          <div className="mt-10 space-y-8">
            {item.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
