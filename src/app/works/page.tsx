"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { cases } from "@/lib/data/cases";
import { CaseCard } from "@/components/sections/case-card";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { TestimonialsMarquee } from "@/components/sections/testimonials";
import { WorksHeroSlider } from "@/components/sections/works-hero-slider";
import { awards } from "@/lib/data/testimonials";
import { bookCallHref } from "@/lib/site";

const filters = ["All", "Healthcare", "Fintech", "Web 3.0", "AI", "SaaS", "Cybersecurity", "HR tech"];

function filterCount(label: string) {
  if (label === "All") return cases.length;
  return cases.filter((c) => c.industry === label || c.tags.includes(label)).length;
}

export default function WorksPage() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? cases : cases.filter((c) => c.industry === filter || c.tags.includes(filter))),
    [filter],
  );

  return (
    <>
      <section className="works-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 md:pt-14">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Home / Works</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              We transform{" "}
              <span className="font-serif-italic font-normal text-lime">Ideas</span> into design{" "}
              <span className="font-serif-italic font-normal text-lime">Success Stories</span>
            </h1>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
              <div className="flex -space-x-2">
                {["bg-blue-500", "bg-violet-500", "bg-emerald-500"].map((c) => (
                  <span key={c} className={`h-7 w-7 rounded-full border-2 border-black ${c}`} />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                500+ Projects Done
              </span>
              <Check className="h-4 w-4 text-lime" />
            </div>
            <div className="mt-8">
              <PillCta href="#works-grid" variant="lime">
                Show all cases ({cases.length}+)
              </PillCta>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-white/60">
              <div>
                <div className="text-lime">★★★★★</div>
                Clutch
              </div>
              <div>
                <div className="text-lime">★★★★★</div>
                Awarded
              </div>
            </div>
          </div>
          <div className="relative">
            <WorksHeroSlider />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Over 500+ businesses globally have relied on us to craft their digital products
          </h2>
        </div>
      </section>

      <section id="works-grid" className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Works that{" "}
            <span className="font-serif-italic font-normal text-lime">Power Growth</span>
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Industries
              </p>
              <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:gap-1.5">
                {filters.map((f) => {
                  const count = filterCount(f);
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`flex items-center justify-between gap-3 rounded-full px-4 py-2.5 text-left text-sm transition lg:w-full ${
                        active
                          ? "bg-lime font-medium text-black"
                          : "border border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <span>{f === "All" ? "All Industries" : f}</span>
                      <span className={active ? "text-black/60" : "text-white/40"}>({count})</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6">
                <PillCta href={bookCallHref} variant="lime" external className="w-full justify-center lg:w-auto">
                  Book a Call
                </PillCta>
              </div>
            </aside>

            <div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item) => (
                  <CaseCard key={item.slug} item={item} />
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="mt-10 text-center text-white/50">There is no results yet</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">We earned Industry Recognition and Numerous Awards</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {awards.map((a) => (
              <span key={a} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden border-t border-white/5">
        <div className="mx-auto mb-8 max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">Our Partners find numerous reasons to Love Us</h2>
        </div>
        <TestimonialsMarquee />
      </section>

      <BookCallBand />
    </>
  );
}
