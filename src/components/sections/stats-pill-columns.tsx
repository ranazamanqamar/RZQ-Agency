"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Pill = {
  label: string;
  tone: "white" | "purple" | "green" | "beige" | "dark";
  x: number;
  y: number;
  rotate: number;
};

type Column = {
  value: string;
  label: string;
  detail: string;
  pills: Pill[];
};

const columns: Column[] = [
  {
    value: "+170%",
    label: "Engagement Rate",
    detail: "Intuitive flows that turn clicks into leads",
    pills: [
      { label: "WordPress.com", tone: "white", x: -48, y: -28, rotate: -8 },
      { label: "Galaxy", tone: "white", x: 36, y: -42, rotate: 6 },
      { label: "Flair", tone: "purple", x: 12, y: 8, rotate: 10 },
    ],
  },
  {
    value: "4.6×",
    label: "Revenue Growth After Redesign",
    detail: "Product improvements that scale business impact",
    pills: [
      { label: "$1.5 M", tone: "white", x: -42, y: -36, rotate: -6 },
      { label: "$2.3 M", tone: "green", x: 40, y: -24, rotate: 8 },
      { label: "$2.4 M", tone: "dark", x: -8, y: 10, rotate: -4 },
    ],
  },
  {
    value: "−37%",
    label: "Churn Across SaaS Clients",
    detail: "Better onboarding, better UX, fewer cancellations",
    pills: [
      { label: "4.8 ★", tone: "beige", x: -36, y: -30, rotate: -10 },
      { label: "12k users", tone: "white", x: 44, y: -18, rotate: 7 },
      { label: "NPS 72", tone: "beige", x: 4, y: 12, rotate: 4 },
    ],
  },
];

const toneClass: Record<Pill["tone"], string> = {
  white: "bg-white text-black",
  purple: "bg-violet-600 text-white",
  green: "bg-emerald-500 text-white",
  beige: "bg-[#e8dcc8] text-black",
  dark: "border border-white/15 bg-black/70 text-white backdrop-blur",
};

export function StatsPillColumns() {
  return (
    <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-3 md:gap-8 md:px-8">
      {columns.map((col) => (
        <div key={col.label} className="stats-column group relative pt-24 text-center md:pt-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 flex h-24 items-center justify-center md:h-28">
            {col.pills.map((pill) => (
              <span
                key={pill.label}
                className={cn(
                  "stats-pill absolute rounded-full px-3.5 py-1.5 text-xs font-medium shadow-lg md:text-sm",
                  toneClass[pill.tone],
                )}
                style={
                  {
                    "--sx": `${pill.x}px`,
                    "--sy": `${pill.y}px`,
                    "--sr": `${pill.rotate}deg`,
                  } as CSSProperties
                }
              >
                {pill.label}
              </span>
            ))}
          </div>
          <div className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {col.value}
          </div>
          <div className="mt-3 text-base font-semibold text-white md:text-lg">{col.label}</div>
          <p className="mx-auto mt-2 max-w-xs text-sm text-white/50">{col.detail}</p>
        </div>
      ))}
    </div>
  );
}
