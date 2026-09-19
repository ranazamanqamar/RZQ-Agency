"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type FounderPhotoProps = {
  className?: string;
  size?: number;
};

export function FounderPhoto({ className, size = 72 }: FounderPhotoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.photoSrc}
        alt={`${site.founderName} — ${site.founderTitle}`}
        width={size}
        height={size}
        className="h-full w-full rounded-full object-cover object-top"
      />
    </div>
  );
}
