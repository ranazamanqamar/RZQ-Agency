"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  CreditCard,
  Fingerprint,
  Gem,
  HeartPulse,
  Hexagon,
  Layers,
  Menu,
  Monitor,
  MousePointerClick,
  Network,
  Palette,
  PenLine,
  Presentation,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import {
  brandingServices,
  chromeServices,
  designServices,
  developmentServices,
  industriesNav,
  solutions,
} from "@/lib/data/nav";
import { PillCta } from "@/components/pill-cta";
import { cn } from "@/lib/utils";

type MenuKey = "services" | "industries";

const menuIcons: Record<string, LucideIcon> = {
  "/solutions/mvp": Rocket,
  "/solutions/product-redesign": RefreshCw,
  "/solutions/team-extension": Users,
  "/services/pitch-deck": Presentation,
  "/services/brand-identity": Fingerprint,
  "/services/logo-design": Hexagon,
  "/services/graphic-design": Palette,
  "/services/rebranding": Sparkles,
  "/services/ui-ux-design": PenLine,
  "/services/web-design": Monitor,
  "/services/mobile-design": Smartphone,
  "/services/website-redesign": Layers,
  "/services/ux-audit": Search,
  "/services/web-development": Code2,
  "/services/mvp-development": Rocket,
  "/services/webflow": Workflow,
  "/services/landing-page-design": MousePointerClick,
  "/services/mobile-development": Smartphone,
  "/services/corporate-website-development": Building2,
  "/services/wow-web-design": Sparkles,
  "/industries/web3": Gem,
  "/industries/saas": Cloud,
  "/industries/ai": Network,
  "/industries/cybersecurity": Shield,
  "/industries/fintech": CreditCard,
  "/industries/healthcare": HeartPulse,
  "/industries/hr-tech": Users,
};

function MenuMark({ href }: { href: string }) {
  const Icon = menuIcons[href] ?? Sparkles;
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef2ff] text-[#3b4fd8]">
      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (menu: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (active?: boolean) =>
    cn(
      "text-[15px] font-normal text-white/90 transition-colors duration-300 hover:text-lime",
      active && "text-lime",
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || openMenu || mobileOpen
            ? "bg-[#0b0b0b]/90 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 md:h-[97px] md:px-8">
          <Link
            href="/"
            className="text-[26px] font-bold tracking-tight text-white md:text-[30px]"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-7">
            <Link href="/works" className={linkClass(pathname.startsWith("/works"))}>
              Works
            </Link>

            <div
              className="relative"
              onMouseEnter={() => open("services")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 text-[15px] font-normal transition-colors duration-300",
                  openMenu === "services" || pathname.startsWith("/services")
                    ? "text-lime"
                    : "text-white/90 hover:text-lime",
                )}
                onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    openMenu === "services" && "rotate-180",
                  )}
                />
              </button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => open("industries")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 text-[15px] font-normal transition-colors duration-300",
                  openMenu === "industries" || pathname.startsWith("/industries")
                    ? "text-lime"
                    : "text-white/90 hover:text-lime",
                )}
                onClick={() => setOpenMenu(openMenu === "industries" ? null : "industries")}
              >
                Industries
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    openMenu === "industries" && "rotate-180",
                  )}
                />
              </button>
            </div>

            <Link href="/pricing" className={linkClass(pathname.startsWith("/pricing"))}>
              Pricing
            </Link>
            <Link href="/about" className={linkClass(pathname.startsWith("/about"))}>
              About
            </Link>
            <Link href="/blog" className={linkClass(pathname.startsWith("/blog"))}>
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <PillCta href="/contact" className="hidden sm:inline-flex">
              Contact Us
            </PillCta>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#141515] md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {openMenu === "services" && (
          <div
            className="absolute inset-x-0 top-full hidden origin-top px-4 pb-4 md:block"
            onMouseEnter={() => open("services")}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-white text-black shadow-2xl">
              <div className="px-6 py-6 md:px-8 md:py-7">
                <span className="mb-4 inline-flex rounded-full bg-[#5b6cff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Solutions
                </span>
                <div className="grid gap-2 md:grid-cols-3">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-[#f2f1ff]"
                    >
                      <MenuMark href={item.href} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">{item.title}</span>
                        <span className="block text-sm text-black/50">{item.subtitle}</span>
                        <span className="mt-1 block text-sm text-black/60">{item.description}</span>
                      </span>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>

                <span className="mb-4 mt-8 inline-flex rounded-full bg-teal-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Services
                </span>
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    { label: "Branding", items: brandingServices },
                    { label: "Design", items: designServices },
                    { label: "Development", items: developmentServices },
                  ].map((col) => (
                    <div key={col.label}>
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
                        {col.label}
                      </div>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-[#f2f1ff]"
                            >
                              <MenuMark href={item.href} />
                              <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-black">{item.title}</span>
                                <span className="block text-sm text-black/50">{item.description}</span>
                              </span>
                              <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {openMenu === "industries" && (
          <div
            className="absolute inset-x-0 top-full hidden origin-top px-4 pb-4 md:block"
            onMouseEnter={() => open("industries")}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-[900px] overflow-hidden rounded-[28px] bg-white p-6 text-black shadow-2xl md:p-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
                Industries
              </div>
              <div className="grid grid-flow-col grid-rows-4 gap-1">
                {industriesNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-[#f2f1ff]"
                  >
                    <MenuMark href={item.href} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-sm text-black/50">{item.description}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#0b0b0b] pt-[72px] md:pt-[97px]">
          <div className="space-y-1 px-5 pb-24 md:px-8">
            <PillCta href="/contact" className="mb-6 w-full justify-between sm:hidden">
              Contact Us
            </PillCta>
            {[
              { title: "Works", href: "/works" },
              { title: "Pricing", href: "/pricing" },
              { title: "About", href: "/about" },
              { title: "Blog", href: "/blog" },
              { title: "Contact", href: "/contact" },
              { title: "Book a Call", href: "/book-a-call" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-3 text-lg text-white hover:bg-white/5"
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4">
              <div className="px-3 text-xs uppercase tracking-[0.16em] text-white/40">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-white/80 hover:bg-white/5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <div className="px-3 text-xs uppercase tracking-[0.16em] text-white/40">Services</div>
              {chromeServices.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-white/80 hover:bg-white/5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <div className="px-3 text-xs uppercase tracking-[0.16em] text-white/40">Industries</div>
              {industriesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-white/80 hover:bg-white/5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
