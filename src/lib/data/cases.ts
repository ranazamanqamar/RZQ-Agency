export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  tags: string[];
  flag?: string;
  /** ISO 3166-1 alpha-2 country code — prefer over emoji `flag` for Windows */
  country?: string;
  metric?: string;
  quote?: string;
  author?: string;
  role?: string;
  featured?: boolean;
  gradient: string;
  /** Cover image for case cards — assigned via resolveCaseImage when omitted */
  image?: string;
};

const SLUG_COVERS: Record<string, string> = {
  "health-hq": "/works/health-hq.png",
  imed: "/works/imed.png",
  fundediq: "/works/fundediq.png",
  "piko-health": "/works/piko-health.png",
};

const INDUSTRY_COVERS: Record<string, string[]> = {
  Healthcare: [
    "/works/covers/cover-health-1.png",
    "/works/covers/cover-health-2.png",
    "/works/covers/cover-health-3.png",
    "/works/covers/cover-health-4.png",
    "/blog/mental-health-app-design.png",
    "/blog/healthcare-branding.png",
    "/blog/hipaa-website.png",
    "/blog/healthcare-redesign.png",
  ],
  Fintech: [
    "/works/covers/cover-fintech-1.png",
    "/works/covers/cover-fintech-2.png",
    "/works/covers/cover-fintech-3.png",
    "/works/covers/cover-web-1.png",
  ],
  "Web 3.0": [
    "/works/covers/cover-web3-1.png",
    "/works/covers/cover-web3-2.png",
    "/works/covers/cover-web3-3.png",
  ],
  Crypto: [
    "/works/covers/cover-web3-1.png",
    "/works/covers/cover-web3-2.png",
    "/works/covers/cover-web3-3.png",
  ],
  AI: [
    "/works/covers/cover-ai-1.png",
    "/works/covers/cover-ai-2.png",
    "/works/covers/cover-ai-3.png",
    "/blog/eu-ai-act-guide.png",
  ],
  SaaS: [
    "/works/covers/cover-saas-1.png",
    "/works/covers/cover-saas-2.png",
    "/works/covers/cover-saas-3.png",
    "/works/covers/cover-web-1.png",
  ],
  Cybersecurity: [
    "/works/covers/cover-cyber-1.png",
    "/works/covers/cover-cyber-2.png",
  ],
  "HR tech": ["/works/covers/cover-hr-1.png", "/works/covers/cover-saas-2.png"],
};

const TAG_COVERS: Record<string, string[]> = {
  Branding: [
    "/works/covers/cover-brand-1.png",
    "/blog/style-guide-vs-brand-guide.png",
    "/blog/brand-implementation.png",
    "/blog/stages-branding.png",
    "/blog/global-branding.png",
    "/blog/brand-swot.png",
  ],
  "Pitch Deck": ["/works/covers/cover-pitch-1.png"],
  "Pitch deck": ["/works/covers/cover-pitch-1.png"],
  "Website Design": ["/works/covers/cover-web-1.png", "/blog/conversion-committee.png"],
  "Website Redesign": ["/works/covers/cover-web-1.png", "/blog/healthcare-redesign.png"],
  Redesign: ["/works/covers/cover-web-1.png", "/blog/alignment-design.png"],
};

