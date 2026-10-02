import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPost, getRelatedPosts } from "@/lib/data/blog";
import { BookCallBand } from "@/components/sections/book-call-band";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogBody } from "@/components/sections/blog-body";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? post.title : "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <article className="works-glow">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
          <Link href="/blog" className="text-sm text-white/55 hover:text-lime">
            ← Blog
          </Link>
          <div className="mt-6 overflow-hidden rounded-[28px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.categories.map((c) => (
              <span key={c} className="pill-tag">
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-white/50">
            {post.author} · {post.date}
          </p>
          <BlogBody blocks={post.body} />
        </div>
      </article>

      <section className="section-pad border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Related articles</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <BookCallBand />
    </>
  );
}
