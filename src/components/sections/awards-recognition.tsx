import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { awardTiles } from "@/lib/data/testimonials";

type AwardsRecognitionProps = {
  variant?: "works" | "home";
};

function ChampionMark() {
  return (
    <svg viewBox="0 0 200 140" className="h-[140px] w-[200px] text-white" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M62 108c-22-16-30-48-16-78" />
        <path d="M138 108c22-16 30-48 16-78" />
        <path d="M50 96c6-2 10-8 10-8M44 82c7-1 12-6 12-6M42 66c8 0 12-5 12-5M46 50c7 1 11-4 11-4M54 36c6 2 9-3 9-3" />
        <path d="M150 96c-6-2-10-8-10-8M156 82c-7-1-12-6-12-6M158 66c-8 0-12-5-12-5M154 50c-7 1-11-4-11-4M146 36c-6 2-9-3-9-3" />
      </g>
      <circle cx="100" cy="72" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M100 44v56M72 72h56M80 52c8 8 8 32 0 40M120 52c-8 8-8 32 0 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function AwardsRecognition({ variant = "works" }: AwardsRecognitionProps) {
  const isHome = variant === "home";

  return (
    <section
      className="bg-transparent px-5 py-20 md:px-8 md:py-28"
    >
      <div className="relative z-[1] mx-auto max-w-[1400px]">
        {isHome ? (
          <>
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">
              Awards &amp; Achievements
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-medium tracking-tight text-white md:text-6xl">
              While the growth of our{" "}
              <span className="font-serif-italic font-normal">clients is what matters most</span>,
              it`s nice to get awards
            </h2>
          </>
        ) : (
          <h2 className="max-w-4xl text-center text-4xl font-medium tracking-tight text-white md:text-6xl">
            We earned{" "}
            <span className="font-serif-italic font-normal text-lime">Industry Recognition</span>{" "}
            and{" "}
            <span className="font-serif-italic font-normal text-lime">Numerous Awards</span>
          </h2>
        )}
        <div
          className={`mt-14 grid gap-3 ${isHome ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}
        >
          {isHome ? (
            <Link
              href="https://clutch.co"
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-[280px] flex-col items-center justify-center rounded-[28px] bg-[#1c1c1c] px-6 py-8 text-white transition-colors hover:bg-lime hover:text-black"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-[6px] border-white text-2xl font-semibold transition-colors group-hover:border-black">
                  <span className="text-[#e23b2f] transition-colors group-hover:text-black">C</span>
                </span>
                <span className="text-5xl font-medium tracking-tight">5.0</span>
              </div>
              <div className="mt-4 flex gap-1 text-white transition-colors group-hover:text-black">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>
              <span className="mt-6 text-center text-xs font-medium uppercase tracking-[0.08em]">
                89+ Reviews on Clutch
              </span>
              <span className="absolute bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-lime text-black transition-colors group-hover:bg-black group-hover:text-lime">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ) : (
            <div className="flex min-h-[266px] flex-col items-center justify-center gap-6 rounded-[24px] rounded-tl-none bg-[#eef4ff] p-7 text-center text-black">
              <p className="text-[15px] text-black/60">89+ Reviews on Clutch</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/awards/clutch-stars.svg" alt="Clutch 5.0" className="h-16 w-auto" />
            </div>
          )}
          {(isHome ? awardTiles.slice(0, 7) : awardTiles).map((award) => (
            <div
              key={award.label}
              className="flex min-h-[266px] flex-col items-center justify-center gap-6 rounded-[24px] bg-[#141515] px-8 py-7 text-center"
            >
              {isHome && award.label === "Champion Company by Clutch" ? (
                <ChampionMark />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={award.src} alt="" className="h-[140px] w-[200px] object-contain" />
              )}
              <p
                className={`max-w-[220px] text-[15px] leading-snug text-white/85 ${isHome ? "uppercase" : ""}`}
              >
                {award.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
