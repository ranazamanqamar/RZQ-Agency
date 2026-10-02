import { PillCta } from "@/components/pill-cta";
import { bookCallHref } from "@/lib/site";

export function WorksMatchCta() {
  return (
    <section className="bg-transparent px-5 py-16 text-black md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px] rounded-[40px] bg-white px-6 py-20 text-center md:px-16 md:py-28">
        <div className="mx-auto max-w-[820px]">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
          Wondering if we&apos;re your
          <br />
          <span className="font-serif italic">UI/UX design</span> match?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-black/55 md:text-lg">
          We offer you a free 3-day trial work with one of our experienced designers to cover your
          questions about our working process.
        </p>
        <div className="mt-10 flex justify-center">
          <PillCta href={bookCallHref} variant="lime" split external>
            Book a Call
          </PillCta>
        </div>
        </div>
      </div>
    </section>
  );
}
