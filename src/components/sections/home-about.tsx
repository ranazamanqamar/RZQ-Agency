import type { ReactNode } from "react";
import { site } from "@/lib/site";

const portraits = [
  { src: "/team/5.avif", className: "left-[6%] top-0 z-20 h-[76px] w-[76px] md:h-[92px] md:w-[92px]" },
  { src: "/team/2.png", className: "right-[4%] top-[6%] z-20 h-[76px] w-[76px] md:h-[92px] md:w-[92px]" },
  { src: "/team/3.png", className: "left-0 top-[46%] z-30 h-[80px] w-[80px] md:h-[96px] md:w-[96px]" },
  { src: site.photoSrc, className: "left-[40%] top-[30%] z-40 h-14 w-14 md:h-[72px] md:w-[72px]" },
  { src: "/team/4.avif", className: "right-0 top-[44%] z-30 h-[80px] w-[80px] md:h-[96px] md:w-[96px]" },
];

const aiPrompt = `I'm researching ${site.name} as a strategic Product Design and Development partner. Summarize how ${site.name}'s Discovery, UX Audit, UI/UX Design, Web Design, Website Redesign, Branding, Mobile App Design, and Development services modernize digital products. Use only information found on ${site.url}.`;

export const aiLinks = [
  {
    label: "ChatGPT",
    href: `https://chat.openai.com/?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 23 23" fill="none" aria-hidden="true">
        <path
          d="M9.04 8.67V6.99c0-.14.05-.25.18-.32l3.4-1.95a2.7 2.7 0 0 1 1.58-.39c2.13 0 3.49 1.65 3.49 3.41 0 .13 0 .27-.02.41l-3.52-2.06a.7.7 0 0 0-.64 0L9.04 8.67Zm7.93 6.58v-4.03c0-.25-.11-.43-.32-.55l-4.46-2.6 1.46-.83c.12-.07.23-.07.35 0l3.4 1.96c.98.57 1.63 1.78 1.63 2.95 0 1.35-.8 2.6-2.06 3.1Zm-8.98-3.56-1.46-.85c-.12-.07-.17-.18-.17-.32V6.61c0-1.9 1.46-3.34 3.43-3.34.75 0 1.44.25 2.03.7L8.31 5.99c-.21.12-.32.3-.32.55v5.15Zm3.14 1.81-2.09-1.17V9.84l2.09-1.17 2.09 1.17v2.49l-2.09 1.17Zm1.34 5.41c-.75 0-1.44-.25-2.03-.7l3.5-2.03c.21-.12.32-.3.32-.55v-5.15l1.48.85c.12.07.17.18.17.32v3.91c0 1.9-1.48 3.34-3.44 3.34Zm-4.22-3.97-3.39-1.95c-.98-.57-1.64-1.78-1.64-2.95 0-1.37.82-2.6 2.08-3.11v4.05c0 .25.11.43.32.55l4.44 2.58-1.46.84a.7.7 0 0 1-.35 0Zm-.2 2.92a3.6 3.6 0 0 1-3.48-3.38c0-.14.02-.28.03-.43l3.5 2.03c.21.12.43.12.64 0l4.46-2.58v1.69c0 .14-.05.25-.18.32l-3.4 1.95a2.7 2.7 0 0 1-1.57.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Perplexity",
    href: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 23 23" fill="none" aria-hidden="true">
        <path
          d="M5.45 2.22 10.6 7.18V2.23h1V7.2l5.17-4.98v5.65h2.12v8.15h-2.12v5.03l-5.17-4.75v4.81h-1v-4.73l-5.14 4.73v-5.09H3.34V7.87h2.11V2.22Zm4.39 6.68H4.34v6.08h1.12v-1.92l4.38-4.16Zm-3.38 4.62v5.28l4.14-3.81V9.6l-4.14 3.93Zm5.17 1.41V9.59l4.14 3.93v2.5h.01v2.73l-4.15-3.81Zm5.15.06h1.11V8.91h-5.46l4.35 4.12v1.96Zm-1.01-7.12V4.6l-3.4 3.27h3.4Zm-5.92 0H6.45V4.6l3.4 3.27Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Google",
    href: `https://www.google.com/search?udm=50&aep=11&q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="7.16" cy="4.84" r="1.1" fill="currentColor" />
        <circle cx="7.16" cy="8.92" r="1.1" fill="currentColor" />
        <circle cx="7.16" cy="13" r="1.1" fill="currentColor" />
        <circle cx="7.16" cy="17.08" r="1.1" fill="currentColor" />
        <circle cx="10.67" cy="2.8" r="1.15" fill="currentColor" />
        <circle cx="10.67" cy="6.88" r="1.15" fill="currentColor" />
        <circle cx="10.67" cy="10.96" r="1.15" fill="currentColor" />
        <circle cx="10.67" cy="15.04" r="1.15" fill="currentColor" />
        <circle cx="14.5" cy="4.84" r="1.1" fill="currentColor" />
        <circle cx="14.5" cy="8.92" r="1.1" fill="currentColor" />
        <circle cx="14.5" cy="13" r="1.1" fill="currentColor" />
        <circle cx="14.5" cy="17.08" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];

function LogoMark({ children }: { children: ReactNode }) {
  return <span className="inline-flex shrink-0 items-center gap-2 text-white/85">{children}</span>;
}

const clientMarks = (
  <>
    <LogoMark>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.2 16.6 12 7.2l3.8 9.4h-1.5l-.7-1.8H10.4l-.7 1.8H8.2Zm3-7.2-1.4 3.6h2.8L11.2 9.4Z" />
      </svg>
      <span className="text-[15px] font-bold">WordPress.com</span>
    </LogoMark>
    <LogoMark>
      <svg viewBox="0 0 22 14" className="h-3.5 w-5" fill="currentColor" aria-hidden>
        <circle cx="4" cy="10" r="3" />
        <circle cx="11" cy="4" r="3" />
        <circle cx="18" cy="10" r="3" />
      </svg>
      <span className="text-[15px] font-bold tracking-tight">interprefy</span>
    </LogoMark>
    <LogoMark>
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M10 2c2.8 2.4 4.6 4.2 5.5 6.2C16.4 10 16.6 11.6 15.8 13c-.9 1.5-2.9 2.6-5.8 2.6S5.1 14.5 4.2 13C3.4 11.6 3.6 10 4.5 8.2 5.4 6.2 7.2 4.4 10 2Z" />
      </svg>
      <span className="text-[12px] font-bold uppercase tracking-[0.08em]">Players Health</span>
    </LogoMark>
    <LogoMark>
      <span className="grid h-5 w-5 grid-cols-2 gap-0.5" aria-hidden>
        <span className="bg-white" />
        <span className="bg-white/70" />
        <span className="bg-white/70" />
        <span className="bg-white" />
      </span>
      <span className="text-[15px] font-bold tracking-tight">Blockworks</span>
    </LogoMark>
  </>
);

export function HomeAbout() {
  return (
    <section className="home-about-glow overflow-visible px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <div className="relative z-[1] mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.16em] text-white/40">about us</p>

        <div className="relative mt-6 grid items-end gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
          <h2 className="max-w-[11ch] text-[2.6rem] font-medium leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            Digital design experts who fuel{" "}
            <span className="font-serif-italic font-normal text-lime">growth</span>
          </h2>
          <div className="relative mx-auto h-[260px] w-full max-w-[420px] md:h-[300px]">
            <div className="absolute inset-x-0 top-[34%] z-0 text-center">
              <div className="text-[5.5rem] font-medium leading-none text-white/35 md:text-[7.5rem]">
                55+
              </div>
              <div className="mt-3 text-sm text-white/45">Team members</div>
            </div>
            {portraits.map((portrait) => (
              <div
                key={portrait.src}
                className={`absolute overflow-hidden rounded-full bg-[#1a1a1a] ${portrait.className}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={portrait.src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-16">
          <p className="max-w-[340px] text-[15px] leading-relaxed text-white">
            <span className="mr-2 text-white/35">{"{/}"}</span>
            Your digital design and development
            <br />
            partner for high-impact results
          </p>
          <p className="max-w-[340px] text-[15px] leading-relaxed text-white lg:justify-self-center">
            <span className="mr-2 text-white/35">{"{/}"}</span>
            A global team that understands your
            <br />
            market, users, and how to make products win
          </p>
          <div className="shrink-0 lg:justify-self-end">
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
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/15 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-nowrap items-center gap-8 xl:gap-12">
            {clientMarks}
          </div>
          <div className="flex items-center gap-8 xl:gap-12">
            <div className="hidden h-14 w-px shrink-0 bg-white/20 lg:block" />
            <div className="flex shrink-0 gap-10 xl:gap-14">
              <div>
                <p className="text-sm text-white/45">Our clients raised</p>
                <p className="mt-1 text-4xl font-medium text-white md:text-5xl">$1B+</p>
              </div>
              <div>
                <p className="text-sm text-white/45">Unicorns</p>
                <p className="mt-1 text-4xl font-medium text-white md:text-5xl">3 clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
