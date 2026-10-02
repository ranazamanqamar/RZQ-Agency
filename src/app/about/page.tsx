import type { Metadata } from "next";
import { Building2, Check, Code2, Layout, Settings } from "lucide-react";
import { site, bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { FounderPhoto } from "@/components/founder-photo";
import { BookCallBand } from "@/components/sections/book-call-band";
import { FeaturedCaseScroller } from "@/components/sections/home-featured-cases";
import { AwardsRecognition } from "@/components/sections/awards-recognition";
import { partnerGridMarks, partnerLogoMarks } from "@/components/sections/hero-logo-marquee";
import { ScrollFillHeading } from "@/components/sections/scroll-fill-heading";
import { aiLinks } from "@/components/sections/home-about";
import { stats } from "@/lib/data/testimonials";

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
    icon: Settings,
    iconClass: "bg-sky-100 text-sky-500",
  },
  {
    title: "Embedded product & design leadership",
    body: "You gain product and design depth that integrates directly into your environment.",
    icon: Code2,
    iconClass: "bg-violet-100 text-violet-500",
  },
  {
    title: "Governance and operational clarity",
    body: "You operate with defined ownership, transparent priorities, and structured oversight.",
    icon: Layout,
    iconClass: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Confident evolution under real constraints",
    body: "You move forward despite legacy dependencies, compliance requirements, and internal complexity.",
    icon: Building2,
    iconClass: "bg-indigo-100 text-indigo-500",
  },
];

const leaders = [
  {
    name: site.founderName,
    role: `${site.founderTitle} & CEO`,
    photo: site.photoSrc,
    linkedin: site.linkedin,
    light: true,
  },
  {
    name: "Alexey Kovalchuk",
    role: "Chief Operation Officer",
    photo: "/about/alexey.avif",
  },
  {
    name: "Tina Bohdanova",
    role: "Bizdev Manager",
    photo: "/about/tina.avif",
  },
  {
    name: "Roman Van",
    role: "Bizdev Manager",
    photo: "/about/roman.webp",
  },
];

const model = [
  {
    title: "Integrated into your product structure",
    body: `${site.name} operates within your existing leadership, workflows, and technical environment to ensure alignment, continuity, and seamless collaboration across teams.`,
    mark: "code",
  },
  {
    title: "Controlled delivery architecture",
    body: "Our teams structure execution around defined standards, risk oversight, and predictable iteration cycles to maintain stability while advancing critical initiatives.",
    mark: "charts",
  },
  {
    title: "Decision governance and responsibility",
    body: "We establish clear decision rights, accountability boundaries, and measurable ownership to protect progress and strengthen outcome reliability.",
    mark: "bulb",
  },
] as const;

const faces = [
  { name: site.founderName.split(" ")[0], photo: site.photoSrc, place: "left-0 top-2" },
  { name: "Roman", photo: "/about/face-roman.avif", place: "right-0 top-6" },
  { name: "Alexey", photo: "/about/face-alexey.avif", place: "bottom-10 left-2" },
  { name: "Tina", photo: "/about/face-tina.avif", place: "bottom-2 right-4" },
];

const clutchReviews = [
  { photo: "/about/ola.avif", shift: "md:ml-6" },
  { photo: "/about/kirill.avif", shift: "md:ml-0" },
  { photo: "/about/aetienne.avif", shift: "md:ml-12" },
];

const quotes = [
  {
    quote:
      "Throughout the entire project all I saw was sheer will to keep pushing forward and adapting to whatever the next request was. Terrific job and we couldn't have done it without you.",
    name: "Ola Olusoga",
    role: "Vice President at WordPress",
    photo: "/about/ola.avif",
  },
  {
    quote:
      "Their UI/UX design skills were very impressive. Modern, creative, and best in class plus they were intuitive and 'got what we wanted' without any hand-holding and minimal direction.",
    name: "Esme Guevara",
    role: "CMO & Head of Product, QTalent",
    photo: "/about/esme.webp",
  },
  {
    quote: `We had a feeling that ${site.name} is not just a contract outsourcing team but part of our startup company. We had super close communication.`,
    name: "Kirill Onasenko",
    role: "CEO, VOXE",
    photo: "/about/kirill.avif",
  },
  {
    quote:
      "The process was something to be admired, they have a great idea of how to turn an idea into a visual product. They would also immediately make changes to any improvements we mentioned.",
    name: "Mohamed Shegow",
    role: "CEO, Sinta",
    photo: "/about/mohamed.avif",
  },
  {
    quote: `They understood our idea and gave us more feedback than expected. They did more than we asked them to do, which was excellent. ${site.name} produces excellent quality work.`,
    name: "Kristen Cheng",
    role: "Founder & CEO, BehindTitles",
    photo: "/about/kristen.webp",
  },
  {
    quote:
      "Their expertise and guidance were instrumental. They demonstrated their commitment to creating a product that resonated with our target audience, which led to improved user satisfaction.",
    name: "Aetienne Sardon",
    role: "Founder, MYSO Finance",
    photo: "/about/aetienne.avif",
  },
];

