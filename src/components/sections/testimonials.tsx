"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

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
