import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        This Privacy Policy describes how {site.name} (“we”, “us”) collects, uses, and protects
        information when you use this website or contact us at {site.email}.
      </p>
      <p>
        We collect information you submit via forms (name, email, project details, city, budget) and
        basic technical data such as browser type and pages visited. We use this information to
        respond to inquiries, improve the site, and deliver services you request.
      </p>
      <p>
        We do not sell personal data. Contact {site.email} for access, correction, or deletion
        requests.
      </p>
    </LegalShell>
  );
}

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="mt-8 space-y-4 text-white/65 leading-relaxed">{children}</div>
    </section>
  );
}
