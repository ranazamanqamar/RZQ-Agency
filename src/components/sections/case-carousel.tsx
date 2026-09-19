"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data/cases";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CaseCarousel({ items }: { items: CaseStudy[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index % items.length];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!current) return null;

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
      <div className={`relative min-h-[340px] bg-gradient-to-br p-6 md:min-h-[420px] md:p-10 ${current.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="relative flex h-full flex-col justify-between gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill-tag">{current.industry}</span>
            {current.metric && <span className="pill-tag text-lime!">{current.metric}</span>}
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white md:text-4xl">{current.description}</h3>
            {current.quote && (
              <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                “{current.quote}”
              </p>
            )}
            {current.author && (
              <div className="mt-4 text-sm">
                <div className="font-medium text-white">{current.author}</div>
                <div className="text-white/50">{current.role}</div>
              </div>
            )}
            <Link
              href={`/works/${current.slug}`}
              className="mt-6 inline-flex text-sm font-medium text-lime hover:underline"
            >
              Explore case →
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index % items.length ? "w-8 bg-lime" : "w-4 bg-white/25"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:border-lime hover:text-lime"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:border-lime hover:text-lime"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
