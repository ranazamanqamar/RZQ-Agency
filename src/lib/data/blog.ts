import posts from "./blog-posts.json";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h"; level: number; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  excerpt: string;
  cover: string;
  body: BlogBlock[];
};

export const blogPosts = posts as BlogPost[];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPost(slug);
  if (!current) return blogPosts.slice(0, limit);
  const related = blogPosts.filter(
    (p) => p.slug !== slug && p.categories.some((c) => current.categories.includes(c)),
  );
  if (related.length >= limit) return related.slice(0, limit);
  const fillers = blogPosts.filter((p) => p.slug !== slug && !related.some((r) => r.slug === p.slug));
  return [...related, ...fillers].slice(0, limit);
}

export const blogTopics = [
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
