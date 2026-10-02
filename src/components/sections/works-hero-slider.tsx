"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CountryFlag } from "@/components/country-flag";
import { getCase } from "@/lib/data/cases";

const DURATION_MS = 4500;
const SLIDE_SLUGS = ["piko-health", "fundediq", "health-hq", "imed"] as const;

type Slide = {
  slug: string;
  image: string;
  tags: string[];
  /** ISO 3166-1 alpha-2 country code for flag image */
  country?: string;
  description: string;
};

const slides: Slide[] = SLIDE_SLUGS.map((slug) => {
  const item = getCase(slug);
  if (!item?.image) throw new Error(`Missing Works cover for slide ${slug}`);
  return {
    slug,
    image: item.image,
    tags: item.tags.slice(0, 2),
    country: item.country,
    description: item.description,
  };
});

export function WorksHeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(index + 1), DURATION_MS);
    return () => window.clearInterval(id);
  }, [index, paused, go]);

  const current = slides[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Link
        href={`/works/${current.slug}`}
        aria-label={current.description}
        className="group/photo relative z-10 block overflow-hidden rounded-[32px] shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.slug}
                className="h-full w-full shrink-0 basis-full overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${slide.image}?v=4`}
                  alt={slide.description}
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    slide.slug === current.slug && "group-hover/photo:scale-[1.04]",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </Link>

      <Link
        href={`/works/${current.slug}`}
        className="relative z-0 mt-2 block rounded-[28px] bg-white px-6 py-4 text-black shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
      >
          <div className="flex h-8 flex-nowrap items-center gap-2 overflow-hidden">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#ececf2] px-3 py-1 text-xs font-medium text-black/70"
              >
                {tag}
              </span>
            ))}
            {current.country ? (
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#ececf2] px-2.5 py-1.5">
                <CountryFlag code={current.country} />
              </span>
            ) : null}
          </div>

          <p className="mt-3 line-clamp-2 min-h-[3rem] text-base font-semibold leading-snug tracking-tight text-black">
            {current.description}
          </p>

          <div className="mt-5 flex gap-1.5" role="group" aria-label="Slide progress">
            {slides.map((slide, i) => (
              <span
                key={slide.slug}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? true : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  go(i);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    go(i);
                  }
                }}
                className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-black/10"
              >
                <span
                  key={i === index ? progressKey : `${i}-${index}`}
                  className={cn(
                    "block h-full rounded-full bg-[#3b4dff]",
                    i < index && "w-full",
                    i > index && "w-0",
                    i === index && (paused ? "w-1/2" : "animate-works-progress"),
                  )}
                  style={
                    i === index && !paused
                      ? { animationDuration: `${DURATION_MS}ms` }
                      : undefined
                  }
                />
              </span>
            ))}
          </div>
        </Link>
    </div>
  );
}
