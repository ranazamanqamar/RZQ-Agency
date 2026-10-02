import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { partnerLogoMarks } from "@/components/sections/hero-logo-marquee";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Questions and Project Inquiries",
  description: `Contact ${site.name}. Email ${site.email} or book a call at ${site.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <section className="contact-wash flex min-h-dvh flex-col pb-10 md:pb-16">
      <div className="mx-auto w-full max-w-[1200px] flex-1 px-5 pt-10 md:px-8 md:pt-16">
        <ContactForm />
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 pb-2 opacity-55 md:gap-x-14">
        {partnerLogoMarks.map((mark, index) => (
          <span key={index}>{mark}</span>
        ))}
      </div>
    </section>
  );
}
