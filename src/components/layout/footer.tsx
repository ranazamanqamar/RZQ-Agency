import Link from "next/link";
import { site } from "@/lib/site";
import {
  brandingServices,
  designServices,
  developmentServices,
  footerCompany,
  industriesNav,
  locations,
  solutions,
  type NavLink,
} from "@/lib/data/nav";
import { footerAwardLogos } from "@/lib/data/testimonials";
import { FooterEmail } from "@/components/layout/footer-email";


const linkClass =
  "text-[15px] text-white/75 transition-colors duration-200 hover:text-lime";

const cardClass =
  "rounded-[24px] bg-[#161616] transition-colors duration-200 hover:bg-[#2a2a2a]";

const flagClass = "h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px]";

function UsFlag() {
  return (
    <svg viewBox="0 0 19 10" className={flagClass} aria-hidden>
      <rect width="19" height="10" fill="#bf0a30" />
      {[1, 3, 5, 7, 9, 11].map((row) => (
        <rect key={row} y={(row * 10) / 13} width="19" height={10 / 13} fill="#fff" />
      ))}
      <rect width="7.6" height={(7 * 10) / 13} fill="#002868" />
    </svg>
  );
}

function Jack({ id }: { id: string }) {
  return (
    <g clipPath={`url(#${id})`}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  );
}

function GbFlag() {
  return (
    <svg viewBox="0 0 60 30" className={flagClass} aria-hidden>
      <clipPath id="gb-flag">
        <rect width="60" height="30" />
      </clipPath>
      <Jack id="gb-flag" />
    </svg>
  );
}

function NlFlag() {
  return (
    <svg viewBox="0 0 9 6" className={flagClass} aria-hidden>
      <rect width="9" height="2" fill="#AE1C28" />
      <rect y="2" width="9" height="2" fill="#fff" />
      <rect y="4" width="9" height="2" fill="#21468B" />
    </svg>
  );
}

function AuFlag() {
  return (
    <svg viewBox="0 0 120 60" className={flagClass} aria-hidden>
      <rect width="120" height="60" fill="#012169" />
      <svg width="60" height="30" viewBox="0 0 60 30">
        <clipPath id="au-flag">
          <rect width="60" height="30" />
        </clipPath>
        <Jack id="au-flag" />
      </svg>
      <g fill="#fff">
        <circle cx="30" cy="45" r="5" />
        <circle cx="86" cy="12" r="2.2" />
        <circle cx="104" cy="22" r="2.2" />
        <circle cx="98" cy="40" r="2.6" />
        <circle cx="80" cy="32" r="1.6" />
        <circle cx="110" cy="48" r="2" />
      </g>
    </svg>
  );
}

function AeFlag() {
  return (
    <svg viewBox="0 0 12 6" className={flagClass} aria-hidden>
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#fff" />
      <rect y="4" width="12" height="2" fill="#000" />
      <rect width="3" height="6" fill="#FF0000" />
    </svg>
  );
}

function RoFlag() {
  return (
    <svg viewBox="0 0 9 6" className={flagClass} aria-hidden>
      <rect width="3" height="6" fill="#002B7F" />
      <rect x="3" width="3" height="6" fill="#FCD116" />
      <rect x="6" width="3" height="6" fill="#CE1126" />
    </svg>
  );
}

function UaFlag() {
  return (
    <svg viewBox="0 0 9 6" className={flagClass} aria-hidden>
      <rect width="9" height="3" fill="#005BBB" />
      <rect y="3" width="9" height="3" fill="#FFD500" />
    </svg>
  );
}

function LocationFlag({ code }: { code: string }) {
  switch (code) {
    case "US":
      return <UsFlag />;
    case "GB":
      return <GbFlag />;
    case "NL":
      return <NlFlag />;
    case "AU":
      return <AuFlag />;
    case "AE":
      return <AeFlag />;
    case "RO":
      return <RoFlag />;
    case "UA":
      return <UaFlag />;
    default:
      return null;
  }
}

function ClutchReviewsMark() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[22px] font-semibold leading-none tracking-tight text-white">Clutch</span>
      <span className="flex gap-0.5 text-sm leading-none text-[#ff3d2e]" aria-hidden>
        ★★★★★
      </span>
    </div>
  );
}

