import { PillCta } from "@/components/pill-cta";
import { bookCallHref } from "@/lib/site";

export function WorkTogetherCard() {
  return (
    <section className="bg-[#0b0b0b] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Let&apos;s{" "}
          <span className="font-serif-italic font-normal">work</span> together
        </h2>
        <div className="mt-10 rounded-[32px] bg-white px-6 py-10 text-left text-black md:px-14 md:py-16">
          <h3 className="max-w-xl text-3xl font-bold tracking-tight md:text-5xl">
            3-day FREE trial to get to know us
          </h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-black/55 md:text-lg">
            We offer you a free 3-day trial work with one of our designers to cover your
            questions about our working process.
          </p>
          <div className="mt-8">
            <PillCta href={bookCallHref} variant="lime" external>
              Book a Call
            </PillCta>
          </div>
        </div>
      </div>
    </section>
  );
}
