import Link from "next/link";
import type { CaseStudy } from "@/lib/data/cases";
import { cn } from "@/lib/utils";
import { CountryFlag } from "@/components/country-flag";

export function CaseCard({
  item,
  className,
}: {
  item: CaseStudy;
  className?: string;
}) {
  const country = item.country ?? "us";

  return (
    <Link href={`/works/${item.slug}`} className={cn("group block", className)}>
      <div
        className={cn(
          "relative aspect-[17/24] overflow-hidden rounded-[24px] bg-[#111]",
          "origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:-translate-y-2 group-hover:scale-[1.03]",
        )}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
        <p className="mt-1.5 line-clamp-2 min-h-[2.75rem] text-sm font-normal leading-relaxed text-white/55">
          {item.description}
        </p>
        <div className="mt-3 flex h-8 flex-nowrap items-center gap-2 overflow-hidden">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-full bg-white/[0.07] px-3 py-1 text-[13px] text-white/70"
            >
              {tag}
            </span>
          ))}
          <span className="inline-flex shrink-0 items-center rounded-full bg-white/[0.07] px-2.5 py-1.5">
            <CountryFlag code={country} />
          </span>
        </div>
      </div>
    </Link>
  );
}
