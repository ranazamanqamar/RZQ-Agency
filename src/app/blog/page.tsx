"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blogPosts, blogTopics } from "@/lib/data/blog";
import { bookCallHref } from "@/lib/site";
import { PillCta } from "@/components/pill-cta";
import { BookCallBand } from "@/components/sections/book-call-band";
import { BlogCard } from "@/components/sections/blog-card";

const PAGE_SIZE = 12;

export default function BlogPage() {
  const [topic, setTopic] = useState("All topics");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const filtered = useMemo(
    () =>
      topic === "All topics"
        ? blogPosts
        : blogPosts.filter((p) => p.categories.includes(topic)),
    [topic],
  );
  const shown = filtered.slice(0, visible);

  return (
    <>
      <section className="blog-wash">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {" / Blog"}
          </p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[234px_minmax(0,1fr)] lg:gap-12">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex flex-wrap gap-1">
                {blogTopics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setTopic(t);
                      setVisible(PAGE_SIZE);
                    }}
                    className={
                      topic === t
                        ? "rounded-full bg-white px-3.5 py-2.5 text-sm text-black"
                        : "rounded-full bg-white/[0.07] px-3.5 py-2.5 text-sm text-white hover:bg-white/[0.12]"
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-6 h-px w-16 bg-white/15" />
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.14em] text-white/40">Explore more</div>
                <ul className="mt-4 space-y-4 text-[15px] text-white">
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
                <PillCta href={bookCallHref} variant="lime" split external className="mt-6">
                  Book a Call
                </PillCta>
              </div>
            </aside>

            <div>
              <h1 className="max-w-4xl text-4xl font-medium tracking-tight md:text-[56px] md:leading-[1.08]">
                Expert Perspectives on Design, Development &amp; Product Strategy
              </h1>
              <div className="mt-12 grid gap-y-12 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
                {shown.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              {visible < filtered.length && (
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((n) => n + PAGE_SIZE)}
                    className="rounded-full border border-[#ccc] bg-white px-11 py-5 text-sm text-[#141515] hover:bg-lime"
                  >
                    Show more
                  </button>
                </div>
              )}
              {filtered.length === 0 && (
                <p className="mt-10 text-white/50">No articles in this topic yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
