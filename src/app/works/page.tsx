"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown, Star, Trophy } from "lucide-react";
import { cases } from "@/lib/data/cases";
import { CaseCard } from "@/components/sections/case-card";
import { PillCta } from "@/components/pill-cta";
import { WorksHeroSlider } from "@/components/sections/works-hero-slider";
import { ClientLogos } from "@/components/sections/client-logos";
import { WorksMatchCta } from "@/components/sections/works-match-cta";
import { AwardsRecognition } from "@/components/sections/awards-recognition";
import { PartnersLove } from "@/components/sections/partners-love";
import { bookCallHref } from "@/lib/site";

const industryFilters = ["All", "Web 3.0", "SaaS", "Fintech", "Healthcare", "AI", "Other"] as const;
const otherIndustries = new Set(["Cybersecurity", "HR tech"]);

const serviceFilters = [
  "All",
  "Redesign",
  "Graphic Design",
  "MVP",
  "UI/UX Design",
  "Branding",
  "Web Development",
  "Website Design",
] as const;

const serviceAliases: Record<string, string[]> = {
  Redesign: ["Redesign", "Website Redesign"],
  "Graphic Design": ["Graphic Design"],
  MVP: ["MVP"],
  "UI/UX Design": ["UI/UX Design", "UI/UX design", "UI/UX & Brand design"],
  Branding: ["Branding", "Brand Identity"],
  "Web Development": ["Web Development"],
  "Website Design": ["Website Design", "Web Design"],
};

function matchesIndustry(industry: string, filter: string) {
  if (filter === "All") return true;
  if (filter === "Other") return otherIndustries.has(industry);
  if (filter === "Web 3.0") return industry === "Web 3.0" || industry === "Crypto";
  return industry === filter;
}

function matchesService(tags: string[], service: string) {
  if (service === "All") return true;
  const aliases = serviceAliases[service] ?? [service];
  return tags.some((tag) => aliases.some((alias) => tag.toLowerCase() === alias.toLowerCase()));
}

function industryCount(label: string) {
  return cases.filter((c) => matchesIndustry(c.industry, label)).length;
}

function serviceCount(label: string) {
  return cases.filter((c) => matchesService(c.tags, label)).length;
}

export default function WorksPage() {
  const [industry, setIndustry] = useState<(typeof industryFilters)[number]>("All");
  const [service, setService] = useState<(typeof serviceFilters)[number]>("All");
  const [industriesOpen, setIndustriesOpen] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(true);

  const filtered = useMemo(
    () =>
      cases.filter((c) => {
        if (!matchesIndustry(c.industry, industry)) return false;
        if (!matchesService(c.tags, service)) return false;
        return true;
      }),
    [industry, service],
  );

  return (
    <>
      <section className="works-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 px-5 pb-10 pt-8 md:grid-cols-2 md:px-8 md:pb-12 md:pt-10">
          <div className="flex h-full flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
              Home / Works
            </p>
            <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
              We transform
              <br />
              <span className="font-serif-italic font-normal text-lime">Ideas</span> into design
              <br />
              <span className="font-serif-italic font-normal text-lime">Success Stories</span>
            </h1>
            <div className="mt-auto pt-8">
              <div className="mb-6 inline-flex w-fit items-center gap-3 self-start rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
                <div className="flex -space-x-2">
                  {["bg-[#5b8cff]", "bg-[#7c5cff]", "bg-[#2ee6a6]"].map((c) => (
                    <span key={c} className={`h-7 w-7 rounded-full border-2 border-black ${c}`} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                  500+ Projects Done
                </span>
                <Check className="h-4 w-4 text-lime" strokeWidth={3} />
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <PillCta href="#works-grid" variant="lime" arrow="left">
                Show all cases ({cases.length}+)
              </PillCta>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">Clutch</div>
                  <div className="mt-1 flex gap-0.5 text-white">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-white">
                    <Trophy className="h-3.5 w-3.5" strokeWidth={2} />
                    Awarded
                  </div>
                  <div className="mt-1 flex gap-0.5 text-white">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <WorksHeroSlider />
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] pt-10 pb-4 md:pt-12 md:pb-5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <ClientLogos />
        </div>
      </section>

      <section id="works-grid" className="bg-[#0b0b0b] pt-6 pb-20 md:pt-8 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid items-start gap-8 md:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="md:sticky md:top-28 md:self-start">
              <div className="flex max-h-[min(380px,calc(100vh-10rem))] flex-col overflow-hidden rounded-[28px] bg-[#141515]">
                <div className="works-sidebar-scroll min-h-0 flex-1 overflow-y-scroll px-4 py-5">
                  <button
                    type="button"
                    onClick={() => setIndustriesOpen((o) => !o)}
                    className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45"
                  >
                    Industries
                    <ChevronDown
                      className={`h-4 w-4 transition ${industriesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {industriesOpen && (
                    <div className="mt-4 grid grid-cols-2 justify-items-start gap-2">
                      {industryFilters.map((f) => {
                        const active = industry === f;
                        return (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setIndustry(f)}
                            className={`w-fit whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] leading-tight transition ${
                              active
                                ? "bg-lime font-medium text-black"
                                : "bg-white/[0.07] text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {f === "All" ? "All Industries" : f}{" "}
                            <span className={active ? "text-black/55" : "text-white/35"}>
                              ({industryCount(f)})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setServicesOpen((o) => !o)}
                    className="mt-6 flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mt-4 grid grid-cols-2 justify-items-start gap-2">
                      {serviceFilters.map((f) => {
                        const active = service === f;
                        return (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setService(f)}
                            className={`w-fit whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] leading-tight transition ${
                              active
                                ? "bg-lime font-medium text-black"
                                : "bg-white/[0.07] text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {f === "All" ? "All Services" : f}{" "}
                            <span className={active ? "text-black/55" : "text-white/35"}>
                              ({serviceCount(f)})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <PillCta
                  href={bookCallHref}
                  variant="lime"
                  external
                  arrow="left"
                  className="w-full justify-start"
                >
                  Book a Call
                </PillCta>
              </div>
            </aside>

            <div>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Works that{" "}
                <span className="font-serif-italic font-normal text-lime">Power Growth</span>
              </h2>
              <div className="mt-8 grid gap-x-6 gap-y-10 overflow-visible sm:grid-cols-2">
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

      <div className="works-awards-wash">
        <AwardsRecognition />
        <PartnersLove blend />
        <WorksMatchCta />
      </div>
    </>
  );
}
