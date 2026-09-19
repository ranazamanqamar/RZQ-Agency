import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { bookCallHref, site } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { FounderPhoto } from "@/components/founder-photo";
import { awards } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Book a Call",
  description: `Call ${site.founderName} at ${site.phoneDisplay}`,
};

export default function BookACallPage() {
  return (
    <section className="works-glow relative overflow-hidden">
      <div className="mx-auto max-w-[900px] px-5 py-20 text-center md:px-8 md:py-28">
        <FounderPhoto size={96} className="mx-auto" />
        <p className="mt-6 text-sm text-white/50">
          {site.founderName} · {site.founderTitle}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Book a free consultation
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
          Get clarity, direction, and expert advice you can implement right away. Tap to call —
          no Calendly, just a real conversation.
        </p>

        <a
          href={bookCallHref}
          className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-[28px] border border-lime/40 bg-lime px-8 py-6 text-2xl font-bold text-black transition hover:bg-white md:text-3xl"
        >
          <Phone className="h-8 w-8" />
          {site.phoneDisplay}
        </a>
        <p className="mt-3 text-sm text-white/45">tel:{site.phoneTel}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillCta href="/contact" variant="white">
            Or send a project brief
          </PillCta>
          <PillCta href={`mailto:${site.email}`} variant="outline" external>
            {site.email}
          </PillCta>
        </div>

        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm text-lime hover:underline"
        >
          LinkedIn · ranazamanqamar
        </a>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {awards.slice(0, 4).map((a) => (
            <span key={a} className="pill-tag">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
