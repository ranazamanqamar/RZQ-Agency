"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { PillCta } from "@/components/pill-cta";
import { FounderPhoto } from "@/components/founder-photo";
import { CountryFlag } from "@/components/country-flag";
import { site, bookCallHref } from "@/lib/site";
import { carouselCases } from "@/lib/data/cases";

const CASE_ORDER = ["myso", "mojo-cx", "enzyme"] as const;

const homeCaseMedia: Record<
  string,
  { pills: string[]; country: string; photo: string; frames: string[] }
> = {
  myso: {
    pills: ["Web 3.0", "$2.4M raised"],
    country: "us",
    photo: "/works/home-cases/aetienne.avif",
    frames: [
      "/works/home-cases/myso-1.avif",
      "/works/home-cases/myso-2.avif",
      "/works/home-cases/myso-3.avif",
    ],
  },
  "mojo-cx": {
    pills: ["AI", "Digital Voice Analysing Tool"],
    country: "gb",
    photo: "/works/home-cases/jimmy.avif",
    frames: [
      "/works/home-cases/mojo-1.avif",
      "/works/home-cases/mojo-2.avif",
      "/works/home-cases/mojo-3.avif",
    ],
  },
  enzyme: {
    pills: ["UI/UX", "Crypto"],
    country: "fr",
    photo: "/works/home-cases/stephane.png",
    frames: [
      "/works/home-cases/enzyme-1.avif",
      "/works/home-cases/enzyme-2.avif",
      "/works/home-cases/enzyme-3.avif",
    ],
  },
};

function scrollToFrame(slug: string, dir: -1 | 1) {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(`[data-frame="${slug}"]`));
  if (!nodes.length) return;
  const marker = 180;
  let current = 0;
  let best = Number.POSITIVE_INFINITY;
  nodes.forEach((el, i) => {
    const dist = Math.abs(el.getBoundingClientRect().top - marker);
    if (dist < best) {
      best = dist;
      current = i;
    }
  });
  const next = current + dir;
  if (next >= 0 && next < nodes.length) {
    nodes[next].scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const index = CASE_ORDER.indexOf(slug as (typeof CASE_ORDER)[number]);
  const neighbor = CASE_ORDER[index + dir];
  if (!neighbor) return;
  const neighborNodes = Array.from(
    document.querySelectorAll<HTMLElement>(`[data-frame="${neighbor}"]`),
  );
  const target = dir === 1 ? neighborNodes[0] : neighborNodes[neighborNodes.length - 1];
  target?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function FeaturedCaseScroller() {
  return (
    <div className="space-y-8">
      {carouselCases.map((item) => {
        const media = homeCaseMedia[item.slug];
        if (!media) return null;
        return (
          <article
            key={item.slug}
            id={`home-case-${item.slug}`}
            className="grid items-start gap-8 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-10"
          >
            <div className="md:sticky md:top-28 md:self-start">
              <div className="flex flex-wrap items-center gap-2">
                {media.pills.map((pill) => (
                  <span key={pill} className="pill-tag">
                    {pill}
                  </span>
                ))}
                <span className="inline-flex h-8 items-center rounded-full border border-white/12 bg-white/6 px-2">
                  <CountryFlag code={media.country} />
                </span>
              </div>
              <h3 className="mt-6 max-w-xl text-3xl font-medium tracking-tight text-white md:text-[2.6rem] md:leading-[1.15]">
                {item.description}
              </h3>
              <div className="mt-6 h-px w-full max-w-md bg-white/15" />
              <div className="mt-5 flex items-center gap-3">
                <span className="font-serif-italic text-2xl text-white">Clutch</span>
                <span className="flex items-center gap-0.5 text-[#c6f54e]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
              {item.quote ? (
                <blockquote className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/80">
                  {item.quote}
                </blockquote>
              ) : null}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={media.photo}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-serif-italic text-lg text-white">{item.author}</div>
                    <div className="text-sm text-white/45">{item.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={`Previous ${item.title} image`}
                    onClick={() => scrollToFrame(item.slug, -1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Next ${item.title} image`}
                    onClick={() => scrollToFrame(item.slug, 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {media.frames.map((src, index) => (
                <div
                  key={src}
                  data-frame={item.slug}
                  className="flex min-h-[68vh] items-center"
                >
                  <Link href={`/works/${item.slug}`} className="block w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={index === 0 ? item.title : ""}
                      className="w-full rounded-[32px]"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HomeFeaturedCases() {
  return (
    <section className="bg-[#0b0b0b] px-5 pb-16 pt-2 md:px-8 md:pb-24 md:pt-3">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start gap-4 rounded-[48px] bg-[#1a1a1a] px-5 py-4 md:flex-row md:items-center md:gap-5 md:px-7 md:py-5">
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-3"
          >
            <FounderPhoto size={64} />
            <div>
              <div className="text-[15px] font-normal text-white">{site.founderName}</div>
              <div className="text-sm text-white/50">{site.founderTitle} &amp; CEO</div>
            </div>
          </Link>
          <h2 className="min-w-0 text-[1.2rem] font-normal leading-[1.35] text-white md:text-[1.25rem]">
            <span className="block md:whitespace-nowrap">Grow revenue and maximize ROI with our</span>
            <span className="block md:whitespace-nowrap">product design and development services.</span>
          </h2>
          <PillCta
            href={bookCallHref}
            variant="lime"
            split
            external
            className="ml-auto shrink-0 gap-1.5"
          >
            Book a Call
          </PillCta>
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.16em] text-white/40">our cases</p>

        <div className="mt-8">
          <FeaturedCaseScroller />
        </div>

        <div className="mt-14 flex justify-center">
          <PillCta href="/works" variant="lime" split>
            Explore all cases
          </PillCta>
        </div>
      </div>
    </section>
  );
}
