import Link from "next/link";
import { bookCallHref, mailtoHref, site } from "@/lib/site";
import { LinkedInIcon } from "@/components/linkedin-icon";
import {
  brandingServices,
  designServices,
  developmentServices,
  footerCompany,
  industriesNav,
  locations,
  solutions,
} from "@/lib/data/nav";
import { awards } from "@/lib/data/testimonials";

export function Footer() {
  const serviceLinks = [
    ...brandingServices,
    ...designServices,
    ...developmentServices.slice(0, 5),
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-3xl font-bold uppercase tracking-tight">
              {site.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Your design &amp; dev partner that unites brand, website, ui/ux design into a holistic
              product.
            </p>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.14em] text-white/40">Drop us a line</div>
              <a
                href={mailtoHref}
                className="mt-2 inline-block text-lime transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={bookCallHref}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-lime hover:text-lime"
              >
                Book a Call · {site.phoneDisplay}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-lime hover:text-lime"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Services
            </div>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-lime">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Industries
            </div>
            <ul className="space-y-2">
              {industriesNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-lime">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Solutions
            </div>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-lime">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Company
            </div>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-lime">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {awards.slice(0, 6).map((award) => (
            <span
              key={award}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
            >
              {award}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {locations.slice(0, 4).map((loc) => (
            <div key={loc.code}>
              <div className="text-sm font-medium text-white/90">
                {loc.country}
                <span className="ml-2 text-xs text-white/40">{loc.code}</span>
              </div>
              <p className="mt-1 text-sm text-white/50">{loc.address}</p>
            </div>
          ))}
        </div>
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-white/60 hover:text-lime">
            Show all locations
          </summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {locations.slice(4).map((loc) => (
              <div key={loc.code}>
                <div className="text-sm font-medium text-white/90">
                  {loc.country}
                  <span className="ml-2 text-xs text-white/40">{loc.code}</span>
                </div>
                <p className="mt-1 text-sm text-white/50">{loc.address}</p>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-lime">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-lime">
              Cookie Policy
            </Link>
            <Link href="/editorial-policy" className="hover:text-lime">
              Editorial Policy
            </Link>
            <Link href="/ai-instructions" className="hover:text-lime">
              AI Instructions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
