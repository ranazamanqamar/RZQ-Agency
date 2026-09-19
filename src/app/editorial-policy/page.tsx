import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Editorial Policy" };

export default function EditorialPolicyPage() {
  return (
    <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="text-4xl font-bold">Editorial Policy</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-white/65">
        <p>
          The {site.name} blog publishes practical perspectives on design, development, and product
          strategy. We aim for clarity, accuracy, and usefulness for founders and product teams.
        </p>
        <p>
          Articles may reference industry examples and portfolio work for illustration. Sponsored
          content, if any, will be clearly labeled.
        </p>
      </div>
    </section>
  );
}
