"use client";

import { useState } from "react";
import { ArrowDownLeft, ArrowUp, Check, Copy, Paperclip, Phone, Mail } from "lucide-react";
import { bookCallHref, site } from "@/lib/site";
import { FounderPhoto } from "@/components/founder-photo";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const budgets = ["Up to $10K", "$10-$20K", "$20-$50K", "$50-$100K", ">$100K"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState("");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = new FormData(e.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      budget,
      about: String(form.get("about") || ""),
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!payload.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = "Valid corporate email is required";
    }
    if (!payload.budget) nextErrors.budget = "Please select a budget";
    if (!payload.about.trim()) nextErrors.about = "Tell us about your project";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or email us directly." });
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-white p-8 text-center text-black md:p-12">
        <h2 className="text-3xl font-bold md:text-4xl">Request received</h2>
        <p className="mt-3 max-w-md text-black/60">
          We’ll reach out within a few hours.
        </p>
        <p className="mt-6 text-sm text-black/50">
          Or skip the wait and{" "}
          <a href={bookCallHref} className="font-medium text-black underline">
            call {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-5">
      <aside className="rounded-[32px] bg-[linear-gradient(148deg,rgba(13,150,141,0.9),rgba(13,23,29,0.9))] p-6 text-white md:p-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <FounderPhoto size={72} />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0a66c2]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div>
            <div className="font-serif-italic text-xl text-white">{site.founderName}</div>
            <div className="text-sm text-white/55">Founder &amp; CEO</div>
          </div>
        </div>

        <ul className="mt-8 space-y-4">
          {[
            "We will respond to you within 12 hours",
            "We’ll sign an NDA if requested",
            "A free 3-day trial work",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-black">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <div className="text-sm text-white/45">Project inquiries</div>
          <div className="mt-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 text-sm">
              <Mail className="h-4 w-4 text-white/60" />
              <a href={`mailto:${site.email}`} className="truncate hover:text-lime">
                {site.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-auto text-white/60 hover:text-white"
                aria-label="Copy email"
              >
                {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <a
              href={bookCallHref}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 text-sm transition hover:border-lime hover:text-lime"
            >
              <Phone className="h-4 w-4" />
              Book a call
            </a>
          </div>
        </div>
      </aside>

      <form
        onSubmit={onSubmit}
        className="rounded-[32px] bg-white p-6 text-black md:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-[32px] font-medium leading-tight tracking-tight">
            Tell us about your project
          </h1>
          <div className="flex shrink-0 items-center gap-2 text-sm text-black/55">
            <span>Autofill form via</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#0a66c2] transition hover:border-black hover:bg-black hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[15px] font-medium text-black/80 transition hover:border-black hover:bg-black hover:text-white"
            >
              M
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="fullName" className="font-normal text-black">
              Full name*
            </Label>
            <Input id="fullName" name="fullName" className="mt-2" />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="font-normal text-black">
              Corporate email*
            </Label>
            <Input id="email" name="email" type="email" className="mt-2" />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="mt-6">
          <Label className="font-normal text-black">What is your budget?*</Label>
          <div className="mt-3 flex flex-nowrap gap-2 overflow-x-auto">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  budget === b
                    ? "bg-black text-white"
                    : "bg-[#f2f2f4] text-black/70 hover:bg-[#e6e6ea]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          {errors.budget && <p className="mt-1 text-xs text-red-600">{errors.budget}</p>}
        </div>

        <div className="mt-6">
          <Label htmlFor="about" className="font-normal text-black">
            About project*
          </Label>
          <Textarea id="about" name="about" rows={1} className="mt-2 min-h-11" />
          {errors.about && <p className="mt-1 text-xs text-red-600">{errors.about}</p>}
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-black/55">
            <Paperclip className="h-4 w-4" />
            Attach files (.pdf, .doc)
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
          </label>
          <p className="max-w-[220px] text-xs leading-snug text-black/40">
            By submitting this form you agree to our{" "}
            <a href="/cookie-policy" className="underline">
              Cookie Policy
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex shrink-0 items-center gap-2 text-sm disabled:opacity-50"
          >
            <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-lime text-black transition-colors group-hover:bg-white">
              <ArrowDownLeft
                className="h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:opacity-0"
                strokeWidth={2.25}
              />
              <ArrowUp
                className="absolute h-4 w-4 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                strokeWidth={2.25}
              />
            </span>
            <span className="rounded-full bg-lime px-7 py-3.5 text-black transition-colors group-hover:bg-white">
              {status === "loading" ? "Submitting…" : "Submit"}
            </span>
          </button>
        </div>
        {errors.form && <p className="mt-3 text-sm text-red-600">{errors.form}</p>}
      </form>
    </div>
  );
}
