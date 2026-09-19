import type { Metadata } from "next";
import Link from "next/link";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { CaseCarousel } from "@/components/sections/case-carousel";
import { BookCallBand } from "@/components/sections/book-call-band";
import { TestimonialsMarquee } from "@/components/sections/testimonials";
import { FounderPhoto } from "@/components/founder-photo";
import { HeroHoverWord } from "@/components/sections/hero-hover-word";
import { HeroPlayShowreel } from "@/components/sections/hero-play-showreel";
import { StatsPillColumns } from "@/components/sections/stats-pill-columns";
import { BlogCard } from "@/components/sections/blog-card";
import { carouselCases } from "@/lib/data/cases";
import {
  brandingServices,
  designServices,
  developmentServices,
} from "@/lib/data/nav";
import { industries } from "@/lib/data/industries";
import { awards } from "@/lib/data/testimonials";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: `Digital Product Design And Development Company - ${site.name}`,
};

export default function HomePage() {
  const serviceGroups = [
    { title: "Branding", items: brandingServices },
    { title: "Design", items: designServices },
    { title: "Development", items: developmentServices.slice(0, 5) },
  ];

  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-white/45 md:text-sm">
            Digital Product Design And Development Company
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-center text-[2rem] font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            <span className="block">Your design &amp; dev partner that unites</span>
            <span className="mt-2 block md:mt-3">
              <HeroHoverWord accent="lime">brand</HeroHoverWord>
              ,{" "}
              <HeroHoverWord accent="cyan">website</HeroHoverWord>
              ,{" "}
              <HeroHoverWord accent="violet">ui/ux design</HeroHoverWord>
            </span>
            <span className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:mt-3">
              <HeroPlayShowreel />
              <span>
                into a holistic{" "}
                <span className="font-serif-italic font-normal">product</span>
              </span>
            </span>
          </h1>

          <div className="mt-14 grid items-end gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
            <div>
              <p className="text-sm text-white/55">
                <span className="mr-2 text-white/35">{"{/}"}</span>
                Works closely with reputable brands, businesses and fortune 500 companies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SaaS", "AI", "Web 3.0"].map((t) => (
                  <Link
                    key={t}
                    href={`/industries/${t === "Web 3.0" ? "web3" : t.toLowerCase()}`}
                    className="pill-tag hover:border-lime hover:text-lime"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-white/55">
                <span className="mr-2 text-white/35">{"{/}"}</span>
                Since 2016, we&apos;ve helped to achieve business goals and deliver results that
                inspire
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <PillCta href={bookCallHref} variant="lime" arrow="left" external>
                Book a Call
              </PillCta>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[18vw] font-bold leading-none text-white/[0.04]">
          +170%&nbsp;4.6×&nbsp;−37%
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {site.name} is your perfect choice in terms of
            </h2>
            <ul className="mt-8 space-y-0 divide-y divide-white/10">
              {[
                "Hiring system with immediate start",
                "Guaranteed on-time deliverables",
                "Flexible collaboration & fixed monthly rate",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 py-5 text-white/80">
                  <span className="text-white/35">{"{/}"}</span>
                  {item}
                </li>
              ))}
            </ul>
            <PillCta href={bookCallHref} variant="lime" className="mt-6" external>
              Book a Call
            </PillCta>
          </div>
        </div>

        <div className="relative mt-20">
          <StatsPillColumns />
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            Digital Product Design &amp; Development Services We Offer
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-lg font-semibold text-white/90">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]"
                      >
                        <span className="mt-0.5 h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-lime/80 to-emerald-500/80" />
                        <span>
                          <span className="block font-medium group-hover:text-lime">{item.title}</span>
                          <span className="block text-sm text-white/45">{item.description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">our cases</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Grow revenue and maximize ROI with our product design and development services.
              </h2>
            </div>
            <PillCta href="/works" variant="lime">
              Explore all cases
            </PillCta>
          </div>
          <CaseCarousel items={carouselCases} />
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">about us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Digital design experts who fuel growth
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <FounderPhoto size={64} />
              <div>
                <div className="font-medium">{site.founderName}</div>
                <div className="text-sm text-white/50">{site.founderTitle}</div>
              </div>
            </div>
            <PillCta href="/about" className="mt-8">
              Learn about {site.name}
            </PillCta>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">55+</div>
              <div className="mt-2 text-sm text-white/60">Team members</div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">$1B+</div>
              <div className="mt-2 text-sm text-white/60">Our clients raised</div>
            </div>
            <div className="col-span-2 rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">3</div>
              <div className="mt-2 text-sm text-white/60">Unicorn clients</div>
              <p className="mt-3 text-sm text-white/45">
                A global team that understands your market, users, and how to make products win
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Awards &amp; Achievements</h2>
          <p className="mt-3 max-w-2xl text-white/55">
            While the growth of our clients is what matters most, it`s nice to get awards
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {awards.map((a) => (
              <span key={a} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden border-t border-white/5">
        <div className="mx-auto mb-10 max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Verified reviews</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Join 250+ companies who’ve built and scaled with our {site.name} team
          </h2>
        </div>
        <TestimonialsMarquee />
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Our experience matches your market</h2>
          <p className="mt-3 max-w-2xl text-white/55">
            <span className="mr-2 text-white/35">{"{/}"}</span>
            {site.name} product designers craft custom solutions that balance your business value
            with seamless user experience. Only proven industry methods that work.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime/40 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold">{ind.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ind.tags.map((t) => (
                    <span key={t} className="pill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">blog</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Get real growth insights and proven tactics for digital success
              </h2>
            </div>
            <Link href="/blog" className="hidden text-sm text-lime hover:underline md:inline">
              Read more articles →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
