export type IndustryPoint = { title: string };

export type IndustryStat = {
  value: string;
  label: string;
  detail: string;
};

export type IndustryStory = {
  slug: string;
  tags: string[];
  results: string[];
};

export type IndustryProduct = {
  title: string;
  items: string[];
};

export type IndustryBenefit = {
  title: string;
  detail: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  headline: string;
  body: string;
  focusTitle: string;
  points: IndustryPoint[];
  stats: IndustryStat[];
  storiesTitle: string;
  stories: IndustryStory[];
  proofTitle: string;
  productsTitle: string;
  products: IndustryProduct[];
  benefitsTitle: string;
  benefits: IndustryBenefit[];
  faqs: IndustryFaq[];
};

export const industries: Industry[] = [
  {
    slug: "web3",
    title: "Web 3, Blockchain",
    description: "Crypto, DeFi, DEX, CEX, NFT",
    tags: ["dApps", "DeFi", "Play2Earn", "IoT"],
    headline: "Web3 Design Services",
    body: "RZQ designs Web3 product experiences that earn trust, hold users, and support long-term adoption.",
    focusTitle: "RZQ delivers where Web3 products need it most",
    points: [
      { title: "Onboarding that lowers early drop-off before a wallet is connected" },
      { title: "Security-first screens for transactions that cannot be reversed" },
      { title: "Simpler flows for mechanics that are hard to explain" },
      { title: "Design systems that can grow across more than one chain" },
      { title: "Brand and community treated as proof, not decoration" },
    ],
    stats: [
      {
        value: "48%",
        label: "Increase in qualified inquiries",
        detail: "BlockDB’s site was rewritten for the buyers it actually serves, so fewer calls were spent on the wrong leads.",
      },
      {
        value: "+31%",
        label: "Feature adoption",
        detail: "Enzyme’s navigation was rebuilt so tools people already had started getting used.",
      },
      {
        value: "70%",
        label: "User retention",
        detail: "MYSO’s product experience was redesigned to keep paying users active.",
      },
    ],
    storiesTitle: "Web3 work that shows the result",
    stories: [
      {
        slug: "enzyme",
        tags: ["UI/UX design", "Branding", "Web development"],
        results: ["+42% conversion rate", "+36% user engagement", "+48% mobile retention", "+31% feature adoption"],
      },
      {
        slug: "gt-protocol",
        tags: ["UI/UX design", "Branding"],
        results: ["2× client base growth", "88% user satisfaction", "+52% community growth", "3.5× engagement"],
      },
      {
        slug: "born-to-build",
        tags: ["UI/UX design", "Branding", "Graphic design"],
        results: ["+67% user engagement", "+30% brand recognition", "+25% mobile conversions", "+85% user satisfaction"],
      },
      {
        slug: "nexora",
        tags: ["UI/UX design", "Branding"],
        results: ["43% faster time to insight", "94% task completion", "32% fewer navigation steps", "89% clearer data"],
      },
    ],
    proofTitle: "RZQ as your Web3 design partner",
    productsTitle: "Web3 and crypto products we can create together",
    products: [
      { title: "DeFi platforms and DEX interfaces", items: ["Wallet connect", "Pool analytics", "Yield dashboard", "Cross-chain swap"] },
      { title: "NFT marketplaces", items: ["Minting flow", "Collection gallery", "Bids and auctions", "Wallet integration"] },
      { title: "Wallets and portfolio trackers", items: ["Multi-chain wallet", "Portfolio dashboard", "Transaction history", "Asset allocation"] },
      { title: "Explorers and analytics", items: ["Transaction lookup", "Wallet analytics", "On-chain charts", "Contract viewer"] },
      { title: "dApps and protocol interfaces", items: ["Connect flow", "Protocol dashboard", "Gas estimate", "Confirmation"] },
      { title: "DAO governance", items: ["Proposal voting", "Treasury", "Member directory", "Delegation"] },
      { title: "Exchanges and trading", items: ["Trading chart", "KYC onboarding", "Deposits", "Order book"] },
      { title: "GameFi interfaces", items: ["In-game wallet", "NFT inventory", "Rewards", "Leaderboard"] },
    ],
    benefitsTitle: "Product design tied to the metric that matters",
    benefits: [
      { title: "Flows built around the business metric", detail: "Each screen is aimed at the number that actually moves the product, whether that is volume, active wallets, or retained users." },
      { title: "Onboarding that does not assume a crypto background", detail: "Wallet connection and confirmation are sequenced so a first-time user can finish them." },
      { title: "Approvals that protect funds", detail: "Confirmation steps sit at the moment of highest risk, so a mistake is harder to make." },
      { title: "A brand that reads as legitimate", detail: "The visual system is built for partners and investors who check credibility before they continue." },
    ],
    faqs: [
      { question: "What does a Web3 design engagement cover?", answer: "Product UI for web and mobile, onboarding, branding, and the marketing site, scoped to the flows that affect trust and retention." },
      { question: "How is crypto UX different?", answer: "Transactions cannot be undone, many users are new to wallets and fees, and trust has to be visible in the interface itself." },
      { question: "Can product UI and branding happen in one project?", answer: "Yes. One team keeps the product, the site, and the identity on the same system." },
      { question: "Which Web3 products has RZQ designed?", answer: "Work includes MYSO Finance, Enzyme, BlockDB, GT Protocol, Nexora, and Born to Build. Covers and results are on this page." },
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    description: "CRM, HR, AI, ERP, Automation tools",
    tags: ["CRM", "HR", "AI", "ERP", "Automation tools"],
    headline: "SaaS Design Services",
    body: "RZQ designs system-first SaaS products for product, engineering, and marketing teams that need an enterprise-grade interface.",
    focusTitle: "RZQ is a partner for SaaS UI and UX",
    points: [
      { title: "Interfaces that can stand up to security and compliance reviews" },
      { title: "Design systems and components that grow with the feature set" },
      { title: "Dense dashboards and multi-tenant screens that stay usable" },
    ],
    stats: [
      {
        value: "20%",
        label: "Reduced bounce rate",
        detail: "The WordPress products site and brand were redesigned, and bounce rate dropped by 20%.",
      },
      {
        value: "3.5×",
        label: "Traffic and engagement",
        detail: "QTalent’s recruitment product was designed as one platform, and traffic and engagement grew 3.5×.",
      },
      {
        value: "+27%",
        label: "Higher conversion rate",
        detail: "Guestwise’s hospitality product was redesigned, and conversion rose by 27%.",
      },
    ],
    storiesTitle: "SaaS work that shows the result",
    stories: [
      {
        slug: "wordpress-products",
        tags: ["UI/UX design", "Branding"],
        results: ["+22% traffic", "2× customer retention", "20% lower bounce rate"],
      },
      {
        slug: "gradwork",
        tags: ["Web app design", "UI/UX design", "Web development"],
        results: ["35% wider customer reach", "Higher engagement", "80% user satisfaction"],
      },
      {
        slug: "guestwise",
        tags: ["UI/UX design", "Website redesign"],
        results: ["+27% conversion", "+52% feature engagement", "+41% faster discovery", "33% lower bounce rate"],
      },
      {
        slug: "sinta",
        tags: ["UI/UX design", "MVP"],
        results: ["One user experience", "A distinct visual system", "Usability kept in front of new features"],
      },
    ],
    proofTitle: "What sets RZQ apart as a SaaS design partner",
    productsTitle: "SaaS products we can create together",
    products: [
      { title: "CRM and sales analytics", items: ["Pipeline", "Customer data", "Sales dashboards", "RevOps"] },
      { title: "AI-powered tools", items: ["Copilots", "Workflow agents", "Data analysis", "Chat"] },
      { title: "Workflow automation", items: ["Process tools", "Integrations", "Ops dashboards"] },
      { title: "Marketing software", items: ["Attribution", "Ad tools", "Journeys", "Scheduling"] },
      { title: "Sites and landing pages", items: ["Product sites", "Landing pages", "Content hubs"] },
      { title: "Onboarding and admin", items: ["First-run", "Admin panels", "Roles", "Billing"] },
      { title: "Collaboration tools", items: ["Tasks", "Live collaboration", "Planning"] },
      { title: "Support platforms", items: ["Tickets", "Live chat", "Help centers", "SLA views"] },
    ],
    benefitsTitle: "How RZQ designs SaaS products and sites that convert",
    benefits: [
      { title: "UX based on how the product is used", detail: "Design starts from where people stall, not from a generic dashboard template." },
      { title: "One experience across web and mobile", detail: "Surfaces stay aligned as the product adds modules, so a user does not relearn the tool." },
      { title: "A site that turns visitors into leads", detail: "Messaging and the path to a demo are rebuilt at the points where people leave." },
      { title: "Patterns matched to the growth model", detail: "Self-serve and sales-led products need different first screens. The work follows how revenue is made." },
    ],
    faqs: [
      { question: "How do you design for new users and power users together?", answer: "The default view stays simple. Depth, saved views, and bulk actions stay available for people who use the product every day." },
      { question: "What changes between product-led and sales-led SaaS?", answer: "Product-led work clears the path to a first value moment. Sales-led work makes capability obvious in a demo." },
      { question: "Can you reduce clutter without removing features?", answer: "Yes. Frequent actions stay in the main flow. Rare ones move to settings or role-based views." },
      { question: "Can the marketing site improve without a product rebuild?", answer: "Yes. Clarity above the fold, proof, and a shorter path to signup change trials before the product is touched." },
    ],
  },
  {
    slug: "ai",
    title: "AI & ML",
    description: "Chatbots, Automation, Predictive Analytics",
    tags: ["AI Marketing", "HR & AI", "Crypto AI", "Education AI"],
    headline: "AI & ML Design Services",
    body: "RZQ designs AI products so the model’s output is understandable, and the next action is obvious.",
    focusTitle: "RZQ delivers where AI products need it most",
    points: [
      { title: "Outputs people can check before they act on them" },
      { title: "Chat and agent flows that stay inside a real task" },
      { title: "Automation that shows what changed, not only that it ran" },
    ],
    stats: [
      {
        value: "Coaching",
        label: "MOJO-CX",
        detail: "AI prompts sit beside the agent in a contact-center product, instead of in a separate tool.",
      },
      {
        value: "Analytics",
        label: "Auralis",
        detail: "The mobile app and admin panel were designed together for an AI analytics product.",
      },
      {
        value: "Health",
        label: "Cognify",
        detail: "A web app for an AI cognitive-health product, built so the result is readable.",
      },
    ],
    storiesTitle: "AI work that shows the result",
    stories: [
      { slug: "mojo-cx", tags: ["AI", "UI/UX design", "SaaS"], results: ["Coaching prompts in the agent workflow", "One product for contact centers"] },
      { slug: "auralis", tags: ["AI", "UI/UX design"], results: ["Mobile app and admin panel as one system", "Analytics a team can act on"] },
      { slug: "cognify", tags: ["Healthcare", "AI"], results: ["A web app for cognitive health", "AI output presented as a clear next step"] },
      { slug: "hai-cora", tags: ["AI", "Branding"], results: ["A brand for an emotion-understanding product", "Identity that matches the interface"] },
    ],
    proofTitle: "RZQ as your AI design partner",
    productsTitle: "AI products we can create together",
    products: [
      { title: "Chat and assistants", items: ["Chat UI", "Suggested actions", "History", "Handoff to a person"] },
      { title: "Agents and automation", items: ["Task runs", "Approvals", "Logs", "Exceptions"] },
      { title: "Analytics and prediction", items: ["Model output", "Confidence", "Charts", "Exports"] },
      { title: "Marketing AI", items: ["Campaign tools", "Content review", "Audience views"] },
      { title: "HR and education AI", items: ["Screening", "Learning paths", "Feedback"] },
      { title: "AI product sites", items: ["Explainers", "Demos", "Trust pages"] },
    ],
    benefitsTitle: "Design that makes the model usable",
    benefits: [
      { title: "A visible reason for the suggestion", detail: "People see why the product recommended something before they accept it." },
      { title: "A human step where the stakes are high", detail: "Review and edit stay in the flow when the output affects a customer or a record." },
      { title: "States for waiting, failure, and empty results", detail: "The interface explains what the system is doing instead of leaving a spinner." },
      { title: "A brand that does not overclaim", detail: "The visual system matches what the product can actually do." },
    ],
    faqs: [
      { question: "Do you design the model or the product around it?", answer: "RZQ designs the product: screens, flows, and the brand. The model stays with your team." },
      { question: "Can chat and a traditional app share one design system?", answer: "Yes. Shared components keep the assistant and the rest of the product looking like one tool." },
      { question: "How do you handle low confidence?", answer: "The UI shows uncertainty and offers a next step, instead of presenting every answer as final." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat Detection, IAM, Compliance",
    tags: ["Threat Detection", "IAM", "Compliance"],
    headline: "Cybersecurity Design Services",
    body: "RZQ designs security products so operators and buyers can see risk, status, and the next action without decoding the screen.",
    focusTitle: "RZQ delivers where security products need it most",
    points: [
      { title: "Threat views that rank what needs attention" },
      { title: "Identity and access flows that stay precise" },
      { title: "Compliance evidence a buyer can follow" },
    ],
    stats: [
      {
        value: "VPN",
        label: "Tunnelo",
        detail: "Brand identity for a VPN product, built to read as serious rather than generic.",
      },
      {
        value: "Pitch",
        label: "Altis",
        detail: "Pitch deck and branding for an AI cybersecurity platform.",
      },
      {
        value: "Privacy",
        label: "World Delete",
        detail: "Website redesign for a privacy protection platform.",
      },
    ],
    storiesTitle: "Security work that shows the result",
    stories: [
      { slug: "tunnelo", tags: ["Branding"], results: ["Identity for a VPN product", "A system that signals protection"] },
      { slug: "altis", tags: ["Pitch deck", "Branding"], results: ["Deck and brand for an AI security platform", "A story buyers can follow"] },
      { slug: "world-delete", tags: ["Website redesign"], results: ["A clearer privacy site", "The offer explained before the scroll"] },
    ],
    proofTitle: "RZQ as your cybersecurity design partner",
    productsTitle: "Security products we can create together",
    products: [
      { title: "Threat detection", items: ["Alert queues", "Severity", "Incident detail", "Response"] },
      { title: "Identity and access", items: ["Login", "Roles", "Approvals", "Audit"] },
      { title: "Compliance", items: ["Control status", "Evidence", "Reviews"] },
      { title: "VPN and privacy", items: ["Connection status", "Locations", "Account"] },
      { title: "Security sites", items: ["Product pages", "Trust centers", "Decks"] },
    ],
    benefitsTitle: "Calm screens for high-stakes work",
    benefits: [
      { title: "Priority before density", detail: "The first view shows what is urgent. Detail opens on demand." },
      { title: "Language operators already use", detail: "Labels match the job, so a new UI does not force a new vocabulary." },
      { title: "Proof for the buying team", detail: "Security, status, and scope are visible to the people who have to approve the product." },
      { title: "A brand that looks established", detail: "The identity supports trust before a demo starts." },
    ],
    faqs: [
      { question: "Can you design for both analysts and buyers?", answer: "Yes. The product stays dense enough for operators, and the site and deck explain the same product to a buying team." },
      { question: "Do you handle sensitive data in the design files?", answer: "We work from anonymized flows and sample states. Production data stays in your environment." },
      { question: "Can branding and the console share one system?", answer: "Yes. The site, deck, and product use one set of components." },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech",
    description: "Banking, Digital Payments, Exchanges",
    tags: ["Banking", "Trading", "Exchanges", "IoT"],
    headline: "Fintech Design Services",
    body: "RZQ designs banking, payments, and exchange products for moments when a person is deciding whether to trust the product with money.",
    focusTitle: "RZQ delivers where fintech products need it most",
    points: [
      { title: "Balances, fees, and status shown before a commitment" },
      { title: "Payments and transfers with a clear confirmation" },
      { title: "Onboarding that collects what compliance needs without losing the user" },
    ],
    stats: [
      {
        value: "Banking",
        label: "FlowFunds",
        detail: "A digital ecosystem for a banking platform, from the product to the surrounding screens.",
      },
      {
        value: "Payments",
        label: "Klasha",
        detail: "UI and UX for a cross-border payment product.",
      },
      {
        value: "Expenses",
        label: "Xpence",
        detail: "UI and UX for a fintech expense product.",
      },
    ],
    storiesTitle: "Fintech work that shows the result",
    stories: [
      { slug: "flowfunds", tags: ["Fintech", "UI/UX design"], results: ["A full banking ecosystem", "Screens that keep money movement legible"] },
      { slug: "klasha", tags: ["Fintech", "UI/UX design"], results: ["Cross-border payments made readable", "A flow from amount to confirmation"] },
      { slug: "xpence", tags: ["Fintech", "UI/UX design"], results: ["Expense flows a finance team can audit", "Status visible at each step"] },
      { slug: "paypossible", tags: ["Fintech", "Website redesign"], results: ["A redesigned fintech site", "The offer clear before the form"] },
    ],
    proofTitle: "RZQ as your fintech design partner",
    productsTitle: "Fintech products we can create together",
    products: [
      { title: "Banking", items: ["Accounts", "Cards", "Transfers", "Statements"] },
      { title: "Payments", items: ["Checkout", "Payouts", "Cross-border", "Receipts"] },
      { title: "Exchanges", items: ["Markets", "Orders", "Wallets", "History"] },
      { title: "Lending", items: ["Applications", "Offers", "Repayment"] },
      { title: "Expense tools", items: ["Capture", "Approval", "Reports"] },
      { title: "Fintech sites and decks", items: ["Product sites", "Onboarding", "Investor decks"] },
    ],
    benefitsTitle: "Design for high-stakes decisions",
    benefits: [
      { title: "Numbers that can be checked", detail: "Amounts, fees, and timing sit where the decision happens." },
      { title: "Confirmation before money moves", detail: "The last step restates what will happen." },
      { title: "Compliance without a dead end", detail: "KYC and review states explain the wait and the next action." },
      { title: "A brand that feels established", detail: "The identity supports trust for customers and partners." },
    ],
    faqs: [
      { question: "Do you design regulated flows?", answer: "We design the screens and states around KYC, review, and failure. Legal rules stay with your counsel." },
      { question: "Can the product and the marketing site share a system?", answer: "Yes. Accounts, payments, and the public site use one visual system." },
      { question: "Which fintech products are in the work?", answer: "FlowFunds, Klasha, Xpence, and PayPossible are on this page, with more in the works index." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    description: "Mental health, Insurance, Fitness",
    tags: ["Mental health", "Wellness", "Insurance", "Fitness"],
    headline: "Healthcare & Wellness Design",
    body: "RZQ designs health products for patients, clinicians, and insurers who need the next step to be obvious and the language to be careful.",
    focusTitle: "RZQ delivers where health products need it most",
    points: [
      { title: "Patient flows that explain the step without clinical jargon" },
      { title: "Clinician views that keep the record readable" },
      { title: "Insurance and wellness paths that state coverage and status" },
    ],
    stats: [
      {
        value: "Tracking",
        label: "Health HQ",
        detail: "Mobile app redesign for a children’s health tracking product.",
      },
      {
        value: "Care",
        label: "Piko Health",
        detail: "Brand, landing page, and web app for a personalized healthcare platform.",
      },
      {
        value: "Pharmacy",
        label: "Healium",
        detail: "Website design for a digital pharmacy.",
      },
    ],
    storiesTitle: "Healthcare work that shows the result",
    stories: [
      { slug: "health-hq", tags: ["Healthcare", "UI/UX design"], results: ["A tracking app rebuilt for parents", "The child’s status readable at a glance"] },
      { slug: "piko-health", tags: ["Healthcare", "Web app"], results: ["Brand, landing page, and product together", "A personalized care path"] },
      { slug: "healium", tags: ["Healthcare", "Website design"], results: ["A digital pharmacy site", "The service explained before signup"] },
      { slug: "imed", tags: ["Healthcare", "Pitch deck"], results: ["A deck for a national e-health ecosystem", "The product story in the meeting order"] },
    ],
    proofTitle: "RZQ as your healthcare design partner",
    productsTitle: "Health products we can create together",
    products: [
      { title: "Mental health", items: ["Check-ins", "Programs", "Messaging", "Progress"] },
      { title: "Clinical apps", items: ["Records", "Appointments", "Results"] },
      { title: "Insurance", items: ["Coverage", "Claims", "Benefits"] },
      { title: "Fitness and wellness", items: ["Plans", "Tracking", "Habits"] },
      { title: "Pharmacy", items: ["Catalog", "Orders", "Refills"] },
      { title: "Health sites and decks", items: ["Product sites", "Patient explainers", "Decks"] },
    ],
    benefitsTitle: "Careful design for care products",
    benefits: [
      { title: "Plain language at the decision", detail: "Patients see what happens next without a wall of terms." },
      { title: "Status that reduces anxiety", detail: "Waiting, review, and results each have a clear state." },
      { title: "Separate views for patients and staff", detail: "The same system serves a person seeking care and a person delivering it." },
      { title: "A brand that feels careful", detail: "The identity supports trust for a category where tone matters." },
    ],
    faqs: [
      { question: "How do you treat patient information in design?", answer: "We design from sample records and anonymized flows. Real patient data stays with you." },
      { question: "Can one system cover app, site, and deck?", answer: "Yes. Piko Health and IMed are examples of product, site, and deck work in this category." },
      { question: "Do you design for clinicians and patients in one product?", answer: "Yes, with different density. Patients get the next step. Staff get the record." },
    ],
  },
  {
    slug: "hr-tech",
    title: "HR tech",
    description: "Recruiting, L&D, Workforce Analytics",
    tags: ["Recruiting", "L&D", "Workforce Analytics"],
    headline: "HR Tech Design Services",
    body: "RZQ designs recruiting, learning, and workforce products for HR teams and candidates who need a fast, clear path.",
    focusTitle: "RZQ delivers where HR products need it most",
    points: [
      { title: "Candidate flows that finish without a recruiter on the call" },
      { title: "Recruiter tools that keep pipeline and status in one view" },
      { title: "Learning and analytics that show progress, not only activity" },
    ],
    stats: [
      {
        value: "3.5×",
        label: "Traffic and engagement",
        detail: "QTalent’s recruitment platform grew traffic and engagement 3.5× after the product was designed as one system.",
      },
      {
        value: "MVP",
        label: "Sinta",
        detail: "An HR recruitment MVP with one experience for the people using it.",
      },
      {
        value: "Platform",
        label: "HRWorkCycles",
        detail: "UI, UX, and branding for an HR platform.",
      },
    ],
    storiesTitle: "HR work that shows the result",
    stories: [
      { slug: "qtalent", tags: ["UI/UX design"], results: ["A recruitment platform treated as one product", "3.5× traffic and engagement"] },
      { slug: "sinta", tags: ["HR tech", "MVP"], results: ["An MVP for recruitment", "Usability ahead of extra features"] },
      { slug: "hrworkcycles", tags: ["HR tech", "UI/UX design"], results: ["Product UI and brand together", "A platform HR teams can run"] },
    ],
    proofTitle: "RZQ as your HR tech design partner",
    productsTitle: "HR products we can create together",
    products: [
      { title: "Recruiting", items: ["Jobs", "Applications", "Pipeline", "Scheduling"] },
      { title: "Candidate experience", items: ["Apply flow", "Status", "Offers"] },
      { title: "Learning", items: ["Courses", "Paths", "Progress"] },
      { title: "Workforce analytics", items: ["Headcount", "Retention", "Reports"] },
      { title: "HR admin", items: ["Roles", "Records", "Approvals"] },
      { title: "HR sites", items: ["Product sites", "Career pages", "Decks"] },
    ],
    benefitsTitle: "Design for both sides of hiring",
    benefits: [
      { title: "A candidate path that finishes", detail: "Apply, status, and offer stay short enough to complete." },
      { title: "A recruiter view of the pipeline", detail: "Stage, owner, and next action sit on one screen." },
      { title: "Learning that shows progress", detail: "Completion and skill are visible, not only time spent." },
      { title: "One system for product and brand", detail: "The platform and the site look like the same company." },
    ],
    faqs: [
      { question: "Can you design for candidates and recruiters?", answer: "Yes. Candidates get a short path. Recruiters get the pipeline." },
      { question: "Do you start from an MVP?", answer: "Yes. Sinta is an MVP. QTalent and HRWorkCycles are fuller platforms." },
      { question: "Can analytics live in the same product?", answer: "Yes. Reports sit beside the workflow instead of in a separate tool." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
