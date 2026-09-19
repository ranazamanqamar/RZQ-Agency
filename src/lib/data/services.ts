export type ServicePage = {
  slug: string;
  title: string;
  category: "branding" | "design" | "development" | "solution";
  headline: string;
  description: string;
  bullets: string[];
};

export const services: ServicePage[] = [
  {
    slug: "pitch-deck",
    title: "Pitch Deck",
    category: "branding",
    headline: "Pitch Deck Design Agency",
    description:
      "Deliver an effective and convincing presentation of your idea to investors, potential partners, or clients with our professional pitch deck design services.",
    bullets: [
      "Custom slide deck design",
      "Visual storytelling and hierarchy",
      "Infographics and data visualization",
      "Deliverables in Figma, PowerPoint, and Keynote",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "branding",
    headline: "Branding that builds trust",
    description:
      "As a branding services agency, we craft distinct, impactful branding that tells a brand story and connects with customers.",
    bullets: ["Brand strategy", "Visual identity systems", "Typography & color", "Brand guidelines"],
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "branding",
    headline: "Become unforgettable",
    description: "Memorable logos that capture your product essence and scale across every touchpoint.",
    bullets: ["Concept exploration", "Vector mark systems", "Usage guidelines", "App icon variants"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "branding",
    headline: "Illustrations, icons, Social media",
    description: "From icons to social campaigns, we create visuals that keep your brand consistent and alive.",
    bullets: ["Icon sets", "Illustrations", "Social templates", "Marketing assets"],
  },
  {
    slug: "rebranding",
    title: "Rebranding",
    category: "branding",
    headline: "Refresh your brand presence",
    description: "Modernize legacy brands for new markets without losing the equity you’ve already built.",
    bullets: ["Brand audit", "Positioning refresh", "Visual modernization", "Rollout plan"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    headline: "UI/UX Design Services for Enterprises & Digital Products",
    description:
      "Share your goals, and we’ll map the design path. RZQ’s UI/UX design services start from $6,000 with research, flows, wireframes, and high-fidelity UI.",
    bullets: [
      "UX research and competitor analysis",
      "User flow mapping and information architecture",
      "Wireframes for core product screens",
      "High-fidelity UI design for web or mobile",
      "Figma file with developer handoff annotations",
    ],
  },
  {
    slug: "web-design",
    title: "Website Design",
    category: "design",
    headline: "Website Design services",
    description:
      "Our website design company creates websites & landing pages that build trust and loyalty and increase conversions.",
    bullets: ["Custom website design", "Website redesign", "Landing pages", "Responsive design"],
  },
  {
    slug: "mobile-design",
    title: "Mobile App Design",
    category: "design",
    headline: "Apps your users love",
    description: "Mobile experiences designed for clarity, retention, and delightful everyday use.",
    bullets: ["iOS & Android patterns", "Onboarding flows", "Design systems", "Prototype handoff"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    category: "design",
    headline: "Modern look, higher impact",
    description: "Upgrade outdated sites with clearer structure, better UX, and conversion-focused visuals.",
    bullets: ["UX audit", "Information architecture", "Visual refresh", "Performance-minded layouts"],
  },
  {
    slug: "ux-audit",
    title: "Product UX/UI Audit",
    category: "design",
    headline: "Find gaps, unlock growth",
    description: "A structured audit that surfaces friction, prioritizes fixes, and maps measurable UX wins.",
    bullets: ["Heuristic review", "Funnel analysis", "Prioritized backlog", "Quick-win roadmap"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "development",
    headline: "Custom Web Development Services",
    description:
      "Get highly-performing, fully functional and secure web experiences. Our front-end and back-end development team improves, redesigns, or builds your website from scratch.",
    bullets: [
      "Front-End & Back-End Development",
      "React and modern stacks",
      "SEO and performance optimization",
      "Post-launch support",
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    category: "development",
    headline: "MVPs that attract funding",
    description: "Ship a focused product fast — validated scope, clean architecture, investor-ready polish.",
    bullets: ["Scoped MVP roadmap", "Design + engineering pair", "Launch readiness", "Iteration loops"],
  },
  {
    slug: "landing-page-design",
    title: "Landing page",
    category: "development",
    headline: "High-converting website",
    description: "Landing pages that clarify value, build trust, and move visitors to action.",
    bullets: ["Messaging hierarchy", "Conversion sections", "A/B-ready structure", "Fast load times"],
  },
  {
    slug: "corporate-website-development",
    title: "Corporate Websites",
    category: "development",
    headline: "Built for scale and trust",
    description: "Enterprise-grade corporate sites with clear storytelling, CMS flexibility, and brand rigor.",
    bullets: ["Multi-page IA", "CMS integration", "Accessibility", "Global localization ready"],
  },
  {
    slug: "wow-web-design",
    title: "WOW Websites",
    category: "development",
    headline: "Memorable digital experiences",
    description: "Cinematic motion, distinctive art direction, and interactions that make brands unforgettable.",
    bullets: ["Motion design", "Custom interactions", "Art direction", "Performance budgets"],
  },
  {
    slug: "webflow",
    title: "Webflow Development",
    category: "development",
    headline: "No-code sites that ship fast",
    description: "Production Webflow builds with CMS, interactions, and handoff-ready structure.",
    bullets: ["Webflow CMS", "Interactions", "SEO setup", "Client training"],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    category: "development",
    headline: "Mobile Development",
    description: "Native and cross-platform apps engineered for performance, reliability, and delightful UX.",
    bullets: ["iOS & Android", "Cross-platform options", "API integration", "App store readiness"],
  },
];

export const solutionsPages: ServicePage[] = [
  {
    slug: "mvp",
    title: "MVP Design",
    category: "solution",
    headline: "MVP Design for enterprise ecosystems",
    description: "Create a digital product, attract investors and new clients.",
    bullets: ["Discovery & concept", "Clickable prototype", "Investor-ready visuals", "Launch plan"],
  },
  {
    slug: "product-redesign",
    title: "Product Redesign",
    category: "solution",
    headline: "Product Redesign for SMEs & enterprises",
    description: "Get a fresh look, improved user experience, or enhanced functionality.",
    bullets: ["UX audit", "Design system upgrade", "Feature refinement", "Measurable outcomes"],
  },
  {
    slug: "team-extension",
    title: "Team Extension",
    category: "solution",
    headline: "Team Extension for existing companies",
    description: "Expand your team with our dedicated and talented design experts.",
    bullets: ["Dedicated designers", "Head of Design oversight", "Flexible capacity", "3-day free trial"],
  },
];

export function getService(slug: string) {
  return [...services, ...solutionsPages].find((s) => s.slug === slug);
}
