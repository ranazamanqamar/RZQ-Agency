"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { mailtoHref, site } from "@/lib/site";

export function FooterEmail() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mt-3 flex items-center gap-2">
      <a
        href={mailtoHref}
        className="text-base text-white transition-colors hover:text-lime"
      >
        {site.email}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="text-white/55 transition-colors hover:text-lime"
        aria-label={copied ? "Email copied" : "Copy email"}
      >
        {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
