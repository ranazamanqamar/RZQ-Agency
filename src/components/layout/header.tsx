"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import {
  brandingServices,
  designServices,
  developmentServices,
  industriesNav,
  solutions,
} from "@/lib/data/nav";
import { PillCta } from "@/components/pill-cta";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "industries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (menu: "services" | "industries") => {
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

  const linkClass = (active?: boolean) =>
    cn(
      "text-sm text-white/90 transition-colors duration-300 hover:text-lime",
      active && "text-lime",
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || openMenu || mobileOpen
            ? "bg-[#0b0b0b]/90 backdrop-blur-xl"
            : "bg-[#0b0b0b]/60 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 md:h-[97px] md:px-8">
          <Link href="/" className="text-[26px] font-bold uppercase tracking-tight text-white md:text-[30px]">
            {site.name}
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
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
                  "inline-flex items-center gap-1 text-sm transition-colors duration-300",
                  openMenu === "services" || pathname.startsWith("/services") || pathname.startsWith("/solutions")
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
                  "inline-flex items-center gap-1 text-sm transition-colors duration-300",
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Services mega menu */}
        {openMenu === "services" && (
        <div
          className="absolute inset-x-0 top-full hidden origin-top px-4 pb-4 lg:block"
          onMouseEnter={() => open("services")}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-white text-black shadow-2xl">
            <div className="bg-[#f2f1ff] px-6 py-5 md:px-8">
              <span className="mb-4 inline-flex rounded-full bg-[#5b6cff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Solutions
              </span>
              <div className="grid gap-4 md:grid-cols-3">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl p-3 transition-colors hover:bg-white/70"
                  >
                    <div className="mb-2 h-10 w-10 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 opacity-90" />
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-black/50">{item.subtitle}</div>
                    <p className="mt-1 text-sm text-black/60">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-6 py-5 md:px-8">
              <span className="mb-4 inline-flex rounded-full bg-teal-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Services
              </span>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { label: "Branding", items: brandingServices },
                  { label: "Design", items: designServices },
                  { label: "Development", items: developmentServices.slice(0, 5) },
                ].map((col) => (
                  <div key={col.label}>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
                      {col.label}
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-[#f2f1ff]"
                          >
                            <span className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-lime to-emerald-400" />
                            <span>
                              <span className="block font-semibold text-black group-hover:text-black">
                                {item.title}
                              </span>
                              <span className="block text-sm text-black/50">{item.description}</span>
                            </span>
                            <ArrowRight className="ml-auto mt-1 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
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

        {/* Industries mega menu */}
        {openMenu === "industries" && (
        <div
          className="absolute inset-x-0 top-full hidden origin-top px-4 pb-4 lg:block"
          onMouseEnter={() => open("industries")}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[900px] overflow-hidden rounded-[28px] bg-white p-6 text-black shadow-2xl md:p-8">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              Industries
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {industriesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-[#f2f1ff]"
                >
                  <span className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-violet-400 via-fuchsia-400 to-lime opacity-90" />
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#0b0b0b]/95 pt-[72px] backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-5 pb-24">
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
              <div className="px-3 text-xs uppercase tracking-[0.16em] text-white/40">Services</div>
              {[...brandingServices, ...designServices, ...developmentServices.slice(0, 5)].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-white/80 hover:bg-white/5"
                  >
                    {item.title}
                  </Link>
                ),
              )}
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
