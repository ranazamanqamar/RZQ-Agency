"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { partnerStories } from "@/lib/data/testimonials";

export function PartnersLove({ blend = false }: { blend?: boolean }) {
  const [active, setActive] = useState(0);
  const story = partnerStories[active] ?? partnerStories[0];
  const count = partnerStories.length;

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + count) % count);
  };

  return (
    <section className={`${blend ? "bg-transparent" : "bg-[#0b0b0b]"} px-5 py-20 md:px-8 md:py-28`}>
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-white md:text-6xl">
            Our Partners find numerous reasons to{" "}
            <span className="font-serif-italic font-normal text-lime">Love Us</span>
          </h2>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Reviewed on Clutch · 89+ reviews
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[284px_minmax(0,1fr)]">
          <div className="flex flex-col gap-2">
            {partnerStories.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex min-h-[94px] items-center gap-3 rounded-[24px] px-6 py-5 text-left transition-colors ${
                    isActive
                      ? "bg-[#3a3a3a] text-white"
                      : "bg-[#111] text-white/55 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logoSrc}
                    alt=""
                    className={`w-auto ${
                      item.company === "VOXE"
                        ? "h-7"
                        : item.company === "MYSO Finance"
                          ? "h-5"
                          : "h-4"
                    } ${isActive ? "opacity-100" : "opacity-70"}`}
                  />
                  <span className="text-sm font-medium">{item.company}</span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-lime text-black">
            <div className="flex min-h-[300px] flex-col gap-6 p-6 md:flex-row md:items-end md:gap-0 md:p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={story.photoSrc}
                alt={story.name}
                className="h-[220px] w-[158px] shrink-0 object-cover object-top md:h-[300px] md:w-[200px]"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-between md:h-[300px] md:px-8 md:py-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-black/55">{story.role}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-3xl font-bold leading-none">5.0</div>
                    <div className="mt-1 flex justify-end gap-0.5 text-black">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="mt-1 text-xs text-black/50">Clutch</div>
                  </div>
                </div>
                <blockquote className="mt-5 max-w-xl text-xl leading-snug md:mt-0 md:text-2xl">
                  “{story.quote}”
                </blockquote>
                <div className="mt-8 flex justify-end gap-2 md:mt-0">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => go(-1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c4e801] text-black transition hover:bg-[#b6d800]"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M14.378 8H1.802M1.802 8 8.09 1.712M1.802 8 8.09 14.288"
                        stroke="currentColor"
                        strokeWidth="1.51"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => go(1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c4e801] text-black transition hover:bg-[#b6d800]"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M2.704 8h11.318" stroke="currentColor" strokeWidth="1.51" />
                      <path
                        d="m8.363 13.658 5.66-5.659-5.66-5.659"
                        stroke="currentColor"
                        strokeWidth="1.51"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
