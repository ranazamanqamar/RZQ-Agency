"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeReviews, testimonials } from "@/lib/data/testimonials";

function QuoteWithEmphasis({ quote, emphasis }: { quote: string; emphasis: string }) {
  const index = quote.toLowerCase().indexOf(emphasis.toLowerCase());
  if (index < 0) return <>“{quote}”</>;
  const before = quote.slice(0, index);
  const match = quote.slice(index, index + emphasis.length);
  const after = quote.slice(index + emphasis.length);
  return (
    <>
      “{before}
      <span className="font-serif-italic">{match}</span>
      {after}”
    </>
  );
}

export function HomeReviews() {
  const [active, setActive] = useState(0);
  const review = homeReviews[active] ?? homeReviews[0];
  const count = homeReviews.length;
  const go = (dir: -1 | 1) => setActive((i) => (i + dir + count) % count);

  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        {homeReviews.map((item, i) => (
          <button
            key={item.company}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`flex h-[88px] items-center justify-center rounded-[22px] px-6 transition lg:h-auto lg:min-h-[92px] ${
              active === i ? "bg-[#3a3a3a]" : "bg-[#1a1a1a] hover:bg-[#242424]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.logo} alt={item.company} className="max-h-8 max-w-[140px] object-contain" />
          </button>
        ))}
      </div>
      <div className="relative flex min-h-[420px] flex-col rounded-[32px] bg-lime px-8 py-10 text-black md:px-14 md:py-12">
        <div className="absolute right-6 top-6 flex gap-2 md:right-8 md:top-8">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10 transition hover:bg-black/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10 transition hover:bg-black/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <blockquote className="mx-auto my-auto max-w-3xl pt-12 text-center text-3xl leading-snug md:text-5xl">
          <QuoteWithEmphasis quote={review.quote} emphasis={review.emphasis} />
        </blockquote>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={review.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-serif-italic text-xl">{review.name}</div>
              <div className="text-sm text-black/60">{review.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-medium leading-none">5.0</span>
            <div>
              <div className="text-sm font-medium">Clutch</div>
              <div className="flex gap-0.5 text-sm leading-none">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="overflow-hidden">
      <div className="marquee flex w-max gap-4">
        {doubled.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="w-[320px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 md:w-[380px]"
          >
            <blockquote className="text-sm leading-relaxed text-white/80 md:text-base">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5">
              <div className="font-medium text-white">{t.name}</div>
              <div className="text-sm text-white/45">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsGrid() {
  const [active, setActive] = useState(0);
  const list = testimonials.slice(0, 4);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-[24px] border p-6 text-left transition-all ${
              active === i
                ? "border-lime/40 bg-white/[0.06]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20"
            }`}
          >
            <p className="text-sm leading-relaxed text-white/80">“{t.quote}”</p>
            <div className="mt-4 font-medium text-white">{t.name}</div>
            <div className="text-sm text-white/45">{t.role}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
