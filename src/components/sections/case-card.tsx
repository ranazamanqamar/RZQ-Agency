import Link from "next/link";
import type { CaseStudy } from "@/lib/data/cases";
import { cn } from "@/lib/utils";
import { CountryFlag } from "@/components/country-flag";

function resolveCountry(item: CaseStudy): string | undefined {
  if (item.country) return item.country;
  if (item.flag === "🇺🇸") return "us";
  if (item.flag === "🇺🇦") return "ua";
  if (item.flag === "🇦🇪") return "ae";
  if (item.flag === "🇵🇹") return "pt";
  return undefined;
}

export function CaseCard({
  item,
  className,
}: {
  item: CaseStudy;
  className?: string;
}) {
  const country = resolveCountry(item);

  return (
    <Link
      href={`/works/${item.slug}`}
      className={cn(
        "group block overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-gradient-to-br",
          item.gradient,
        )}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="rounded-2xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-md">
            <div className="text-lg font-semibold text-white">{item.title}</div>
            {item.metric && <div className="text-sm text-lime">{item.metric}</div>}
          </div>
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          {item.industry}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="pill-tag">
              {tag}
            </span>
          ))}
          {country ? (
            <span className="pill-tag inline-flex items-center">
              <CountryFlag code={country} />
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
