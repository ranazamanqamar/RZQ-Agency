export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  excerpt: string;
  cover: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "style-guide-vs-brand-guide",
    title: "Style Guide vs Brand Guide: Which One Does Your Business Need?",
    author: "Alyona Deieieva",
    date: "18.09.2026",
    categories: ["Branding"],
    excerpt:
      "Effective branding doesn’t happen accidentally. Learn when you need a style guide, a brand guide, or both.",
    cover: "/blog/style-guide-vs-brand-guide.png",
  },
  {
    slug: "mental-health-app-design-principles-and-patterns",
    title: "Mental Health App Design: Principles, Patterns, and What Works",
    author: "Valeriia Serohina",
    date: "07.09.2026",
    categories: ["Healthcare", "Mobile Design"],
    excerpt:
      "Principles and patterns for designing mental health apps that feel safe, clear, and clinically thoughtful.",
    cover: "/blog/mental-health-app-design.png",
  },
  {
    slug: "eu-ai-act-guide-for-design",
    title: "EU AI Act for Design: What Businesses Need to Know",
    author: "Rana Zaman Qamar",
    date: "27.08.2026",
    categories: ["Design Audit", "Hiring design specialist"],
    excerpt:
      "What the EU AI Act means for product and design teams — and how to prepare your interfaces and processes.",
    cover: "/blog/eu-ai-act-guide.png",
  },
  {
    slug: "brand-implementation-strategy-process",
    title: "Brand Implementation: Strategy, Process, Checklist, and Plan",
    author: "Alyona Deieieva",
    date: "21.08.2026",
    categories: ["Branding"],
    excerpt: "A practical roadmap for rolling out brand systems across product, marketing, and ops.",
    cover: "/blog/brand-implementation.png",
  },
  {
    slug: "healthcare-branding-patient-trust",
    title: "Healthcare Branding: How Visual Identity Shapes Patient Trust",
    author: "Alyona Deieieva",
    date: "14.08.2026",
    categories: ["Healthcare", "Branding"],
    excerpt: "How visual identity influences patient confidence in digital health products.",
    cover: "/blog/healthcare-branding.png",
  },
  {
    slug: "hipaa-compliant-website-design",
    title: "HIPAA Compliant Website Design: What Healthcare Teams Need to Know",
    author: "Valeriia Serohina",
    date: "08.06.2026",
    categories: ["Healthcare"],
    excerpt: "Design and UX considerations for HIPAA-aware healthcare websites and portals.",
    cover: "/blog/hipaa-website.png",
  },
  {
    slug: "why-healthcare-website-redesigns-fail",
    title: "Why Healthcare Website Redesigns Fail – and What Enterprise Teams Do Differently",
    author: "Valeriia Serohina",
    date: "26.05.2026",
    categories: ["Healthcare"],
    excerpt: "Common failure modes in healthcare redesigns — and how enterprise teams avoid them.",
    cover: "/blog/healthcare-redesign.png",
  },
  {
    slug: "alignment-design-principle",
    title: "How Alignment Design Principle Impacts Branding and Conversion Rates",
    author: "Valeriia Serohina",
    date: "18.05.2026",
    categories: ["Design"],
    excerpt: "Why visual and structural alignment quietly drives brand trust and conversion.",
    cover: "/blog/alignment-design.png",
  },
  {
    slug: "global-branding-enterprise-saas-fintech",
    title: "Global Branding in Enterprise SaaS and Fintech with Unified Identity",
    author: "Alyona Deieieva",
    date: "24.04.2026",
    categories: ["Branding", "SaaS"],
    excerpt: "Building unified identity systems for multi-market SaaS and fintech brands.",
    cover: "/blog/global-branding.png",
  },
  {
    slug: "stages-of-branding-multiple-decision-makers",
    title: "Stages of Branding for Organizations With More Than One Decision Maker",
    author: "Alyona Deieieva",
    date: "20.04.2026",
    categories: ["Branding"],
    excerpt: "How to run branding programs when committees — not founders — approve every step.",
    cover: "/blog/stages-branding.png",
  },
  {
    slug: "brand-swot-analysis",
    title: "Brand SWOT Analysis for Companies That Cannot Afford Blind Spots",
    author: "Alyona Deieieva",
    date: "10.04.2026",
    categories: ["Branding"],
    excerpt: "A structured SWOT approach for brands operating under real competitive pressure.",
    cover: "/blog/brand-swot.png",
  },
  {
    slug: "good-website-conversion-rate-committee",
    title: "What a Good Website Conversion Rate Means When Your Buyer Is a Committee",
    author: "Valeriia Serohina",
    date: "03.04.2026",
    categories: ["Conversion"],
    excerpt: "Rethinking conversion metrics for B2B products sold to buying committees.",
    cover: "/blog/conversion-committee.png",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPost(slug);
  if (!current) return blogPosts.slice(0, limit);
  const related = blogPosts.filter(
    (p) =>
      p.slug !== slug &&
      p.categories.some((c) => current.categories.includes(c)),
  );
  if (related.length >= limit) return related.slice(0, limit);
  const fillers = blogPosts.filter(
    (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug),
  );
  return [...related, ...fillers].slice(0, limit);
}
