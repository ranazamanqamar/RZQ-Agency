"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type HeroHoverWordProps = {
  children: React.ReactNode;
  accent?: "lime" | "cyan" | "violet";
};

const accentMap = {
  lime: {
    text: "group-hover:text-lime group-hover:border-lime/40",
    orb: "bg-lime/70",
  },
  cyan: {
    text: "group-hover:text-cyan-300 group-hover:border-cyan-400/40",
    orb: "bg-cyan-400/70",
  },
  violet: {
    text: "group-hover:text-violet-300 group-hover:border-violet-400/40",
    orb: "bg-violet-400/70",
  },
};

export function HeroHoverWord({ children, accent = "lime" }: HeroHoverWordProps) {
  const [hovered, setHovered] = useState(false);
  const colors = accentMap[accent];

  return (
    <span
      className="group relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={cn(
          "relative z-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 font-serif-italic font-normal text-white/90 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-white/10",
          colors.text,
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-2 -top-3 h-3 w-3 rounded-full opacity-0 blur-[1px] transition-all duration-500",
          colors.orb,
          hovered && "opacity-100 -translate-y-1 scale-125",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-2 -left-1 h-2.5 w-2.5 rounded-full opacity-0 transition-all duration-500 delay-75",
          colors.orb,
          hovered && "opacity-80 translate-y-1",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-4 bottom-0 h-2 w-2 rounded-full opacity-0 transition-all duration-500 delay-100",
          colors.orb,
          hovered && "opacity-70 translate-x-1",
        )}
      />
    </span>
  );
}
