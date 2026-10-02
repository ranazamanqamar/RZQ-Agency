export type PricingPlan = {
  title: string;
  description: string;
  features: string[];
  cta: string;
};

export const designPlans: PricingPlan[] = [
  {
    title: "Part-Time Designer",
    description: "Best for early validation and focused design tasks",
    features: [
      "Dedicated designer at half-time capacity",
      "Head of Design oversight",
      "Support for ongoing product tasks",
      "Unlimited tasks within monthly hours",
      "3-day free trial included",
      "Pause or cancel anytime",
    ],
    cta: "Start now",
  },
  {
    title: "Full-Time Designer",
    description: "For growing teams needing consistent delivery",
    features: [
      "Dedicated designer at full capacity",
      "Head of Design oversight",
      "Unlimited tasks within monthly hours",
      "Faster turnaround for complex tasks",
      "3-day free trial included",
      "Pause or cancel anytime",
    ],
    cta: "Start now",
  },
  {
    title: "Design Team (2+ Experts)",
    description: "For companies that scale fast or build complex products",
    features: [
      "Two or more dedicated designers",
      "End-to-end design ownership",
      "Head of Design oversight and direction",
      "Parallel delivery across workstreams",
      "3-day free trial included",
      "Pause or cancel anytime",
    ],
    cta: "Start now",
  },
];

export const developerPlans: PricingPlan[] = [
  {
    title: "Full-Time Developer",
    description: "Great option for ongoing feature work and technical improvement",
    features: [
      "Dedicated developer at full capacity",
      "Senior engineering lead oversight",
      "Daily support for product development",
      "Unlimited tasks within monthly hours",
      "Smooth integration with your tech stack",
      "Pause or cancel anytime",
    ],
    cta: "Book a Call",
  },
  {
    title: "2 Full-Time Developers",
    description: "Best for products requiring steady development and parallel task delivery",
    features: [
      "2 full-time dedicated developers",
      "Senior engineering oversight",
      "Parallel task execution",
      "Stable delivery for large features",
      "Flexible technical coverage",
      "Pause or cancel anytime",
    ],
    cta: "Book a Call",
  },
  {
    title: "Dev Unit (2+ Developers)",
    description: "For companies that scale fast or build complex products",
    features: [
      "2+ dedicated engineers",
      "End-to-end ownership",
      "Architecture-level oversight",
      "Parallel product execution",
      "Flexible team capacity",
      "Pause or cancel anytime",
    ],
    cta: "Book a Call",
  },
];

export const pricingFaqs = [
  {
    q: "What services do you provide?",
    a: "RZQ is a full-cycle design and development partner. We help businesses produce and launch high-performing digital products from first concept to post-launch growth. What we deliver: Product strategy (Discovery, proof of concept, UX audit, UI concept, pitch deck), Design (UI/UX, branding, website design, mobile design, graphic design), Development (Web development, mobile development, landing page, Webflow development), Redesign, and Post-launch optimization and support. Our cross-functional team has already delivered 250+ successful projects across SaaS, Web3, Fintech, Healthtech, and others.",
  },
  {
    q: "What is the minimum project budget?",
    a: "Our typical projects start from $6,000. But we always take into account the scope, complexity, and team composition your project requires. For smaller needs (UX audits, branding, or MVP concept design), we also offer lightweight packages so small businesses can test ideas without a significant investment before scaling up.",
  },
  {
    q: "What companies and industries do you serve?",
    a: "We partner with SMEs and global enterprises that need to build, scale, or modernize their digital products across SaaS, FinTech, AI and Automation, Web3, HealthTech, GreenTech, and EdTech. Over the past 9+ years, we’ve successfully delivered 250+ projects across 30+ countries.",
  },
  {
    q: "How do you estimate project costs?",
    a: "Each project starts with a discovery phase where we analyze your brief and goals, define deliverables and timelines, and select the right team composition. You’ll receive a detailed estimate covering tasks per phase, hours and timelines, team structure, cost, and optional add-ons.",
  },
  {
    q: "How quickly can you start after approval?",
    a: "We can usually start within 3–5 business days. Once we sign an agreement, the RZQ team assigns a project manager and core team, sets up your workspace, and runs an alignment session to finalize scope and next steps.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. RZQ provides comprehensive post-launch support including UX optimization, performance monitoring, feature updates and scaling, and technical maintenance — helping clients reduce churn by 35% and sustain growth long after launch.",
  },
];

export const comparisonRows: { feature: string; freelancers: boolean; vendor: boolean }[] = [
  { feature: "Senior-level expertise", freelancers: false, vendor: true },
  { feature: "Specialized market knowledge", freelancers: false, vendor: true },
  { feature: "Clear scope, timeline & cost before start", freelancers: false, vendor: true },
  { feature: "Fast project start (3–5 days)", freelancers: true, vendor: false },
  { feature: "3-day free trial", freelancers: false, vendor: false },
  { feature: "Direct and fast communication", freelancers: true, vendor: false },
  { feature: "Dedicated project manager", freelancers: false, vendor: true },
  { feature: "Easy to scale team capacity", freelancers: false, vendor: true },
  { feature: "Minimal client involvement required", freelancers: false, vendor: true },
  { feature: "End-to-end design & engineering", freelancers: false, vendor: false },
  { feature: "Adherence to accessibility and compliance rules", freelancers: false, vendor: true },
  { feature: "Support for integrations and APIs", freelancers: true, vendor: false },
  { feature: "Post-launch support", freelancers: false, vendor: true },
];

export const trustReasons = [
  {
    title: "Proven results",
    body: "9+ years on the market and 250+ successful digital products with measurable improvements in adoption, retention, and revenue.",
  },
  {
    title: "Award-winning excellence",
    body: "Recognized as a Clutch Top Design Company 2025 and a multiple-time Behance award winner.",
  },
  {
    title: "Real outcomes",
    body: "Our services help clients achieve +170% engagement, 4.6× revenue growth, and up to 37% churn reduction.",
  },
  {
    title: "Senior-level specialists",
    body: "You work directly with experienced specialists and get cleaner execution, faster delivery, and fewer revisions.",
  },
  {
    title: "Deep industry expertise",
    body: "With domain knowledge across AI, SaaS, FinTech, Healthcare, and Web3, we tailor solutions to each industry's and users’ demands.",
  },
  {
    title: "Full-cycle delivery",
    body: "Our integrated design and development process speeds up product delivery by 40% and keeps your roadmap aligned.",
  },
  {
    title: "Trusted by companies that scale",
    body: "Our design solutions helped clients raise over $1B in total funding, including three unicorn-stage teams.",
  },
];
