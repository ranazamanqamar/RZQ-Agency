export type Industry = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  headline: string;
  body: string;
};

export const industries: Industry[] = [
  {
    slug: "web3",
    title: "Web 3, Blockchain",
    description: "Crypto, DeFi, DEX, CEX, NFT",
    tags: ["dApps", "DeFi", "Play2Earn", "IoT"],
    headline: "Web3 & Blockchain Design Services",
    body: "RZQ product designers craft custom solutions for crypto, DeFi, DEX, CEX, and NFT products that balance business value with seamless user experience.",
  },
  {
    slug: "saas",
    title: "SaaS",
    description: "CRM, HR, AI, ERP, Automation tools",
    tags: ["CRM", "HR", "AI", "ERP", "Automation tools"],
    headline: "SaaS Design Services",
    body: "Our team provides SaaS design services for system-first, category-defining web and mobile products with an enterprise-grade approach for product, engineering, and marketing teams.",
  },
  {
    slug: "ai",
    title: "AI & ML",
    description: "Chatbots, Automation, Predictive Analytics",
    tags: ["AI Marketing", "HR & AI", "Crypto AI", "Education AI"],
    headline: "AI & ML Product Design",
    body: "Design AI-powered products that feel clear, trustworthy, and useful — from chatbots to predictive analytics and automation workflows.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat Detection, IAM, Compliance",
    tags: ["Threat Detection", "IAM", "Compliance"],
    headline: "Cybersecurity Product Design",
    body: "Complex security products need calm UX. We design threat detection, IAM, and compliance experiences that reduce cognitive load for operators and buyers.",
  },
  {
    slug: "fintech",
    title: "Fintech",
    description: "Banking, Digital Payments, Exchanges",
    tags: ["Banking", "Trading", "Exchanges", "IoT"],
    headline: "Fintech Design & Development",
    body: "From digital banking to payments and exchanges, we design fintech products that earn trust and convert under high-stakes decision moments.",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    description: "Mental health, Insurance, Fitness",
    tags: ["Mental health", "Wellness", "Insurance", "Fitness"],
    headline: "Healthcare & Wellness Design",
    body: "Patient-centered digital products across mental health, insurance, fitness, and clinical workflows — designed for clarity, care, and compliance.",
  },
  {
    slug: "hr-tech",
    title: "HR tech",
    description: "Recruiting, L&D, Workforce Analytics",
    tags: ["Recruiting", "L&D", "Workforce Analytics"],
    headline: "HR Tech Design Services",
    body: "Recruiting platforms, L&D products, and workforce analytics tools designed for HR teams and candidates who need speed and clarity.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
