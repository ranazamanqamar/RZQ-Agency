import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.cover}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {post.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-md"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 text-sm text-white/50">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80">
          {post.author
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span className="truncate text-white/70">{post.author}</span>
        <span className="ml-auto shrink-0">{post.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-lime md:text-xl">
        {post.title}
      </h3>
    </Link>
  );
}
