import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Useful Articles on Web & Mobile App Design",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
