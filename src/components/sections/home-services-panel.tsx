import Link from "next/link";
import { ArrowDownLeft } from "lucide-react";
import {
  brandingServices,
  designServices,
  developmentServices,
} from "@/lib/data/nav";

const groups = [
  { title: "Branding", items: brandingServices },
  { title: "Design", items: designServices },
  { title: "Development", items: developmentServices },
];

export function HomeServicesPanel() {
  return (
    <section className="relative overflow-hidden px-5 pb-2 pt-16 md:px-8 md:pb-3 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.16em] text-white/40">Services</p>
        <h2 className="mt-3 text-center text-4xl font-normal leading-[1.15] text-white md:text-6xl">
          <span className="block">Digital Product Design &amp;</span>
          <span className="mt-1 block">
            Development{" "}
            <span className="font-serif-italic font-normal">Services We Offer</span>
          </span>
        </h2>

        <div className="mt-12 rounded-[40px] bg-white px-6 py-8 text-[#141515] md:grid md:grid-cols-3 md:gap-x-10 md:px-12 md:py-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-normal">{group.title}</h3>
              <ul className="mt-6 divide-y divide-black/8">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-3 py-4 text-[15px] font-normal transition-colors hover:text-black/55"
                    >
                      {item.title}
                      <ArrowDownLeft className="h-4 w-4 shrink-0 text-black/35 transition group-hover:text-black" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
