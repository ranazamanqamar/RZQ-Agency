import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Questions and Project Inquiries",
  description: `Contact ${site.name}. Email ${site.email} or book a call at ${site.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <section className="hero-glow min-h-[calc(100dvh-97px)] py-10 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <ContactForm />
      </div>
    </section>
  );
}
