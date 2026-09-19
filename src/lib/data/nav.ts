export type NavLink = {
  title: string;
  href: string;
  description?: string;
  subtitle?: string;
};

export const mainNav = [
  { title: "Works", href: "/works" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
] as const;

export const solutions: NavLink[] = [
  {
    title: "MVP Design",
    subtitle: "For enterprise ecosystems",
    description: "Create a digital product, attract investors and new clients.",
    href: "/solutions/mvp",
  },
  {
    title: "Product Redesign",
    subtitle: "For SMEs & enterprises",
    description: "Get a fresh look, improved user experience, or enhanced functionality.",
    href: "/solutions/product-redesign",
  },
  {
    title: "Team Extension",
    subtitle: "For existing companies",
    description: "Expand your team with our dedicated and talented design experts.",
    href: "/solutions/team-extension",
  },
];

export const brandingServices: NavLink[] = [
  { title: "Pitch Deck", description: "Get visuals that raise capital", href: "/services/pitch-deck" },
  { title: "Brand Identity", description: "Build trust with design", href: "/services/brand-identity" },
  { title: "Logo Design", description: "Become unforgettable", href: "/services/logo-design" },
  { title: "Graphic Design", description: "Illustrations, icons, Social media", href: "/services/graphic-design" },
  { title: "Rebranding", description: "Refresh your brand presence", href: "/services/rebranding" },
];

export const designServices: NavLink[] = [
  { title: "UI/UX Design", description: "Web & mobile app design", href: "/services/ui-ux-design" },
  { title: "Website Design", description: "Custom websites & landings", href: "/services/web-design" },
  { title: "Mobile App Design", description: "Apps your users love", href: "/services/mobile-design" },
  { title: "Website Redesign", description: "Modern look, higher impact", href: "/services/website-redesign" },
  { title: "Product UX/UI Audit", description: "Find gaps, unlock growth", href: "/services/ux-audit" },
];

export const developmentServices: NavLink[] = [
  { title: "Web Development", description: "Front-End & Back-End Development", href: "/services/web-development" },
  { title: "MVP Development", description: "MVPs that attract funding", href: "/services/mvp-development" },
  { title: "Landing page", description: "High-converting website", href: "/services/landing-page-design" },
  { title: "Corporate Websites", description: "Built for scale and trust", href: "/services/corporate-website-development" },
  { title: "WOW Websites", description: "Memorable digital experiences", href: "/services/wow-web-design" },
  { title: "Webflow Development", description: "No-code sites that ship fast", href: "/services/webflow" },
  { title: "Mobile Development", description: "Native & cross-platform apps", href: "/services/mobile-development" },
];

export const industriesNav: NavLink[] = [
  { title: "Web 3, Blockchain", description: "Crypto, DeFi, DEX, CEX, NFT", href: "/industries/web3" },
  { title: "SaaS", description: "CRM, HR, AI, ERP, Automation tools", href: "/industries/saas" },
  { title: "AI & ML", description: "Chatbots, Automation, Predictive Analytics", href: "/industries/ai" },
  { title: "Cybersecurity", description: "Threat Detection, IAM, Compliance", href: "/industries/cybersecurity" },
  { title: "Fintech", description: "Banking, Digital Payments, Exchanges", href: "/industries/fintech" },
  { title: "Healthcare & Wellness", description: "Mental health, Insurance, Fitness", href: "/industries/healthcare" },
  { title: "HR tech", description: "Recruiting, L&D, Workforce Analytics", href: "/industries/hr-tech" },
];

export const footerCompany = [
  { title: "Works", href: "/works" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Referral", href: "/referral" },
  { title: "Contact", href: "/contact" },
  { title: "Pricing", href: "/pricing" },
];

export const locations = [
  { country: "Estonia", city: "Tallinn", address: "Telliskivi tn 57", code: "EE" },
  { country: "United States", city: "Los Angeles", address: "21255 Burbank Boulevard, Los Angeles, CA 91367", code: "US" },
  { country: "United Kingdom", city: "London", address: "125 Kingsway, London, England WC2B 6NH", code: "GB" },
  { country: "Netherlands", city: "Amsterdam", address: "38-40 Lincolnweg, Amsterdam, Noord Holland 1033 SN", code: "NL" },
  { country: "Australia", city: "Sydney", address: "1 Sussex Street, Barangaroo, Sydney, NSW 2000", code: "AU" },
  { country: "United Arab Emirates", city: "Abu Dhabi", address: "Level 1, Yas Mall, Yas Island, Abu Dhabi", code: "AE" },
  { country: "Romania", city: "Bucharest", address: "27 Park Herastrau, Bucharest", code: "RO" },
  { country: "Ukraine", city: "Odesa", address: "Haharinske Plateau, 5/3", code: "UA" },
];
