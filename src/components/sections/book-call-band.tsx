import Link from "next/link";
import { bookCallHref, site } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { awards } from "@/lib/data/testimonials";

export function BookCallBand() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,70,255,0.35),transparent_65%)]" />
      <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Book a free consultation to get clarity, direction, and expert advice you can implement
          right away.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PillCta href={bookCallHref} variant="lime" external>
            Book a Call · {site.phoneDisplay}
          </PillCta>
          <PillCta href="/contact" variant="white">
            Contact Us
          </PillCta>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {awards.slice(0, 4).map((a) => (
            <span key={a} className="pill-tag">
              {a}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/45">
          Prefer email?{" "}
          <Link href={`mailto:${site.email}`} className="text-lime hover:underline">
            {site.email}
          </Link>
        </p>
      </div>
    </section>
  );
}
