import { bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";

const laurels = [
  { src: "/awards/laurel-clutch.avif", label: "89+ Reviews on Clutch" },
  { src: "/awards/laurel-upwork.avif", label: "Top Rated Plus Agency on Upwork" },
  { src: "/awards/laurel-dribbble.avif", label: "Top 50 Trending team on Dribbble" },
  { src: "/awards/laurel-behance.avif", label: "Projects are Featured on Behance platform" },
];

export function BookCallBand({
  blend = false,
  title = "Ready to scale your business?",
}: {
  blend?: boolean;
  title?: string;
}) {
  return (
    <section className={blend ? "section-pad relative" : "book-call-wash section-pad"}>
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="rounded-[36px] bg-white px-6 py-14 text-center text-black md:px-16 md:py-20">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
            Book a free consultation to get clarity, direction, and expert advice you can implement
            right away.
          </p>
          <div className="mt-8 flex justify-center">
            <PillCta href={bookCallHref} variant="lime" split external>
              Book a Call
            </PillCta>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {laurels.map((item) => (
            <div key={item.label} className="text-center text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt="" className="mx-auto h-16 w-auto object-contain" />
              <p className="mx-auto mt-3 max-w-[180px] text-sm leading-snug text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