const awardArt: Record<string, { src: string; className: string }> = {
  "Top 50 Trending team on Dribbble": { src: "/awards/dribbble.svg", className: "h-16 w-auto" },
  "Global 100 B2B UI/UX Company": { src: "/awards/clutch-global.svg", className: "h-16 w-auto" },
  "Professional partner by Webflow": { src: "/awards/webflow.svg", className: "h-7 w-auto max-w-[148px]" },
  "Top User Experience team by GoodFirms": {
    src: "/awards/goodfirms.svg",
    className: "h-6 w-auto max-w-[148px]",
  },
  "Projects are Featured on Behance": { src: "/awards/behance.webp", className: "h-14 w-auto" },
};

const awardWash: Record<string, string> = {
  "89+ Reviews on Clutch": "rgba(220, 40, 40, 0.55)",
  "Top 50 Trending team on Dribbble": "rgba(210, 60, 190, 0.55)",
  "Global 100 B2B UI/UX Company": "rgba(196, 140, 60, 0.62)",
  "Professional partner by Webflow": "rgba(20, 110, 245, 0.5)",
  "Top User Experience team by GoodFirms": "rgba(58, 122, 243, 0.5)",
  "Projects are Featured on Behance": "rgba(140, 185, 255, 0.48)",
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-5 text-lg font-medium text-white">{children}</h3>;
}

function FooterLinks({ items }: { items: NavLink[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClass}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const office = locations[0];

  return (
    <footer className="footer-glow border-t border-white/10 text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 min-[900px]:grid-cols-[0.95fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-4xl font-bold lowercase tracking-tight md:text-5xl">
              {site.name}
            </Link>
            <div className="mt-10">
              <FooterHeading>Offices</FooterHeading>
              <p className="text-[15px] text-white/75">
                {office.country}, {office.city}
                <br />
                {office.address}
              </p>
            </div>
            <div className="mt-10">
              <FooterHeading>Drop us a line</FooterHeading>
              <FooterEmail />
            </div>
          </div>

          <div>
            <FooterHeading>Branding services</FooterHeading>
            <FooterLinks items={brandingServices} />
            <div className="mt-12">
              <FooterHeading>Solutions</FooterHeading>
              <FooterLinks items={solutions} />
            </div>
          </div>

          <div>
            <FooterHeading>Design services</FooterHeading>
            <FooterLinks items={designServices} />
            <div className="mt-12">
              <FooterHeading>Industries</FooterHeading>
              <FooterLinks items={industriesNav} />
            </div>
          </div>

          <div>
            <FooterHeading>Development services</FooterHeading>
            <FooterLinks items={developmentServices} />
            <div className="mt-12">
              <FooterHeading>Company</FooterHeading>
              <FooterLinks items={footerCompany} />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {footerAwardLogos.map((item) => {
            const art = awardArt[item.detail];
            return (
              <div
                key={`${item.name}-${item.detail}`}
                className="group relative flex min-h-[168px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[24px] bg-[#161616] px-4 py-5 text-center"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse 62% 70% at 50% 38%, ${awardWash[item.detail]} 0%, transparent 68%)`,
                  }}
                />
                <div className="relative z-[1] flex h-16 items-center justify-center">
                  {art ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={art.src} alt="" className={art.className} />
                  ) : (
                    <ClutchReviewsMark />
                  )}
                </div>
                <p className="relative z-[1] text-sm leading-snug text-white/55">{item.detail}</p>
              </div>
            );
          })}
        </div>

        <details className="group/locs mt-10">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-sm text-white/60 transition-colors hover:text-lime [&::-webkit-details-marker]:hidden">
            <svg
              viewBox="0 0 12 12"
              className="h-3 w-3 transition-transform group-open/locs:rotate-180"
              aria-hidden
            >
              <path
                d="M2 4.5 L6 8.5 L10 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Show all locations
          </summary>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(1).map((loc) => (
              <div key={loc.code} className={`${cardClass} px-5 py-5`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-white">{loc.country}</div>
                  <span className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-white/70">
                    <LocationFlag code={loc.code} />
                    {loc.code}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/50">{loc.address}</p>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-lime">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-lime">
              Cookie Policy
            </Link>
            <Link href="/editorial-policy" className="transition-colors hover:text-lime">
              Editorial Policy
            </Link>
            <Link href="/ai-instructions" className="transition-colors hover:text-lime">
              AI Instructions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