const quoteTags = ["Enterprises", "ASMEs", "Fortune 500"];

function ModelMark({ kind }: { kind: (typeof model)[number]["mark"] }) {
  if (kind === "code") {
    return (
      <svg viewBox="0 0 168 112" className="h-28 w-40" aria-hidden>
        <rect x="6" y="22" width="108" height="74" rx="16" fill="#12151c" stroke="white" strokeOpacity="0.75" />
        <path d="M28 52l-10 8 10 8M52 48l-8 24M72 52l10 8-10 8" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="78" r="22" fill="#d0f601" fillOpacity="0.18" />
        <circle cx="124" cy="72" r="16" fill="#101218" stroke="white" strokeWidth="2" />
        <circle cx="124" cy="72" r="6" fill="#d0f601" />
      </svg>
    );
  }
  if (kind === "charts") {
    return (
      <svg viewBox="0 0 168 112" className="h-28 w-40" aria-hidden>
        <rect x="8" y="28" width="92" height="68" rx="14" fill="#12151c" stroke="white" strokeOpacity="0.7" />
        <path d="M24 78V62M38 78V50M52 78V66M66 78V42" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <rect x="62" y="14" width="90" height="58" rx="14" fill="#161a22" stroke="white" strokeOpacity="0.75" />
        <path d="M78 54l14-16 12 8 18-20" fill="none" stroke="#d0f601" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="78" cy="54" r="3" fill="#d0f601" />
        <circle cx="122" cy="26" r="3" fill="#d0f601" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 168 112" className="h-28 w-40" aria-hidden>
      <rect x="10" y="16" width="108" height="82" rx="16" fill="none" stroke="white" strokeOpacity="0.45" strokeDasharray="5 6" />
      <path d="M58 62a16 16 0 1 1 22 14.8V82h-12v-5.2A16 16 0 0 1 58 62z" fill="none" stroke="white" strokeWidth="2.2" />
      <path d="M62 88h16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="128" cy="78" r="20" fill="#d0f601" />
      <path d="M120 84v-9h4l2.5-7h6.5v12l-3.5 6h-6.5z" fill="#111" />
    </svg>
  );
}

function LinkedInMark({ href }: { href?: string }) {
  const className =
    "absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold lowercase text-black";
  if (!href) return <span className={className}>in</span>;
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={className}>
      in
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="about-top">
        <div className="about-hero">
        <div className="mx-auto max-w-[980px] px-5 py-16 text-center md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">Home / About Us</p>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            What started in 2016 now supports{" "}
            <span className="font-serif-italic font-normal">complex enterprise systems</span> at scale
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            We structure every engagement around long-term platform resilience, operational
            efficiency, performance, and responsible growth.
          </p>
          <div className="mt-8 flex justify-center">
            <PillCta href={bookCallHref} variant="lime" external split>
              Tell us about your project
            </PillCta>
          </div>
        </div>
        </div>
        <div className="mx-auto max-w-[980px] px-5 pb-4 text-center md:px-8">
          <div className="rounded-[28px] border border-white/20 px-6 py-8 md:px-10">
            <p className="text-sm text-white/80">
              Partnering with enterprise platforms across global markets
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {partnerLogoMarks.slice(0, 5)}
            </div>
            <div className="mt-6 flex justify-center">{partnerLogoMarks[5]}</div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-16 text-left md:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <h2 className="text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              <span className="font-serif-italic font-normal">The principles</span>
              <span className="mt-1 block">behind our work</span>
            </h2>
            <div className="mt-12">
              {values.map((value) => (
                <div key={value.title} className="border-b border-white/15 py-6">
                  <h3 className="flex items-center gap-3 text-lg font-medium">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-black">
                      <Check className="h-4 w-4" strokeWidth={2.75} />
                    </span>
                    {value.title}
                  </h3>
                  <p className="mt-3 pl-10 text-white/60">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[15px] text-white">Learn about {site.name} with AI</p>
            <div className="mt-4 flex items-center gap-3">
              {aiLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2a2a] text-white transition hover:bg-white/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-14 space-y-12">
              <div>
                <h2 className="text-xs uppercase tracking-[0.16em] text-white/55">Mission</h2>
                <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">
                  Our mission is to modernize or build the digital foundations of 100+ Fortune 500 and
                  enterprises whose systems have the greatest impact on global quality of life.
                </p>
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-[0.16em] text-white/55">Vision</h2>
                <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">
                  Our vision is to grow into a disciplined, globally respected organization that
                  enterprises trust with their most complex and mission-critical digital environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-leadership section-pad">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Core leadership team</p>
          <ScrollFillHeading />
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {leaders.map((person) => (
              <article
                key={person.name}
                className={`relative h-[460px] w-[320px] shrink-0 overflow-hidden rounded-[28px] sm:w-[360px] ${
                  person.light
                    ? "bg-[linear-gradient(160deg,#f7f8ff_0%,#d5def8_48%,#b7c6f2_100%)] text-[#141515]"
                    : "bg-[radial-gradient(circle_at_72%_38%,#323a58,#12141c_62%)] text-white"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.photo}
                  alt=""
                  className={
                    person.light
                      ? "absolute inset-0 h-full w-full object-cover object-center"
                      : "absolute bottom-0 right-0 h-full w-[88%] object-contain object-bottom"
                  }
                />
                <div className="relative p-6">
                  <h3 className="text-2xl font-medium">{person.name}</h3>
                  <p className={person.light ? "mt-1 text-black/60" : "mt-1 text-white/65"}>
                    {person.role}
                  </p>
                </div>
                <LinkedInMark href={person.linkedin} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="about-approach-wash">
      <AwardsRecognition variant="home" />

      <section className="section-pad">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-center font-serif-italic text-5xl font-normal tracking-tight md:text-7xl">
            Our approach
          </h2>
          <p className="mt-4 text-center text-lg text-white/80 md:text-xl">
            Stability While You Transform
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-[28px] bg-white p-6 text-[#141515]"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${pillar.iconClass}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-8 text-lg font-medium leading-snug">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/55">{pillar.body}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-6 rounded-[28px] bg-[#16181d] px-5 py-5 md:px-6 lg:flex-row lg:items-center lg:gap-8">
            <div className="flex shrink-0 items-center gap-4">
              <div className="relative">
                <FounderPhoto size={72} />
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="absolute -bottom-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[11px] font-semibold lowercase text-black"
                >
                  in
                </a>
              </div>
              <div>
                <div className="font-medium">{site.founderName}</div>
                <div className="text-sm text-white/60">{site.founderTitle} &amp; CEO</div>
              </div>
            </div>
            <p className="flex-1 text-xl font-medium leading-snug md:text-2xl">
              Let’s review your current platform landscape and identify where structure, alignment,
              and governance will create the strongest impact.
            </p>
            <PillCta href={bookCallHref} variant="lime" external split className="shrink-0">
              Book a Call
            </PillCta>
          </div>
        </div>
      </section>
      </div>

      <section className="about-model section-pad">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            Our operating model{" "}
            <span className="font-serif-italic font-normal text-lime">reduces</span> delivery risk
            at scale.
          </h2>
          <p className="mt-8 text-sm text-white/70">How it works</p>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0">
            {model.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col md:px-8 ${
                  index > 0 ? "md:border-l md:border-white/15" : "md:pl-0"
                } ${index === model.length - 1 ? "md:pr-0" : ""}`}
              >
                <h3 className="text-2xl font-medium leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{item.body}</p>
                <div className="mt-auto pt-10">
                  <ModelMark kind={item.mark} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-numbers section-pad overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-right text-4xl font-medium tracking-tight md:text-6xl">
            {site.name}{" "}
            <span className="font-serif-italic font-normal text-[#c4b5fd]">story</span>
            <span className="mt-1 block">in numbers</span>
          </h2>
          <div className="mt-16 grid items-end gap-16 md:grid-cols-3 md:gap-6">
            <div className="relative">
              <div className="mb-4 flex flex-col items-start gap-2 md:absolute md:-top-2 md:left-0 md:z-10 md:mb-0">
                {clutchReviews.map((review) => (
                  <span
                    key={review.photo}
                    className={`inline-flex items-center gap-1.5 rounded-full bg-white py-1 pl-1 pr-2.5 text-[11px] text-black shadow-sm ${review.shift}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={review.photo} alt="" className="h-6 w-6 rounded-full object-cover" />
                    <span className="tracking-tight text-[#e23b2f]">★★★★★</span>
                    <span className="font-medium">5.0</span>
                  </span>
                ))}
              </div>
              <div className="about-figure md:pt-20">5.0</div>
              <div className="mt-3 text-sm text-white/70">Clutch rate</div>
            </div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-[#1a1c22] px-3 py-2 text-sm md:absolute md:left-1/2 md:top-6 md:z-10 md:mb-0 md:-translate-x-1/2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs">
                  ◷
                </span>
                <span>
                  <span className="block font-medium">$2.4M</span>
                  <span className="block text-xs text-white/55">Myso Finance</span>
                </span>
                <span className="pl-4 text-xs text-white/45">Now</span>
              </div>
              <div className="about-figure md:pt-20">500+</div>
              <div className="mt-3 text-sm text-white/70">Platform initiatives</div>
            </div>
            <div className="relative md:min-h-[240px]">
              <div className="mb-4 flex flex-wrap gap-2 md:hidden">
                {faces.map((face) => (
                  <span
                  key={`mobile-${face.name}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 text-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={face.photo} alt="" className="h-7 w-7 rounded-full object-cover object-top" />
                    {face.name}
                  </span>
                ))}
              </div>
              {faces.map((face) => (
                <span
                  key={`float-${face.name}`}
                  className={`absolute z-10 hidden items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 text-sm backdrop-blur-sm md:inline-flex ${face.place}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={face.photo} alt="" className="h-7 w-7 rounded-full object-cover object-top" />
                  {face.name}
                </span>
              ))}
              <div className="about-figure">50+</div>
              <div className="mt-3 text-sm text-white/70">Team members</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[radial-gradient(ellipse_42%_70%_at_100%_0%,rgba(40,90,255,0.35),transparent_62%),#0b0b0b]">
        <div className="mx-auto max-w-[1200px] px-5 text-center md:px-8">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Our <span className="font-serif-italic font-normal">partners</span> who chose
            <span className="block">structured execution</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {partnerGridMarks.map((mark) => (
              <div
                key={mark.id}
                className="flex min-h-[140px] items-center justify-center rounded-[28px] bg-[#161616] px-4"
              >
                {mark.node}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              What <span className="font-serif-italic font-normal text-[#c4b5fd]">product leaders</span>
              <span className="mt-1 block">say about us</span>
            </h2>
            <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-[#1c1c1c] px-4 py-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-white text-lg font-semibold">
                <span className="text-[#e23b2f]">C</span>
              </span>
              <span>
                <span className="block tracking-tight text-[#e23b2f]">★★★★★</span>
                <span className="block text-[11px] uppercase tracking-[0.08em] text-white/70">
                  89+ reviews
                </span>
              </span>
              <span className="text-2xl font-medium">5.0</span>
            </div>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {quotes.map((quote) => (
              <figure
                key={quote.name}
                className="flex w-[320px] shrink-0 flex-col rounded-[28px] bg-white p-6 text-[#141515] sm:w-[380px]"
              >
                <div className="flex items-center gap-2 text-lg font-medium">
                  Clutch
                  <span className="tracking-tight text-[#e23b2f]">★★★★★</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {quoteTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#ececec] px-3 py-1 text-[12px] text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-snug">“{quote.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={quote.photo}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-lg font-medium">{quote.name}</span>
                    <span className="block text-sm text-black/55">{quote.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            The results our projects achieved
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-5xl font-medium text-lime md:text-6xl">{item.value}</div>
                <div className="mt-3 font-medium">{item.label}</div>
                <p className="mt-2 text-sm text-white/55">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-white/70">
              Let’s discover what measurable impact looks like for your platform.
            </p>
            <PillCta href={bookCallHref} variant="lime" className="mt-6" external split>
              Book a Call
            </PillCta>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="mb-8 text-4xl font-medium tracking-tight md:text-6xl">
            Works that <span className="font-serif-italic font-normal">power growth</span>
          </h2>
          <FeaturedCaseScroller />
        </div>
      </section>

      <BookCallBand title="Ready to advance your platform with structure?" />
    </>
  );
}
