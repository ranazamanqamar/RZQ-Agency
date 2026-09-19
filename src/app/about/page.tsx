import type { Metadata } from "next";
import Link from "next/link";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { FounderPhoto } from "@/components/founder-photo";
import { BookCallBand } from "@/components/sections/book-call-band";
import { CaseCarousel } from "@/components/sections/case-carousel";
import { TestimonialsMarquee } from "@/components/sections/testimonials";
import { awards, stats } from "@/lib/data/testimonials";
import { carouselCases } from "@/lib/data/cases";

export const metadata: Metadata = {
  title: "About Us — Experienced Product Design Team",
};

const values = [
  {
    title: "Strategy before execution",
    body: "We apply system thinking to reduce fragmentation across teams and workflows.",
  },
  {
    title: "Responsible ownership",
    body: `Our goal is long-term partnerships, so the ${site.name} team takes responsibility for outcomes.`,
  },
  {
    title: "Data-driven decision making",
    body: "We ground every major decision in research, analytics, and measurable signals gathered during discovery stage.",
  },
];

const pillars = [
  {
    title: "Platform modernization without disruption",
    body: "We upgrade core digital systems while protecting operational continuity.",
  },
  {
    title: "Embedded product & design leadership",
    body: "You gain product and design depth that integrates directly into your environment.",
  },
  {
    title: "Governance and operational clarity",
    body: "You operate with defined ownership, transparent priorities, and structured oversight.",
  },
  {
    title: "Confident evolution under real constraints",
    body: "You move forward despite legacy dependencies, compliance requirements, and internal complexity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow">
        <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-8 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            What started in 2016 now supports complex enterprise systems at scale
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            We structure every engagement around long-term platform resilience, operational
            efficiency, performance, and responsible growth.
          </p>
          <PillCta href="/about" className="mt-8">
            Learn about {site.name} with AI
          </PillCta>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 md:grid-cols-3 md:px-8">
          {values.map((v) => (
            <div key={v.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm text-white/55">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.16em] text-lime">Mission</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
              Our mission is to modernize or build the digital foundations of 100+ Fortune 500 and
              enterprises whose systems have the greatest impact on global quality of life.
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.16em] text-lime">Vision</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
              Our vision is to grow into a disciplined, globally respected organization that
              enterprises trust with their most complex and mission-critical digital environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Core leadership team</h2>
          <p className="mt-3 max-w-2xl text-white/55">
            Strong systems require strong teams. Since 2016, we’ve built a multidisciplinary team
            united by shared standards, professional discipline, and commitment to our mission.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[24px] border border-lime/30 bg-white/[0.05] p-6">
              <FounderPhoto size={88} />
              <div className="mt-4 text-lg font-semibold">{site.founderName}</div>
              <div className="text-sm text-white/50">{site.founderTitle}</div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-lime hover:underline"
              >
                LinkedIn
              </a>
            </div>
            {[
              {
                name: "Alexey Kovalchuk",
                role: "Chief Operation Officer",
                photo: "/team/coo.png",
              },
              {
                name: "Maksym Katarzhuk",
                role: "Chief Marketing Officer",
                photo: "/team/cmo.png",
              },
              {
                name: "Tina Bohdanova",
                role: "Bizdev Manager",
                photo: "/team/bizdev.png",
              },
            ].map((p) => (
              <div key={p.name} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />
                <div className="mt-4 text-lg font-semibold">{p.name}</div>
                <div className="text-sm text-white/50">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">
            While the growth of our clients is what matters most, it`s nice to get awards
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {awards.map((a) => (
              <span key={a} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Stability While You Transform</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <FounderPhoto size={56} />
            <div>
              <div className="font-medium">
                {site.founderName} · {site.founderTitle}
              </div>
              <p className="text-sm text-white/55">
                Let’s review your current platform landscape and identify where structure, alignment,
                and governance will create the strongest impact.
              </p>
            </div>
            <PillCta href={bookCallHref} variant="lime" external>
              Book a Call
            </PillCta>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">5.0</div>
              <div className="mt-2 text-sm text-white/55">Clutch rate</div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">500+</div>
              <div className="mt-2 text-sm text-white/55">Projects</div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-bold text-lime">50+</div>
              <div className="mt-2 text-sm text-white/55">Team members</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden border-t border-white/5">
        <div className="mx-auto mb-8 max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">What product leaders say about us</h2>
        </div>
        <TestimonialsMarquee />
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-3xl font-bold">The results our projects achieved</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-4xl font-bold text-lime">{s.value}</div>
                <div className="mt-2 font-medium">{s.label}</div>
                <p className="mt-2 text-sm text-white/50">{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/55">
            Let’s discover what measurable impact looks like for your platform.{" "}
            <Link href="/works" className="text-lime hover:underline">
              See works →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="mb-8 text-3xl font-bold">Works that power growth</h2>
          <CaseCarousel items={carouselCases} />
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
