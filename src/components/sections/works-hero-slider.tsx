"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CountryFlag } from "@/components/country-flag";

const DURATION_MS = 4500;

type Slide = {
  slug: string;
  image: string;
  tags: string[];
  /** ISO 3166-1 alpha-2 country code for flag image */
  country?: string;
  description: string;
};

const slides: Slide[] = [
  {
    slug: "piko-health",
    image: "/works/piko-health.png",
    tags: ["Healthcare", "Web app"],
    country: "pt",
    description:
      "Branding, landing page, and web app design for a personalized healthcare platform.",
  },
  {
    slug: "fundediq",
    image: "/works/fundediq.png",
    tags: ["Fintech", "UI/UX & Brand design"],
    country: "ae",
    description: "Branding & UI/UX design for a prop trading platform",
  },
  {
    slug: "health-hq",
    image: "/works/health-hq.png",
    tags: ["Healthcare", "UI/UX design"],
    country: "us",
    description: "Mobile app redesign for a children's health tracking application.",
  },
  {
    slug: "imed",
    image: "/works/imed.png",
    tags: ["Healthcare", "Pitch deck"],
    country: "ua",
    description: "Pitch deck design for a national e-health ecosystem",
  },
];

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
      className="group/slider relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide image — zooms on hover of slide OR meta; meta stays put */}
      <Link
        href={`/works/${current.slug}`}
        aria-label={current.description}
        className={cn(
          "relative z-10 block overflow-hidden rounded-[24px] shadow-[0_16px_48px_rgba(0,0,0,0.35)]",
          "origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover/slider:scale-[1.035]",
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0b0b0b]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.slug}
            src={`${current.image}?v=4`}
            alt={current.description}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      {/* Meta card — separate, very close; fixed position (no zoom) */}
      <Link
        href={`/works/${current.slug}`}
        className="relative z-0 mt-1 block rounded-[24px] bg-white px-5 pb-5 pt-4 text-black shadow-[0_12px_40px_rgba(0,0,0,0.25)] md:px-6 md:pb-6 md:pt-5"
      >
          <div className="flex flex-wrap items-center gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#ececf2] px-3 py-1 text-xs font-medium text-black/70"
              >
                {tag}
              </span>
            ))}
            {current.country ? (
              <span className="inline-flex items-center rounded-full bg-[#ececf2] px-2.5 py-1.5">
                <CountryFlag code={current.country} />
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-base font-semibold leading-snug tracking-tight text-black md:text-lg">
            {current.description}
          </p>

          <div className="mt-5 flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.slug}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  go(i);
                }}
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10"
              >
                <span
                  key={i === index ? progressKey : `idle-${i}`}
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
              </button>
            ))}
          </div>
        </Link>
    </div>
  );
}
