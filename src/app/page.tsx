import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { HomeReviews } from "@/components/sections/testimonials";
import { HeroHoverWord } from "@/components/sections/hero-hover-word";
import { HeroPlayShowreel } from "@/components/sections/hero-play-showreel";
import { HeroLogoMarquee } from "@/components/sections/hero-logo-marquee";
import { StatsPillColumns } from "@/components/sections/stats-pill-columns";
import { BlogCard } from "@/components/sections/blog-card";
import { HomeServicesPanel } from "@/components/sections/home-services-panel";
import { HomeFeaturedCases } from "@/components/sections/home-featured-cases";
import { HomeAbout } from "@/components/sections/home-about";
import { AwardsRecognition } from "@/components/sections/awards-recognition";
import { homepageIndustrySlugs } from "@/lib/data/nav";
import { industries } from "@/lib/data/industries";
import { blogPosts } from "@/lib/data/blog";

const blogAuthorAvatars: Record<string, string> = {
  "Alyona Deieieva": "/blog/authors/alyona.avif",
  "Valeriia Serohina": "/blog/authors/valeriia.avif",
  "Vlad Gavriluk": "/blog/authors/vlad.avif",
};

export const metadata: Metadata = {
  title: `Digital Product Design And Development Company - ${site.name}`,
};

export default function HomePage() {
  return (
    <>
      <div className="hero-glow">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-6 md:px-8 md:pb-10 md:pt-10">
          <p className="text-center text-sm font-normal text-white/55">
            Digital Product Design And Development Company
          </p>
          <h1 className="hero-headline mx-auto mt-4 max-w-[1400px] text-center text-[2rem] font-normal leading-[1.12] text-white sm:text-[2.6rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.35rem]">
            <span className="block">Your design &amp; dev partner that</span>
            <span className="mt-2 block whitespace-nowrap max-sm:whitespace-normal md:mt-2.5">
              unites{" "}
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
                <span className="font-serif-italic font-normal tracking-normal">product</span>
              </span>
            </span>
          </h1>

          <div className="mt-10 grid items-start gap-8 md:mt-12 md:grid-cols-[minmax(0,300px)_minmax(0,300px)_1fr]">
            <div>
              <p className="text-sm text-white/35">{"{/}"}</p>
              <p className="mt-1 max-w-[300px] text-sm leading-relaxed text-white/55">
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
              <p className="text-sm text-white/35">{"{/}"}</p>
              <p className="mt-1 max-w-[300px] text-sm leading-relaxed text-white/55">
                Since 2016, we&apos;ve helped to achieve business goals and deliver results that
                inspire
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <PillCta href={bookCallHref} variant="lime" split external>
                Book a Call
              </PillCta>
            </div>
          </div>
        </div>
        <HeroLogoMarquee />
      </section>

      <section className="choice-wash relative py-24 md:py-32">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="ml-auto mr-4 max-w-[16ch] text-right text-[2.15rem] font-normal leading-[1.15] tracking-[0.02em] text-white md:mr-16 md:text-5xl lg:mr-24 lg:text-[3.75rem]">
            {site.name} is your perfect
            <br />
            choice in terms of
          </h2>
          <ul className="mx-auto mt-16 max-w-3xl md:mt-20">
            {[
              "Hiring system with immediate start",
              "Guaranteed on-time deliverables",
              "Flexible collaboration & fixed monthly rate",
            ].map((item) => (
              <li
                key={item}
                className="grid grid-cols-[auto_1fr] items-center gap-x-10 border-b border-white/10 py-6 text-base font-normal text-white last:border-b-0 md:gap-x-16 md:text-lg"
              >
                <span className="text-white/35">{"{/}"}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-20">
          <StatsPillColumns />
        </div>
      </section>
      </div>

      <HomeServicesPanel />
      <HomeFeaturedCases />
      <HomeAbout />
      <AwardsRecognition variant="home" />

      <section className="section-pad bg-transparent">
        <div className="relative mx-auto mb-12 max-w-[1400px] px-5 md:mb-16 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40 md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2">
            Verified reviews
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-medium leading-tight md:mt-0 md:text-6xl">
            Join 250+ companies{" "}
            <span className="font-serif-italic font-normal">who’ve built and scaled</span> with our{" "}
            {site.name} team
          </h2>
        </div>
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <HomeReviews />
        </div>
      </section>

      <section className="home-experience-glow section-pad">
        <div className="relative z-[1] mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              <span className="mr-3 text-white/35">{"{/}"}</span>
              Our experience matches{" "}
              <span className="font-serif-italic font-normal">your market</span>
            </h2>
            <p className="max-w-xl text-white/70">
              {site.name} product designers craft custom solutions that balance your business value
              with seamless user experience. Only proven industry methods that work.
            </p>
          </div>
          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-12">
            <div className="relative">
              <div className="pointer-events-none absolute -left-4 -top-8 h-48 w-48 rounded-full bg-[#3dff7a]/35 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/works/home-cases/mojo-1.avif"
                alt=""
                className="relative w-full rounded-[28px] object-cover"
              />
            </div>
            <div>
              {homepageIndustrySlugs
                .map((slug) => industries.find((ind) => ind.slug === slug))
                .filter((ind): ind is (typeof industries)[number] => Boolean(ind))
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="group flex flex-col gap-4 border-b border-white/10 px-4 py-6 transition hover:rounded-[20px] hover:border-transparent hover:bg-lime sm:flex-row sm:items-center sm:justify-between"
                  >
                    <h3 className="flex items-center gap-3 text-3xl font-medium text-white/55 transition group-hover:text-black md:text-4xl">
                      <ArrowUpRight className="h-6 w-6 shrink-0 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                      {ind.slug === "healthcare" ? "Healthcare" : ind.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {ind.tags.map((t) => (
                        <span
                          key={t}
                          className="pill-tag transition group-hover:border-black/15! group-hover:bg-black/10! group-hover:text-black!"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="home-blog-wash">
      <section className="relative z-[1] section-pad">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid items-start gap-8 md:grid-cols-[120px_minmax(0,1fr)]">
            <p className="pt-3 text-xs uppercase tracking-[0.16em] text-white/40">blog</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight md:text-6xl">
                Get real <span className="font-serif-italic font-normal">growth insights</span> and
                proven tactics for digital success
              </h2>
              <div className="mt-8">
                <PillCta href="/blog" variant="lime" split>
                  Read more articles
                </PillCta>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                avatar={blogAuthorAvatars[post.author]}
              />
            ))}
          </div>
        </div>
      </section>

      <BookCallBand blend />
      </div>
    </>
  );
}
