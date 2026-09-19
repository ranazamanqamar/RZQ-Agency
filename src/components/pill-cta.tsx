import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PillCtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "white" | "lime" | "dark" | "outline";
  className?: string;
  external?: boolean;
  /** Arounda pricing hero uses arrow on the left */
  arrow?: "left" | "right";
};

export function PillCta({
  href,
  children,
  variant = "white",
  className,
  external,
  arrow = "right",
}: PillCtaProps) {
  const styles =
    variant === "lime"
      ? "bg-lime text-black hover:bg-white"
      : variant === "dark"
        ? "bg-[#141515] text-white hover:bg-black"
        : variant === "outline"
          ? "border border-white/20 bg-transparent text-white hover:border-lime hover:text-lime"
          : "bg-white text-[#141515] hover:bg-lime";

  const iconBg =
    variant === "lime"
      ? "bg-black text-lime group-hover:bg-black group-hover:text-white"
      : variant === "dark"
        ? "bg-white/15 text-white"
        : variant === "outline"
          ? "bg-white/15 text-white"
          : "bg-black text-white group-hover:bg-black group-hover:text-lime";

  const Comp = external || href.startsWith("tel:") || href.startsWith("mailto:") ? "a" : Link;
  const isLeft = arrow === "left";

  return (
    <Comp
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-3 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
        isLeft ? "pl-3 pr-6" : "pl-6 pr-3",
        styles,
        className,
      )}
    >
      {isLeft && (
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105",
            iconBg,
          )}
        >
          <ArrowDownLeft className="h-4 w-4" strokeWidth={2.25} />
        </span>
      )}
      <span>{children}</span>
      {!isLeft && (
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105",
            iconBg,
          )}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </span>
      )}
    </Comp>
  );
}
