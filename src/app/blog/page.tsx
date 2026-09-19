import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { BookCallBand } from "@/components/sections/book-call-band";
import { BlogCard } from "@/components/sections/blog-card";

export const metadata: Metadata = {
  title: "Blog — Useful Articles on Web & Mobile App Design",
};

const topics = [
  "All topics",
  "Web Design",
  "Branding",
  "UI/UX Design",
  "Product Discovery & Strategy",
  "Web Development",
  "Healthcare",
  "Fintech",
  "SaaS",
  "AI",
  "Web3",
  "Team & Staffing",
];

export default function BlogPage() {
  return (
    <>
      <section className="works-glow">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Home / Blog</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr]">
            <aside className="space-y-8">
              <div>
                <ul className="space-y-2">
                  {topics.map((t, i) => (
                    <li key={t}>
                      <span
                        className={
                          i === 0
                            ? "inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black"
                            : "text-sm text-white/70"
                        }
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-white/40">Explore more</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/works" className="hover:text-lime">
                      Case Study
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-lime">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            <div>
              <h1 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Expert Perspectives on Design, Development &amp; Product Strategy
              </h1>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
