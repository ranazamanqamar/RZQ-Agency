import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="text-4xl font-bold">Cookie Policy</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-white/65">
        <p>
          {site.name} may use cookies and similar technologies to remember preferences, understand
          traffic, and improve site performance.
        </p>
        <p>
          Essential cookies keep the site working. Analytics cookies help us learn which pages are
          useful. You can control cookies through your browser settings.
        </p>
        <p>
          Questions? Email{" "}
          <a href={`mailto:${site.email}`} className="text-lime hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