function hashSlug(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

function resolveCaseImage(item: CaseStudy, index: number): string {
  if (item.image) return item.image;
  if (SLUG_COVERS[item.slug]) return SLUG_COVERS[item.slug];

  const pools: string[] = [];
  for (const tag of item.tags) {
    if (TAG_COVERS[tag]) pools.push(...TAG_COVERS[tag]);
  }
  if (INDUSTRY_COVERS[item.industry]) pools.push(...INDUSTRY_COVERS[item.industry]);
  if (!pools.length) {
    pools.push(
      "/works/covers/cover-saas-1.png",
      "/works/covers/cover-brand-1.png",
      "/works/covers/cover-web-1.png",
    );
  }

  return pools[(hashSlug(item.slug) + index) % pools.length];
}

const caseStudiesRaw: CaseStudy[] = [
  {
    slug: "myso",
    title: "MYSO Finance",
    description: "MYSO Finance raised $2.4M and reached 85% user engagement with our design",
    industry: "Web 3.0",
    tags: ["Web 3.0", "UI/UX Design"],
    metric: "$2.4M raised",
    quote:
      "RZQ excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. Their inventive solutions captivate visually and significantly enhance the user experience.",
    author: "Aetienne Sardon",
    role: "Founder, MYSO Finance",
    featured: true,
    gradient: "from-violet-600 via-purple-700 to-indigo-900",
  },
  {
    slug: "mojo-cx",
    title: "MOJO CX",
    description: "MOJO-CX by TMAC streamlines contact centers with AI-powered coaching and prompts.",
    industry: "AI",
    tags: ["AI", "UI/UX Design", "SaaS"],
    metric: "Digital Voice Analysing Tool",
    quote: "I was impressed with the high levels of detail and polish for all the features.",
    author: "Jimmy Hosang",
    role: "Founder & CEO",
    featured: true,
    gradient: "from-fuchsia-600 via-purple-700 to-slate-900",
  },
  {
    slug: "enzyme",
    title: "Enzyme",
    description:
      "Enzyme is a DeFi platform that helps businesses and developers easily create and manage tokenized financial products.",
    industry: "Crypto",
    tags: ["Web 3.0", "Website Design"],
    quote: "Working with RZQ is really smooth in terms of communication and workflow.",
    author: "Stephane Heip",
    role: "CMO, Enzyme",
    featured: true,
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
  },
  {
    slug: "health-hq",
    title: "Health HQ",
    description: "Mobile app redesign for a children's health tracking application.",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX design"],
    flag: "🇺🇸",
    country: "us",
    featured: true,
    gradient: "from-sky-500 via-blue-700 to-indigo-950",
  },
  {
    slug: "imed",
    title: "IMed",
    description: "Pitch deck design for a national e-health ecosystem",
    industry: "Healthcare",
    tags: ["Healthcare", "Pitch deck"],
    flag: "🇺🇦",
    country: "ua",
    featured: true,
    gradient: "from-cyan-500 via-blue-800 to-slate-950",
  },
  {
    slug: "fundediq",
    title: "FundedIQ",
    description: "Branding & UI/UX design for a prop trading platform",
    industry: "Fintech",
    tags: ["Fintech", "UI/UX & Brand design"],
    flag: "🇦🇪",
    country: "ae",
    featured: true,
    gradient: "from-amber-500 via-orange-700 to-stone-950",
  },
  {
    slug: "piko-health",
    title: "Piko Health",
    description: "Branding, landing page, and web app design for a personalized healthcare platform.",
    industry: "Healthcare",
    tags: ["Healthcare", "Web app"],
    gradient: "from-rose-500 via-pink-700 to-slate-950",
  },
  {
    slug: "solnex",
    title: "Solnex",
    description: "Digital product design and brand identity for a crypto-first money platform",
    industry: "Fintech",
    tags: ["Fintech", "UI/UX Design", "Graphic Design"],
    gradient: "from-yellow-500 via-amber-700 to-neutral-950",
  },
  {
    slug: "knoot",
    title: "Knoot",
    description: "A dashboard design that lifted feature adoption by 37%",
    industry: "SaaS",
    tags: ["UI/UX Design"],
    gradient: "from-blue-500 via-indigo-700 to-slate-950",
  },
  {
    slug: "kinves",
    title: "Kinves",
    description: "Mobile app design for a personal finance platform",
    industry: "Fintech",
    tags: ["Fintech", "Mobile Design"],
    gradient: "from-lime-500 via-green-700 to-neutral-950",
  },
  {
    slug: "tunnelo",
    title: "Tunnelo",
    description: "Brand identity design for a VPN platform",
    industry: "Cybersecurity",
    tags: ["Branding"],
    gradient: "from-slate-500 via-zinc-700 to-black",
  },
  {
    slug: "nextgpu",
    title: "Nextgpu",
    description: "Brand and website redesign for a decentralized GPU network",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Website Design"],
    gradient: "from-purple-500 via-violet-800 to-black",
  },
  {
    slug: "altis",
    title: "Altis",
    description: "Pitch deck design and branding for an AI-powered cybersecurity platform",
    industry: "Cybersecurity",
    tags: ["Pitch Deck", "Branding"],
    gradient: "from-red-500 via-rose-800 to-black",
  },
  {
    slug: "vault",
    title: "Vault",
    description: "Mobile app design for a digital bank",
    industry: "Fintech",
    tags: ["Fintech", "Mobile Design"],
    gradient: "from-teal-500 via-cyan-800 to-slate-950",
  },
  {
    slug: "aethel-finance",
    title: "Aethel Finance",
    description: "Pitch deck design for a fintech infrastructure platform",
    industry: "Fintech",
    tags: ["Pitch Deck"],
    gradient: "from-indigo-500 via-blue-800 to-black",
  },
  {
    slug: "nexora",
    title: "Nexora",
    description: "UX/UI design for a DeFi analytics dashboard",
    industry: "Web 3.0",
    tags: ["Web 3.0", "UI/UX Design"],
    gradient: "from-violet-500 via-purple-800 to-black",
  },
  {
    slug: "stockgate",
    title: "StockGate",
    description: "Fintech branding for a crypto investment platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Branding", "Graphic Design"],
    gradient: "from-emerald-500 via-green-800 to-black",
  },
  {
    slug: "piifund",
    title: "Piifund",
    description: "Web app design for a digital banking platform",
    industry: "Fintech",
    tags: ["UI/UX Design", "Website Design"],
    gradient: "from-sky-500 via-blue-800 to-black",
  },
  {
    slug: "healium",
    title: "Healium",
    description: "Website Design for a Digital Pharmacy",
    industry: "Healthcare",
    tags: ["Healthcare", "Website Design"],
    gradient: "from-green-400 via-emerald-700 to-slate-950",
  },
  {
    slug: "mediflow",
    title: "MediFlow",
    description: "Mobile App and Dashboard Design for a Healthcare Platform",
    industry: "Healthcare",
    tags: ["Healthcare", "Mobile Design"],
    gradient: "from-cyan-400 via-teal-700 to-slate-950",
  },
  {
    slug: "lumera",
    title: "Lumera",
    description: "UI/UX design for an AI-powered mental wellness platform",
    industry: "Healthcare",
    tags: ["Healthcare", "AI"],
    gradient: "from-pink-400 via-fuchsia-700 to-slate-950",
  },
  {
    slug: "cognify",
    title: "Cognify",
    description: "Web app design for an AI-powered cognitive health platform",
    industry: "Healthcare",
    tags: ["Healthcare", "AI"],
    gradient: "from-blue-400 via-indigo-700 to-slate-950",
  },
  {
    slug: "braix",
    title: "BRAIX",
    description: "Website Design for a HealthTech Product",
    industry: "Healthcare",
    tags: ["Healthcare", "Website Design"],
    gradient: "from-orange-400 via-red-700 to-slate-950",
  },
  {
    slug: "cinex",
    title: "Cinex",
    description: "Healthcare dashboard design for faster patient review and clinical decision-making.",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX Design"],
    gradient: "from-teal-400 via-cyan-800 to-black",
  },
  {
    slug: "luma",
    title: "Luma",
    description: "Mobile App Design for a Wellness & Supplement Platform",
    industry: "Healthcare",
    tags: ["Healthcare", "Mobile Design"],
    gradient: "from-amber-300 via-orange-600 to-stone-950",
  },
  {
    slug: "sellution",
    title: "Sellution",
    description: "Dashboard design for a healthcare monitoring platform",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX Design"],
    gradient: "from-lime-400 via-green-700 to-black",
  },
  {
    slug: "moveon",
    title: "MoveOn",
    description: "Brand identity design for a fitness and habit-building app",
    industry: "Healthcare",
    tags: ["Branding", "Fitness"],
    gradient: "from-red-400 via-rose-700 to-black",
  },
  {
    slug: "rydeon",
    title: "Rydeon",
    description: "Mobile app design for a cycling activity tracker",
    industry: "Healthcare",
    tags: ["Mobile Design"],
    gradient: "from-yellow-400 via-amber-700 to-black",
  },
  {
    slug: "velox",
    title: "Velox",
    description: "Web app design for an airline booking platform.",
    industry: "SaaS",
    tags: ["UI/UX Design"],
    gradient: "from-sky-400 via-blue-700 to-black",
  },
  {
    slug: "auralis",
    title: "Auralis",
    description: "Mobile app and admin panel design for an AI analytics platform.",
    industry: "AI",
    tags: ["AI", "UI/UX Design"],
    gradient: "from-violet-400 via-purple-700 to-black",
  },
  {
    slug: "loca-travel",
    title: "Loca Travel",
    description: "Brand identity for a travel discovery and booking platform.",
    industry: "SaaS",
    tags: ["Branding"],
    gradient: "from-cyan-400 via-teal-700 to-black",
  },
  {
    slug: "nonarcissai",
    title: "NoNarcissAI",
    description: "Mobile app redesign for an AI relationship awareness platform.",
    industry: "AI",
    tags: ["Redesign", "AI"],
    gradient: "from-fuchsia-400 via-pink-700 to-black",
  },
  {
    slug: "flowfunds",
    title: "FlowFunds",
    description: "A complete digital ecosystem design for a banking platform.",
    industry: "Fintech",
    tags: ["Fintech", "UI/UX Design"],
    gradient: "from-emerald-400 via-green-800 to-black",
  },
  {
    slug: "reforge",
    title: "Reforge",
    description: "Mobile app & admin panel design for a gamified fitness platform.",
    industry: "Healthcare",
    tags: ["Mobile Design"],
    gradient: "from-orange-400 via-red-700 to-black",
  },
  {
    slug: "blockdb",
    title: "BlockDB",
    description: "B2B website redesign for a DeFi data platform.",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Website Redesign"],
    gradient: "from-indigo-400 via-violet-800 to-black",
  },
  {
    slug: "netget",
    title: "NetGet",
    description: "Website redesign for the marketplace.",
    industry: "SaaS",
    tags: ["Website Redesign"],
    gradient: "from-blue-400 via-slate-700 to-black",
  },
  {
    slug: "cray",
    title: "Cray",
    description: "UI/UX design for a dating platform",
    industry: "SaaS",
    tags: ["UI/UX Design"],
    gradient: "from-rose-400 via-pink-700 to-black",
  },
  {
    slug: "ohrbit",
    title: "Ohrbit",
    description: "UI/UX for a spiritual learning platform",
    industry: "SaaS",
    tags: ["UI/UX Design"],
    gradient: "from-purple-400 via-indigo-700 to-black",
  },
  {
    slug: "senzo",
    title: "Senzo",
    description: "Branding for a Web3 Fintech platform",
    industry: "Web 3.0",
    tags: ["Branding", "Web 3.0"],
    gradient: "from-amber-400 via-yellow-700 to-black",
  },
  {
    slug: "born-to-build",
    title: "Born to Build",
    description: "Branding and UI/UX for a Web3 platform",
    industry: "Web 3.0",
    tags: ["Branding", "UI/UX Design"],
    gradient: "from-lime-400 via-green-700 to-black",
  },
  {
    slug: "hrworkcycles",
    title: "HRWorkCycles",
    description: "HR Platform UI/UX Design and Branding",
    industry: "HR tech",
    tags: ["HR tech", "UI/UX Design"],
    gradient: "from-sky-400 via-blue-700 to-black",
  },
  {
    slug: "ping",
    title: "Ping",
    description: "Branding for Insurtech platform",
    industry: "Fintech",
    tags: ["Branding"],
    gradient: "from-teal-400 via-cyan-700 to-black",
  },
  {
    slug: "paypossible",
    title: "PayPossible",
    description: "PayPossible Fintech Website Redesign",
    industry: "Fintech",
    tags: ["Fintech", "Website Redesign"],
    gradient: "from-green-400 via-emerald-700 to-black",
  },
  {
    slug: "lyynk",
    title: "Lyynk",
    description: "UX/UI Design for Youth Mental Health App",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX Design"],
    gradient: "from-pink-400 via-rose-700 to-black",
  },
  {
    slug: "guestwise",
    title: "Guestwise",
    description: "Hospitality SaaS UI/UX Design Case",
    industry: "SaaS",
    tags: ["SaaS", "UI/UX Design"],
    gradient: "from-orange-400 via-amber-700 to-black",
  },
  {
    slug: "hai-cora",
    title: "Hai Cora",
    description: "Brand Identity for Emotion-Understanding AI",
    industry: "AI",
    tags: ["AI", "Branding"],
    gradient: "from-fuchsia-400 via-purple-700 to-black",
  },
  {
    slug: "kes-soft",
    title: "Kes Soft",
    description: "Kessoft Website Redesign by RZQ",
    industry: "SaaS",
    tags: ["Website Redesign"],
    gradient: "from-slate-400 via-zinc-700 to-black",
  },
  {
    slug: "advisorworld",
    title: "Advisorworld",
    description: "Website redesign and development for Fintech platform",
    industry: "Fintech",
    tags: ["Fintech", "Web Development"],
    gradient: "from-blue-400 via-indigo-700 to-black",
  },
  {
    slug: "galaxy",
    title: "Galaxy",
    description: "Brand Identity & Website Design for DeFi Platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Website Design", "Web Development"],
    gradient: "from-violet-400 via-purple-800 to-black",
  },
  {
    slug: "altflow",
    title: "Altflow",
    description: "UI/UX Design for AI Content Creation Tool",
    industry: "AI",
    tags: ["UI/UX Design", "MVP"],
    gradient: "from-pink-400 via-fuchsia-700 to-black",
  },
  {
    slug: "marketspotter",
    title: "MarketSpotter",
    description: "Platform Design for Trading Analysis Software",
    industry: "Web 3.0",
    tags: ["Web 3.0", "UI/UX Design"],
    gradient: "from-emerald-400 via-teal-700 to-black",
  },
  {
    slug: "smoothline",
    title: "Smoothline",
    description: "Website Design for Medical Aesthetics Clinic",
    industry: "Healthcare",
    tags: ["Healthcare", "Website Design"],
    gradient: "from-rose-300 via-pink-600 to-slate-950",
  },
  {
    slug: "evalence",
    title: "Evalence",
    description: "Smart branding for a greener tomorrow",
    industry: "SaaS",
    tags: ["Branding"],
    gradient: "from-lime-400 via-green-700 to-black",
  },
  {
    slug: "astra",
    title: "Astra",
    description: "Website Design for Web3 Compliance Platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Website Design"],
    gradient: "from-indigo-400 via-blue-800 to-black",
  },
  {
    slug: "world-delete",
    title: "World Delete",
    description: "Website Redesign for Privacy Protection Platform",
    industry: "Cybersecurity",
    tags: ["Website Redesign"],
    gradient: "from-zinc-400 via-neutral-700 to-black",
  },
  {
    slug: "gt-protocol",
    title: "GT Protocol",
    description: "Branding & Web App Design for DeFi AI Assistant",
    industry: "Web 3.0",
    tags: ["Web 3.0", "AI"],
    metric: "$1.5 M",
    gradient: "from-purple-400 via-violet-800 to-black",
  },
  {
    slug: "documotor",
    title: "Documotor",
    description: "UI/UX Design & Branding for Automation Platform",
    industry: "SaaS",
    tags: ["UI/UX Design", "Branding"],
    gradient: "from-sky-400 via-cyan-700 to-black",
  },
  {
    slug: "unlockscalendar",
    title: "Unlockscalendar",
    description: "UI/UX Design for Crypto Research Platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "UI/UX Design"],
    gradient: "from-amber-400 via-orange-700 to-black",
  },
  {
    slug: "flair",
    title: "Flair",
    description: "UI/UX Design for AI Workflow Automation Platform",
    industry: "AI",
    tags: ["AI", "UI/UX Design"],
    gradient: "from-violet-500 via-purple-700 to-fuchsia-900",
  },
  {
    slug: "sinta",
    title: "Sinta",
    description: "MVP Design for HR Recruitment Platform",
    industry: "HR tech",
    tags: ["HR tech", "MVP"],
    gradient: "from-blue-400 via-indigo-700 to-black",
  },
  {
    slug: "mined",
    title: "Mine'd",
    description: "UI/UX Design for Wellness & Mental Health App",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX Design"],
    gradient: "from-teal-400 via-emerald-700 to-black",
  },
  {
    slug: "xpence",
    title: "Xpence",
    description: "UI/UX Design for FinTech Expense Solution",
    industry: "Fintech",
    tags: ["Fintech", "UI/UX Design"],
    gradient: "from-green-400 via-lime-700 to-black",
  },
  {
    slug: "gigzi",
    title: "Gigzi",
    description:
      "Innovative financial system that provides users with blockchain security and wealth management.",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Fintech"],
    gradient: "from-yellow-400 via-amber-700 to-black",
  },
  {
    slug: "klasha",
    title: "Klasha",
    description: "UI/UX Design for Cross-Border Payment Solution",
    industry: "Fintech",
    tags: ["Fintech", "UI/UX Design"],
    gradient: "from-orange-400 via-red-700 to-black",
  },
  {
    slug: "sageexpress",
    title: "SageExpress",
    description: "UX/UI Design for AI-Powered Data Analytics Tool",
    industry: "AI",
    tags: ["AI", "UI/UX Design"],
    gradient: "from-cyan-400 via-blue-700 to-black",
  },
  {
    slug: "players-health",
    title: "Player's Health",
    description: "Web & Mobile Design for Healthcare Fintech Solution",
    industry: "Healthcare",
    tags: ["Healthcare", "UI/UX Design", "MVP"],
    gradient: "from-emerald-400 via-teal-700 to-black",
  },
  {
    slug: "gradwork",
    title: "Gradwork",
    description: "Platform Design for Graduate Employment Solution",
    industry: "SaaS",
    tags: ["SaaS", "UI/UX Design", "Web Development"],
    gradient: "from-indigo-400 via-blue-700 to-black",
  },
  {
    slug: "metricly",
    title: "Metricly",
    description: "Cloud cost platform that offers instruments to help with management of AWS costs.",
    industry: "SaaS",
    tags: ["UI/UX Design"],
    gradient: "from-sky-400 via-slate-700 to-black",
  },
  {
    slug: "qtalent",
    title: "QTalent",
    description: "UI/UX Design for HR Recruitment SaaS Platform",
    industry: "HR tech",
    tags: ["UI/UX Design"],
    gradient: "from-violet-400 via-indigo-700 to-black",
  },
  {
    slug: "wordpress-products",
    title: "Wordpress",
    description: "Website Design & Branding for WordPress Products",
    industry: "SaaS",
    tags: ["Website Design", "Branding"],
    gradient: "from-blue-500 via-sky-700 to-slate-950",
  },
  {
    slug: "infinity",
    title: "Infinity",
    description: "UI/UX Design for Web3 DeFi Mobile Application",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Mobile Design"],
    gradient: "from-purple-400 via-fuchsia-700 to-black",
  },
  {
    slug: "voxe",
    title: "VOXE",
    description: "UI/UX & MVP Design for Web3 Social Media Platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "MVP"],
    gradient: "from-pink-400 via-rose-700 to-black",
  },
  {
    slug: "xblock",
    title: "Xblock",
    description: "Platform Redesign for Web 3.0 Product",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Redesign"],
    gradient: "from-zinc-400 via-neutral-700 to-black",
  },
  {
    slug: "minty-swap",
    title: "Minty Swap",
    description: "Web Design & Development for NFT Minting Platform",
    industry: "Web 3.0",
    tags: ["Web 3.0", "Web Development"],
    gradient: "from-lime-400 via-emerald-700 to-black",
  },
];

export const cases: CaseStudy[] = caseStudiesRaw.map((item, index) => ({
  ...item,
  image: resolveCaseImage(item, index),
}));

export const featuredCases = cases.filter((c) => c.featured);
export const carouselCases = cases.filter((c) =>
  ["myso", "mojo-cx", "enzyme"].includes(c.slug),
);

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
