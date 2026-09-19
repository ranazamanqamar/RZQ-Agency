import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { bookCallHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Rewarded for Referring Design & Development Projects",
};

export default function ReferralPage() {
  return (
    <section className="works-glow">
      <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {site.name} Referral Program
        </h1>
        <p className="mt-5 text-lg text-white/60">
          A partnership model for businesses that want to monetize unused leads or expand their
          service range. Refer clients who need high-quality strategic design services and earn
          5–10% commission from each successful project.
        </p>
        <ul className="mt-8 space-y-3 text-white/70">
          <li>• 10% commission for each project you refer to us</li>
          <li>• Payments after the client completes payment for the project</li>
          <li>• Intro call → alignment → pilot stage in days, not months</li>
        </ul>
        <PillCta href={bookCallHref} variant="lime" className="mt-10" external>
          Book a Call to join
        </PillCta>
      </div>
    </section>
  );
}
