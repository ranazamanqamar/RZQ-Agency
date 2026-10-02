"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, User } from "lucide-react";
import { designPlans, developerPlans, type PricingPlan } from "@/lib/data/pricing";
import { bookCallHref } from "@/lib/site";
import { cn } from "@/lib/utils";

function People({ filled }: { filled: number }) {
  return (
    <div className="flex gap-1 text-white/80" aria-hidden>
      {[0, 1, 2].map((index) => (
        <User
          key={index}
          className={cn("h-5 w-5", index < filled ? "text-white" : "text-white/25")}
          strokeWidth={1.75}
        />
      ))}
    </div>
  );
}

function Card({ plan, filled, href }: { plan: PricingPlan; filled: number; href: string }) {
  const external = href.startsWith("tel:");
  const className =
    "mt-8 inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm text-black transition hover:bg-lime";
  return (
    <article className="flex h-full flex-col rounded-[32px] bg-white/[0.08] p-6 md:p-8">
      <h3 className="text-2xl font-medium">{plan.title}</h3>
      <div className="mt-5">
        <People filled={filled} />
      </div>
      <p className="mt-6 text-white/75">{plan.description}</p>
      {external ? (
        <a href={href} className={className}>
          {plan.cta}
        </a>
      ) : (
        <Link href={href} className={className}>
          {plan.cta}
        </Link>
      )}
      <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingPlans() {
  const [mode, setMode] = useState<"design" | "dev">("design");
  const plans = mode === "design" ? designPlans : developerPlans;

  return (
    <div className="rounded-[32px] bg-white/[0.08] p-4 md:p-6">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-3 text-sm"
          aria-pressed={mode === "dev"}
          onClick={() => setMode(mode === "design" ? "dev" : "design")}
        >
          <span className={mode === "design" ? "text-white" : "text-white/45"}>Design</span>
          <span className="relative h-7 w-12 rounded-full bg-[#1c2438]">
            <span
              className={cn(
                "absolute top-0.5 h-6 w-6 rounded-full bg-white transition-all",
                mode === "design" ? "left-0.5" : "left-5",
              )}
            />
          </span>
          <span className={mode === "dev" ? "text-white" : "text-white/45"}>Development</span>
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={plan.title}
            plan={plan}
            filled={index + 1}
            href={plan.cta === "Book a Call" ? bookCallHref : "/contact"}
          />
        ))}
      </div>
    </div>
  );
}
