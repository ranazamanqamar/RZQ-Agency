export type ServiceOffer = { title: string; detail: string };
export type ServiceStat = { value: string; label: string; detail: string };
export type ServiceStage = { title: string; points: string[] };
export type ServiceOutcome = { title: string; detail: string };
export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  title: string;
  category: "branding" | "design" | "development" | "solution";
  headline: string;
  description: string;
  quote: { text: string; name: string; role: string };
  offers: ServiceOffer[];
  cases: string[];
  stats: ServiceStat[];
  stages: ServiceStage[];
  outcomes: ServiceOutcome[];
  faqs: ServiceFaq[];
};

const quotes = {
  ola: {
    text: "Throughout the entire project all I saw was sheer will to keep pushing forward and adapting to whatever the next request was. Terrific job and we couldn't have done it without you.",
    name: "Ola Olusoga",
    role: "Vice President at WordPress",
  },
  aetienne: {
    text: "Their expertise and guidance were instrumental. They demonstrated their commitment to creating a product that resonated with our target audience, which led to improved user satisfaction.",
    name: "Aetienne Sardon",
    role: "Founder, MYSO Finance",
  },
  jimmy: {
    text: "I was impressed with the high levels of detail and polish for all the features.",
    name: "Jimmy Hosang",
    role: "Founder & CEO, MOJO-CX",
  },
  esme: {
    text: "Their UI/UX design skills were very impressive. Modern, creative, and best in class plus they were intuitive and got what we wanted without any hand-holding and minimal direction.",
    name: "Esme Guevara",
    role: "CMO & Head of Product, QTalent",
  },
  mohamed: {
    text: "The process was something to be admired, they have a great idea of how to turn an idea into a visual product. They would also immediately make changes to any improvements we mentioned.",
    name: "Mohamed Shegow",
    role: "CEO, Sinta",
  },
  kristen: {
    text: "They understood our idea and gave us more feedback than expected. They did more than we asked them to do, which was excellent. RZQ produces excellent quality work.",
    name: "Kristen Cheng",
    role: "Founder & CEO, BehindTitles",
  },
  kirill: {
    text: "We had a feeling that RZQ is not just a contract outsourcing team but part of our startup company. We had super close communication.",
    name: "Kirill Onasenko",
    role: "CEO, VOXE",
  },
  stephane: {
    text: "Working with RZQ is really smooth in terms of communication and workflow.",
    name: "Stephane Heip",
    role: "CMO, Enzyme",
  },
} as const;

const raised = {
  value: "$1B+",
  label: "Raised by clients",
  detail: "Products we designed with founders and enterprise teams have gone on to raise more than $1B.",
};
const engagement = {
  value: "+170%",
  label: "Engagement rate",
  detail: "Clearer flows turn more visits into leads instead of drop-offs.",
};
const revenue = {
  value: "4.6×",
  label: "Revenue after redesign",
  detail: "Product improvements that scale business impact, measured on work we have already shipped.",
};
const churn = {
  value: "−37%",
  label: "Churn across SaaS clients",
  detail: "Better onboarding and fewer dead ends keep more users after the first session.",
};
const mysoRaise = {
  value: "$2.4M",
  label: "Raised with MYSO",
  detail: "MYSO Finance raised $2.4M after the product and story were designed together.",
};
const mysoUse = {
  value: "85%",
  label: "User engagement",
  detail: "MYSO reached 85% user engagement once the core flows were clear.",
};

export const services: ServicePage[] = [
  {
    slug: "pitch-deck",
    title: "Pitch Deck",
    category: "branding",
    headline: "Pitch decks that make the ask obvious",
    description:
      "RZQ designs investor and partner decks that lead with the problem, the product, and the numbers. The slides are built to be presented, not just read.",
    quote: quotes.mohamed,
    offers: [
      { title: "Narrative structure", detail: "A slide order that walks from the problem to the ask without burying the product." },
      { title: "Data slides", detail: "Charts and comparisons that stay readable in a room and on a laptop screen." },
      { title: "Figma, PowerPoint, Keynote", detail: "Editable files your team can update after the first raise or partner meeting." },
      { title: "Speaker notes", detail: "Short cues so the person presenting does not have to invent the story live." },
    ],
    cases: ["imed", "voxe", "blockdb"],
    stats: [mysoRaise, raised, engagement],
    stages: [
      { title: "Story workshop", points: ["Audience and ask", "Proof you already have", "What must stay off the slides"] },
      { title: "Structure", points: ["Slide map", "Headline per slide", "Appendix plan"] },
      { title: "Visual design", points: ["Type and color system", "Charts", "Export-ready files"] },
    ],
    outcomes: [
      { title: "A deck people finish", detail: "Each slide has one job, so the meeting stays on the product instead of the formatting." },
      { title: "Numbers that hold up", detail: "Market, traction, and use of funds are designed as claims you can defend." },
      { title: "A file you can reuse", detail: "The system covers follow-up meetings without starting the deck over." },
    ],
    faqs: [
      { question: "What do you need to start a pitch deck?", answer: "The product in one paragraph, who the meeting is for, and any numbers you are willing to show. We shape the story from there." },
      { question: "How long does a deck take?", answer: "A focused deck is usually a few weeks, including one structured review. Extra rounds or a full brand system extend that." },
      { question: "Can you design the deck if the product is still early?", answer: "Yes. Early decks lean on the problem, the approach, and the team. We do not invent traction you do not have." },
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "branding",
    headline: "Brand identity that holds across product and marketing",
    description:
      "RZQ builds a visual system your product, site, and sales materials can share. Strategy, marks, type, color, and guidelines ship together.",
    quote: quotes.kristen,
    offers: [
      { title: "Positioning", detail: "Who the brand is for, and what it should not sound or look like." },
      { title: "Visual system", detail: "Logo, type, color, and layout rules that work in product UI and campaigns." },
      { title: "Guidelines", detail: "A practical document the next designer or developer can follow." },
      { title: "Starter applications", detail: "A small set of real uses, such as a deck cover, social frame, or app icon." },
    ],
    cases: ["fundediq", "nextgpu", "imed"],
    stats: [raised, engagement, revenue],
    stages: [
      { title: "Brand audit", points: ["Current assets", "Competitors", "What must carry over"] },
      { title: "Direction", points: ["Territory options", "Type and color tests", "Chosen system"] },
      { title: "Guidelines", points: ["Logo rules", "UI basics", "File handoff"] },
    ],
    outcomes: [
      { title: "One system, many surfaces", detail: "Product screens and marketing no longer look like different companies." },
      { title: "Faster later work", detail: "The next landing page or feature starts from tokens instead of a blank file." },
      { title: "Clearer trust", detail: "A consistent identity makes the product easier to take seriously in a first meeting." },
    ],
    faqs: [
      { question: "Is brand identity only a logo?", answer: "No. The logo is one piece. You also get type, color, spacing, and rules for how they are used." },
      { question: "Do you apply the identity inside the product?", answer: "Yes. We design the system so it can live in Figma components, not only in a PDF." },
      { question: "What does a typical start cost?", answer: "Focused design work starts from $6,000. A full identity with product application is scoped after a call." },
    ],
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "branding",
    headline: "Logos that stay clear at icon size",
    description:
      "RZQ designs marks for products that need to work as an app icon, a favicon, and a wordmark on a deck. You get a small system, not a single sketch.",
    quote: quotes.esme,
    offers: [
      { title: "Concept routes", detail: "Distinct directions before we refine one, so the choice is visible." },
      { title: "Mark and wordmark", detail: "A symbol and a lockup that can be used separately." },
      { title: "App icon", detail: "A version that still reads inside a rounded square." },
      { title: "Usage notes", detail: "Clear space, minimum size, and the backgrounds it can sit on." },
    ],
    cases: ["fundediq", "nextgpu", "enzyme"],
    stats: [raised, mysoUse, engagement],
    stages: [
      { title: "Brief", points: ["Name and category", "What to avoid", "Where the mark appears first"] },
      { title: "Concepts", points: ["Several routes", "Black-and-white tests", "One direction chosen"] },
      { title: "Final files", points: ["Vector masters", "Icon crops", "Light and dark versions"] },
    ],
    outcomes: [
      { title: "Recognition at small sizes", detail: "The mark still reads in a browser tab and on a phone home screen." },
      { title: "A set, not a one-off", detail: "Wordmark, symbol, and icon stay related." },
      { title: "Files you can hand off", detail: "Vectors are ready for product, print, and the next designer." },
    ],
    faqs: [
      { question: "How many concepts do we see?", answer: "You see distinct routes first, then we refine the one you choose. We do not hide the decision inside a single option." },
      { question: "Will the logo work as an app icon?", answer: "Yes. Icon crops are part of the delivery, not an extra request at the end." },
      { question: "Can you redesign a logo we already have?", answer: "Yes, when the current mark fails at small sizes or no longer matches the product." },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "branding",
    headline: "Icons, illustrations, and campaign graphics",
    description:
      "RZQ makes the supporting visuals a product needs: icon sets, illustrations, and social or sales templates that follow the same system.",
    quote: quotes.jimmy,
    offers: [
      { title: "Icon sets", detail: "A consistent stroke and grid so product icons do not look collected from different libraries." },
      { title: "Illustrations", detail: "Scenes and empty states that match the interface instead of fighting it." },
      { title: "Social templates", detail: "Frames your team can refill without breaking the layout." },
      { title: "Sales assets", detail: "One-pagers and simple diagrams for calls and follow-ups." },
    ],
    cases: ["piko-health", "fundediq", "imed"],
    stats: [engagement, revenue, churn],
    stages: [
      { title: "Inventory", points: ["Where graphics are missing", "Existing brand rules", "Priority list"] },
      { title: "System", points: ["Grid and stroke", "Color limits", "First set"] },
      { title: "Templates", points: ["Social frames", "Diagram style", "Source files"] },
    ],
    outcomes: [
      { title: "A matching set", detail: "Icons and illustrations look like they belong to the same product." },
      { title: "Less one-off design", detail: "Templates cover the posts and slides that repeat every week." },
      { title: "Clearer product screens", detail: "Empty states and feature art explain the screen instead of decorating it." },
    ],
    faqs: [
      { question: "Do you design icons for the product itself?", answer: "Yes. Product icons, empty states, and marketing graphics can be one engagement or split by priority." },
      { question: "Will our team be able to edit the files?", answer: "You receive the source files and a short note on what can change without breaking the system." },
      { question: "Can this follow a brand we already have?", answer: "Yes. We work inside your type, color, and logo rules when those already exist." },
    ],
  },
  {
    slug: "rebranding",
    title: "Rebranding",
    category: "branding",
    headline: "Rebranding that keeps the equity you already earned",
    description:
      "RZQ refreshes a brand that has outgrown its first look. We audit what people already recognize, then update the system without throwing the product away.",
    quote: quotes.stephane,
    offers: [
      { title: "Equity audit", detail: "What customers already recognize, and what is only internal habit." },
      { title: "Updated system", detail: "A new visual direction that can roll into product, site, and sales." },
      { title: "Migration plan", detail: "What changes first, and what can wait until the next release." },
      { title: "Product touchpoints", detail: "Key screens and the marketing site so the relaunch looks intentional." },
    ],
    cases: ["nextgpu", "enzyme", "fundediq"],
    stats: [revenue, engagement, raised],
    stages: [
      { title: "Audit", points: ["Current brand", "Product screens", "What to keep"] },
      { title: "New direction", points: ["Updated mark if needed", "Type and color", "Sample screens"] },
      { title: "Rollout", points: ["Priority surfaces", "File kit", "What ships in the next release"] },
    ],
    outcomes: [
      { title: "A modern face without a reset", detail: "The brand looks current, and customers can still tell it is you." },
      { title: "Product and site together", detail: "The relaunch is not a logo swap on an old interface." },
      { title: "A sequence your team can follow", detail: "You know which surfaces change now and which wait." },
    ],
    faqs: [
      { question: "Do we have to change the name?", answer: "No. Most rebrands we do keep the name and change the system, the site, and the product look." },
      { question: "Will the old product look broken during the change?", answer: "We sequence the rollout so the main surfaces move together instead of one logo appearing on an outdated UI." },
      { question: "How is this different from a new identity?", answer: "A rebrand starts from what you should keep. A new identity starts closer to a blank page." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    headline: "UI/UX design for products that have to ship",
    description:
      "RZQ’s UI/UX work covers research, flows, wireframes, and high-fidelity UI for web and mobile. Share the goal, and we map the design path, timeline, and price.",
    quote: quotes.esme,
    offers: [
      { title: "Product UX", detail: "Flows, structure, and wireframes for the screens people actually use." },
      { title: "Interface design", detail: "High-fidelity UI for web, dashboards, or mobile, in one Figma file." },
      { title: "Design system starter", detail: "Components and styles so the next feature does not invent a new button." },
      { title: "Developer handoff", detail: "Annotations and a file your engineers can build from." },
    ],
    cases: ["myso", "mojo-cx", "health-hq"],
    stats: [engagement, churn, mysoUse],
    stages: [
      { title: "UX audit", points: ["Goals and constraints", "Current product or brief", "What to design first"] },
      { title: "UX design", points: ["Flows", "Wireframes", "Review against the job to be done"] },
      { title: "UI design", points: ["Visual direction", "Key screens", "Responsive states"] },
      { title: "Handoff", points: ["Figma annotations", "Component notes", "Design QA with development"] },
    ],
    outcomes: [
      { title: "Shorter path to value", detail: "Users reach the main action without hunting through extra screens." },
      { title: "Less rework in development", detail: "Flows and states are decided in design, not during implementation." },
      { title: "A file the next release can extend", detail: "Components stay consistent when the product grows." },
    ],
    faqs: [
      { question: "What do UI/UX design services include?", answer: "Research inputs, flows, wireframes, high-fidelity screens, and a Figma file with handoff notes. Development can be added when you want the same team to build it." },
      { question: "What is the difference between UI and UX here?", answer: "UX is the structure: who does what, in what order. UI is the visual layer on that structure. We design them in one engagement so they do not drift apart." },
      { question: "How much does it cost, and when can you start?", answer: "Focused UI/UX work starts from $6,000. After scope is confirmed, design usually starts within a few business days. A typical product pass is measured in weeks, not a single workshop." },
      { question: "Do you only design, or do you also build?", answer: "RZQ designs and develops. When both are in scope, the people building the product use the same files." },
    ],
  },
  {
    slug: "web-design",
    title: "Website Design",
    category: "design",
    headline: "Website design that explains the product and asks for the next step",
    description:
      "RZQ designs marketing sites and landing systems for products that need trust on the first screen. Structure, messaging, and UI are designed together.",
    quote: quotes.ola,
    offers: [
      { title: "Site structure", detail: "A page map that matches how buyers actually decide." },
      { title: "Page design", detail: "Home, product, and conversion pages in a responsive Figma file." },
      { title: "Content hierarchy", detail: "Headlines and sections ordered by what a visitor needs first." },
      { title: "Handoff or build", detail: "Design only, or design plus Webflow or custom development." },
    ],
    cases: ["advisorworld", "enzyme", "piko-health"],
    stats: [engagement, revenue, raised],
    stages: [
      { title: "Message", points: ["Audience", "Offer", "Proof you can show"] },
      { title: "Structure", points: ["Sitemap", "Wireframes", "Calls to action"] },
      { title: "Visual design", points: ["Desktop and mobile", "Components", "Developer-ready file"] },
    ],
    outcomes: [
      { title: "A first screen that states the offer", detail: "Visitors see what you do before they scroll." },
      { title: "Pages that share one system", detail: "New pages can be added without a new visual language." },
      { title: "A path to contact", detail: "The design makes the next step obvious on desktop and mobile." },
    ],
    faqs: [
      { question: "Do you write the page copy?", answer: "We shape the structure and headlines with you. If you already have copy, we design around it and flag what is unclear." },
      { question: "Is this the same as development?", answer: "Website design is the structure and UI. Web development or Webflow is how it gets built. Both can be one engagement." },
      { question: "Can you redesign a site we already have?", answer: "Yes. That work lives under Website Redesign when the goal is to replace an existing site rather than start one." },
    ],
  },
  {
    slug: "mobile-design",
    title: "Mobile App Design",
    category: "design",
    headline: "Mobile app design people can use one-handed",
    description:
      "RZQ designs iOS and Android experiences around the job the app has to do. Navigation, onboarding, and the main screens are designed for thumbs, not for a desktop mock.",
    quote: quotes.aetienne,
    offers: [
      { title: "App flows", detail: "Onboarding, the core loop, and the empty and error states." },
      { title: "Interface", detail: "Screens for iOS, Android, or a shared system, at real phone sizes." },
      { title: "Prototype", detail: "A clickable flow for testing and for aligning your developers." },
      { title: "Handoff", detail: "Specs for type, spacing, and the components engineering will rebuild." },
    ],
    cases: ["health-hq", "mojo-cx", "myso"],
    stats: [mysoUse, engagement, churn],
    stages: [
      { title: "Product fit", points: ["Primary user job", "Platform", "What the first release must include"] },
      { title: "Flows", points: ["Navigation model", "Onboarding", "Core screens in wireframe"] },
      { title: "UI and prototype", points: ["Visual system", "High-fidelity screens", "Clickable prototype"] },
    ],
    outcomes: [
      { title: "A clearer first session", detail: "People understand the app before they are asked to do too much." },
      { title: "Screens that stay readable", detail: "Type, targets, and spacing are designed for a phone, then checked on more than one size." },
      { title: "A brand that still feels like you", detail: "The app uses the same system as the rest of the product." },
    ],
    faqs: [
      { question: "What is included in mobile app design?", answer: "Research into the job to be done, flows, interface layouts, a prototype, and a handoff file. We design for iOS, Android, or both." },
      { question: "How do you handle different screen sizes?", answer: "Layouts are designed to adapt. Type, spacing, and tap targets are checked so the main actions stay usable." },
      { question: "Can you redesign an app we already shipped?", answer: "Yes. We start from what is failing in the current app, then redesign the flows and the interface." },
      { question: "Do you support the design after launch?", answer: "Yes. Later screens and adjustments can stay with the same team so the system does not fork." },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    category: "design",
    headline: "Website redesign for sites that no longer match the product",
    description:
      "RZQ replaces an outdated site with a clearer structure and a current interface. We keep the pages that already work and rebuild the ones that do not.",
    quote: quotes.ola,
    offers: [
      { title: "UX review of the current site", detail: "Where people stall, and which pages are doing real work." },
      { title: "New information architecture", detail: "A simpler map before any visual refresh." },
      { title: "Visual redesign", detail: "Pages that match the product you sell now." },
      { title: "Responsive layouts", detail: "Desktop and mobile designed together, not as an afterthought." },
    ],
    cases: ["nextgpu", "advisorworld", "enzyme"],
    stats: [revenue, engagement, churn],
    stages: [
      { title: "Review", points: ["Current analytics if you have them", "Page inventory", "What to keep"] },
      { title: "New structure", points: ["Sitemap", "Wireframes for key templates", "Content gaps"] },
      { title: "Redesign", points: ["Visual system", "Templates", "Handoff or build"] },
    ],
    outcomes: [
      { title: "A site that matches the product", detail: "Marketing no longer describes a company you have already outgrown." },
      { title: "Fewer dead pages", detail: "The map is shorter, and each page has a job." },
      { title: "A base for the next campaign", detail: "New pages can use the templates instead of a one-off design." },
    ],
    faqs: [
      { question: "Do you migrate the content?", answer: "We map what moves, what is rewritten, and what is retired. Writing every page from scratch is scoped separately if you need it." },
      { question: "Can the current site stay up while you design?", answer: "Yes. Design happens in Figma first. The live site changes when you are ready to build." },
      { question: "Is a redesign the same as a rebrand?", answer: "A website redesign changes the site. A rebrand also changes the identity. They can run together when both are needed." },
    ],
  },
  {
    slug: "ux-audit",
    title: "Product UX/UI Audit",
    category: "design",
    headline: "A product UX/UI audit that ends in a prioritized list",
    description:
      "RZQ reviews the product you already have and returns the friction, the quick fixes, and the larger UX work. The output is a backlog, not a slide of opinions.",
    quote: quotes.jimmy,
    offers: [
      { title: "Heuristic review", detail: "A structured pass over the main flows, not a random screen critique." },
      { title: "Funnel notes", detail: "Where people are likely to stop, based on the product and any data you share." },
      { title: "Prioritized backlog", detail: "Fixes ordered by impact and effort." },
      { title: "Roadmap", detail: "What to do this month, and what belongs in a redesign." },
    ],
    cases: ["mojo-cx", "health-hq", "myso"],
    stats: [churn, engagement, revenue],
    stages: [
      { title: "Access", points: ["Product walkthrough", "Goals and complaints", "Analytics if available"] },
      { title: "Review", points: ["Core flows", "UI consistency", "Accessibility basics"] },
      { title: "Readout", points: ["Findings", "Ranked fixes", "Recommended next engagement"] },
    ],
    outcomes: [
      { title: "A shared list", detail: "Design, product, and engineering can argue from the same findings." },
      { title: "Quick wins separated from rebuilds", detail: "You can ship small fixes without waiting for a full redesign." },
      { title: "A decision on what to fund next", detail: "The audit tells you whether to patch, redesign, or both." },
    ],
    faqs: [
      { question: "What do we receive?", answer: "A written review of the main flows, ranked issues, and a suggested sequence. We can turn that into a design engagement afterward." },
      { question: "Do you need analytics?", answer: "They help. If you do not have them, the review is based on the product, the jobs it supports, and a structured heuristic pass." },
      { question: "Is an audit the same as a redesign?", answer: "No. An audit tells you what to change. A redesign is the work of changing it." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "development",
    headline: "Web development for products that already have a design",
    description:
      "RZQ builds front-end and back-end web experiences that match the design and stay maintainable. We improve, rebuild, or start from a blank repository.",
    quote: quotes.stephane,
    offers: [
      { title: "Front end", detail: "Interfaces built to the Figma file, including responsive states." },
      { title: "Back end", detail: "The services, data, and auth the product actually needs." },
      { title: "Performance and SEO", detail: "A site that loads cleanly and can be found." },
      { title: "After launch", detail: "A support window so the first real users do not sit on a frozen release." },
    ],
    cases: ["enzyme", "advisorworld", "piko-health"],
    stats: [engagement, revenue, raised],
    stages: [
      { title: "Scope", points: ["Design and tech constraints", "What ships first", "Environments"] },
      { title: "Build", points: ["Front end", "Back end", "Reviews against the design"] },
      { title: "Release", points: ["QA", "Launch", "A short support window"] },
    ],
    outcomes: [
      { title: "A product that matches the design", detail: "Spacing, type, and states survive the move into code." },
      { title: "A codebase your team can own", detail: "The stack and structure are documented enough to hand over." },
      { title: "A release you can measure", detail: "The first version is small enough to ship and specific enough to learn from." },
    ],
    faqs: [
      { question: "Do you build from our design or yours?", answer: "Either. If RZQ designed it, we build from that file. If you already have a design, we estimate from that and flag gaps before coding." },
      { question: "Which stack do you use?", answer: "We pick a stack that fits the product. Marketing sites and product apps are not forced onto the same setup." },
      { question: "Can you take over an existing codebase?", answer: "Yes, after a short look at the repo, the hosting, and what is already broken." },
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    category: "development",
    headline: "MVP development for a first version people can use",
    description:
      "RZQ designs and builds a small product with a real architecture. The goal is a version you can put in front of users and investors, then extend.",
    quote: quotes.kirill,
    offers: [
      { title: "Scoped roadmap", detail: "The features that belong in version one, and the ones that wait." },
      { title: "Design and engineering", detail: "The same team takes the product from flows to a running build." },
      { title: "Launch", detail: "A version that can be demoed and used, not only a prototype." },
      { title: "Iteration", detail: "A plan for the release after the first users respond." },
    ],
    cases: ["myso", "mojo-cx", "piko-health"],
    stats: [mysoRaise, mysoUse, raised],
    stages: [
      { title: "Cut the scope", points: ["Must-have flows", "Out of scope list", "Success for version one"] },
      { title: "Design the core", points: ["Flows", "UI for the main path", "Prototype"] },
      { title: "Build and ship", points: ["Implementation", "QA", "A release you can share"] },
    ],
    outcomes: [
      { title: "A product, not a slide", detail: "People can click through the real thing." },
      { title: "Room to grow", detail: "The first version is small, and the structure can take the next feature." },
      { title: "A story for the raise", detail: "You can show the product next to the deck." },
    ],
    faqs: [
      { question: "How is MVP development different from MVP design?", answer: "MVP design produces the product experience and files. MVP development also builds the working version." },
      { question: "Will you include every feature in the first release?", answer: "No. The point of the MVP is the smallest set that proves the product. Extra features are scheduled after that." },
      { question: "Can design and development start together?", answer: "Yes. That is the usual shape of this engagement." },
    ],
  },
  {
    slug: "landing-page-design",
    title: "Landing page",
    category: "development",
    headline: "Landing pages with one job",
    description:
      "RZQ designs and builds landing pages that state the offer, show proof, and ask for one action. The page is structured for a campaign, not as a smaller homepage.",
    quote: quotes.mohamed,
    offers: [
      { title: "Message hierarchy", detail: "Headline, proof, and offer in an order a cold visitor can follow." },
      { title: "Page design", detail: "A responsive layout with a single primary action." },
      { title: "Build", detail: "A fast page in Webflow or in the stack you already use." },
      { title: "Room for variants", detail: "Sections structured so a later test does not require a new page from scratch." },
    ],
    cases: ["piko-health", "advisorworld", "imed"],
    stats: [engagement, revenue, raised],
    stages: [
      { title: "Offer", points: ["Who the page is for", "The one action", "Proof available now"] },
      { title: "Design", points: ["Section order", "Mobile layout", "Form or call to action"] },
      { title: "Build", points: ["Implementation", "Basic SEO", "Launch"] },
    ],
    outcomes: [
      { title: "One clear action", detail: "The page does not compete with itself." },
      { title: "Proof near the ask", detail: "Reviews, results, or product shots sit where the decision happens." },
      { title: "A page you can point a campaign at", detail: "Ads and outbound have a destination that matches the message." },
    ],
    faqs: [
      { question: "Do you design the page and build it?", answer: "Yes. Design-only is possible if your team will implement it." },
      { question: "Can you make more than one landing page?", answer: "Yes. After the first template, extra pages are faster because they share the system." },
      { question: "How is this different from website design?", answer: "A landing page is a single campaign destination. Website design covers the broader site." },
    ],
  },
  {
    slug: "corporate-website-development",
    title: "Corporate Websites",
    category: "development",
    headline: "Corporate websites built for more than one team",
    description:
      "RZQ designs and builds company sites that several teams can update. The structure, CMS, and visual system are made for a business that will keep publishing.",
    quote: quotes.ola,
    offers: [
      { title: "Multi-page structure", detail: "Company, product, and proof pages with a clear map." },
      { title: "CMS", detail: "A setup your team can edit without a developer for every paragraph." },
      { title: "Accessibility", detail: "Type, contrast, and structure that hold up beyond a visual pass." },
      { title: "Room for more markets", detail: "Layouts that can take another language or region later." },
    ],
    cases: ["advisorworld", "enzyme", "nextgpu"],
    stats: [raised, engagement, revenue],
    stages: [
      { title: "Map", points: ["Audiences", "Page list", "Who edits what"] },
      { title: "Design", points: ["Templates", "Navigation", "Proof modules"] },
      { title: "Build", points: ["CMS", "Templates in code or Webflow", "Launch checklist"] },
    ],
    outcomes: [
      { title: "A site the company can maintain", detail: "Marketing can publish without waiting on a redesign for every update." },
      { title: "One voice across pages", detail: "Product, company, and careers do not look like separate vendors." },
      { title: "A base for campaigns", detail: "Landing pages can sit on the same system." },
    ],
    faqs: [
      { question: "Which CMS do you use?", answer: "We choose based on who will edit the site. Webflow and a custom build are both options." },
      { question: "Can several brands live on one site?", answer: "Yes, if they should. We decide that in the map, before templates are designed." },
      { question: "Do you handle the content migration?", answer: "We plan the migration and can move the priority pages. A large archive is scoped on its own." },
    ],
  },
  {
    slug: "wow-web-design",
    title: "WOW Websites",
    category: "development",
    headline: "WOW websites with motion that still loads",
    description:
      "RZQ designs sites with a stronger art direction and interaction, then builds them inside a performance budget. The point is a memorable visit, not a reel that stutters.",
    quote: quotes.kristen,
    offers: [
      { title: "Art direction", detail: "A visual idea strong enough to carry the brand, not a template with a new color." },
      { title: "Motion", detail: "Interactions that explain the product or the brand, used sparingly." },
      { title: "Build", detail: "Implementation that respects load time on a normal connection." },
      { title: "Handoff notes", detail: "What can be edited later without breaking the motion." },
    ],
    cases: ["nextgpu", "enzyme", "myso"],
    stats: [engagement, mysoUse, raised],
    stages: [
      { title: "Direction", points: ["References", "What the site must still explain", "Motion budget"] },
      { title: "Design", points: ["Key sequences", "Still layouts", "Mobile behavior"] },
      { title: "Build", points: ["Implementation", "Performance pass", "Launch"] },
    ],
    outcomes: [
      { title: "A site people remember", detail: "The visit has a point of view, not only a list of services." },
      { title: "Motion with a reason", detail: "Animation supports the story instead of delaying it." },
      { title: "A page that still works on a phone", detail: "The idea survives when the heavy effects step back." },
    ],
    faqs: [
      { question: "Will a highly designed site be slow?", answer: "It does not have to be. We set a performance budget before the motion is designed, and we cut effects that miss it." },
      { question: "Is this only for agencies and studios?", answer: "No. It fits any brand that needs a stronger first impression than a standard marketing template." },
      { question: "Can our team edit it afterward?", answer: "Text and simple media can stay editable. Custom motion is documented so a later change does not require a rewrite of the whole page." },
    ],
  },
  {
    slug: "webflow",
    title: "Webflow Development",
    category: "development",
    headline: "Webflow sites your team can publish",
    description:
      "RZQ builds production Webflow sites with a CMS, interactions, and a structure a marketer can update. Design and build stay in one engagement when you want them to.",
    quote: quotes.stephane,
    offers: [
      { title: "Webflow build", detail: "A site that matches the design, including breakpoints." },
      { title: "CMS", detail: "Collections for the content you will actually update." },
      { title: "Interactions", detail: "Motion that Webflow can maintain." },
      { title: "SEO setup", detail: "Titles, descriptions, and a clean structure before launch." },
    ],
    cases: ["piko-health", "advisorworld", "enzyme"],
    stats: [engagement, revenue, raised],
    stages: [
      { title: "Plan the CMS", points: ["What editors change", "Collections", "Design gaps"] },
      { title: "Build", points: ["Layout", "CMS bindings", "Interactions"] },
      { title: "Handoff", points: ["Editor notes", "SEO pass", "Launch"] },
    ],
    outcomes: [
      { title: "Marketing can ship pages", detail: "A new post or case does not require a developer." },
      { title: "Design fidelity", detail: "The published site matches the file you approved." },
      { title: "A site you are not locked out of", detail: "You own the project and can invite your team." },
    ],
    faqs: [
      { question: "Do you design in Webflow or in Figma first?", answer: "Usually Figma first, then Webflow. A simpler page can be designed directly in Webflow when that is faster." },
      { question: "Will you train our team?", answer: "Yes. Handoff includes a short walkthrough of the collections and what not to detach." },
      { question: "Can you migrate an existing Webflow site?", answer: "Yes, after we look at the current project structure and what needs to change." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    category: "development",
    headline: "Mobile development for iOS, Android, and cross-platform apps",
    description:
      "RZQ builds mobile apps against an approved design. Native and cross-platform are both options. The choice depends on the product, not on a default stack.",
    quote: quotes.kirill,
    offers: [
      { title: "iOS and Android", detail: "Native builds when the platform differences matter." },
      { title: "Cross-platform", detail: "One codebase when the product can share almost all of the UI." },
      { title: "API integration", detail: "The app talks to the services you already have, or to ones we build." },
      { title: "Store readiness", detail: "A build that can go through review, plus the notes that review usually asks for." },
    ],
    cases: ["health-hq", "mojo-cx", "myso"],
    stats: [mysoUse, engagement, churn],
    stages: [
      { title: "Platform choice", points: ["Native or shared", "Integrations", "First release scope"] },
      { title: "Build", points: ["Screens from the design", "API work", "Device checks"] },
      { title: "Release", points: ["Store listing support", "QA", "A plan for the next version"] },
    ],
    outcomes: [
      { title: "An app that matches the design", detail: "The build follows the flows and UI that were approved." },
      { title: "A stack you can keep", detail: "The platform choice is explained, not hidden." },
      { title: "A path to the store", detail: "The release includes the practical steps, not only a simulator build." },
    ],
    faqs: [
      { question: "Should we build native or cross-platform?", answer: "Cross-platform fits when the UI can be shared. Native fits when the product depends on platform behavior. We recommend one after the scope is clear." },
      { question: "Do you design the app as well?", answer: "Yes. Mobile App Design can run before development, or both can be one engagement." },
      { question: "Can you join a team that already has an app?", answer: "Yes. We start by reading the current codebase and the design, then take a defined slice of work." },
    ],
  },
];

export const solutionsPages: ServicePage[] = [
  {
    slug: "mvp",
    title: "MVP Design",
    category: "solution",
    headline: "Hire MVP designers",
    description:
      "RZQ has designed MVPs with founders and product teams since 2016. Clients have raised more than $1B on products we worked on together. The process is built to test the product with real users sooner.",
    quote: quotes.mohamed,
    offers: [
      { title: "You have an idea and no picture of the product", detail: "We run discovery and shape the first version users and investors can understand." },
      { title: "You have a prototype and the experience is rough", detail: "We rebuild the core flow so the product is easier to use without adding a pile of features." },
      { title: "The product does not land in a meeting", detail: "We design an interface that makes the idea obvious on a screen, not only in a deck." },
    ],
    cases: ["myso", "mojo-cx", "piko-health"],
    stats: [raised, mysoRaise, mysoUse],
    stages: [
      { title: "Product discovery", points: ["Business goals", "Market context", "What would make the first version matter"] },
      { title: "Strategy", points: ["Value proposition", "Feature cut", "Roadmap for version one"] },
      { title: "Prototype and UI", points: ["Wireframes", "High-fidelity UI", "Interactive prototype"] },
      { title: "Handoff", points: ["Files for development", "Optional build support", "A plan for the next iteration"] },
    ],
    outcomes: [
      { title: "A first version with a point", detail: "The MVP shows the core idea instead of a tour of future features." },
      { title: "Something you can put in front of people", detail: "Users and investors see a product, not a description of one." },
      { title: "A team that can stay", detail: "The same designers can keep iterating after the first release." },
    ],
    faqs: [
      { question: "What is an MVP in this engagement?", answer: "A minimum viable product is the smallest version that lets you learn from real users. In design, that means the core flows and interface, not every feature on the roadmap." },
      { question: "Who is MVP design for?", answer: "Pre-seed and seed teams proving an idea, later-stage startups tightening product-market fit, and companies adding a new product beside an existing one." },
      { question: "What do you deliver?", answer: "Strategy notes, the product in Figma, and, when needed, a marketing site. Brand identity can be included when the company is new." },
      { question: "How do we start?", answer: "Book a call with the product goal, the audience, and any prototype you already have. We will tell you what belongs in the first version." },
    ],
  },
  {
    slug: "product-redesign",
    title: "Product Redesign",
    category: "solution",
    headline: "Product redesign for teams that have outgrown the current UI",
    description:
      "RZQ redesigns products that are hard to learn, hard to sell, or stuck on an old interface. You get a clearer experience and a system the next release can use.",
    quote: quotes.jimmy,
    offers: [
      { title: "UX audit first", detail: "We find the flows that cost you users before we redraw screens." },
      { title: "Interface and system", detail: "A visual update plus components, so the redesign does not decay on the next feature." },
      { title: "Feature refinement", detail: "We cut or combine screens that no longer earn their place." },
    ],
    cases: ["health-hq", "mojo-cx", "nextgpu"],
    stats: [revenue, churn, engagement],
    stages: [
      { title: "Audit", points: ["Current flows", "What the business needs to change", "Constraints from engineering"] },
      { title: "New experience", points: ["Revised flows", "UI direction", "Key screens"] },
      { title: "System and handoff", points: ["Components", "States", "A sequence engineering can ship"] },
    ],
    outcomes: [
      { title: "A product people can learn faster", detail: "The main jobs take fewer steps." },
      { title: "A look that matches the company now", detail: "Sales and customers see the same product you describe." },
      { title: "Less drift after launch", detail: "New features use the system instead of one-off screens." },
    ],
    faqs: [
      { question: "Do you redesign the whole product at once?", answer: "Not always. We start with the flows that matter most and sequence the rest so engineering can ship in parts." },
      { question: "What if the current product has to stay live?", answer: "Design happens beside the live product. Releases follow a plan so users are not dropped into a half-finished UI." },
      { question: "How is this different from a UX audit?", answer: "An audit is the diagnosis. A product redesign is the new experience and the files to build it." },
    ],
  },
  {
    slug: "team-extension",
    title: "Team Extension",
    category: "solution",
    headline: "Designers who join the team you already have",
    description:
      "RZQ adds product designers to your team, with a lead who keeps the work pointed at the product. You get capacity without hiring a full department first.",
    quote: quotes.kirill,
    offers: [
      { title: "Dedicated designers", detail: "People assigned to your product, not a shared queue of unrelated tasks." },
      { title: "A lead on the work", detail: "Someone who reviews the design so it stays consistent." },
      { title: "Monthly capacity", detail: "A predictable team you can plan sprints around." },
      { title: "A short trial", detail: "A 3-day trial so you can see how the collaboration feels before a longer engagement." },
    ],
    cases: ["mojo-cx", "enzyme", "myso"],
    stats: [churn, engagement, revenue],
    stages: [
      { title: "Match", points: ["Skills you need", "Tools and rituals", "Who the designer reports to"] },
      { title: "Start", points: ["Access and context", "First tickets", "A working rhythm"] },
      { title: "Run", points: ["Weekly design", "Reviews", "Capacity you can adjust"] },
    ],
    outcomes: [
      { title: "Design capacity next to your team", detail: "Product and engineering are not waiting on a separate agency queue." },
      { title: "A predictable month", detail: "You know who is on the work and how the time is spent." },
      { title: "Quality that does not depend on one freelancer", detail: "A lead reviews the output so the system stays intact." },
    ],
    faqs: [
      { question: "How fast can someone start?", answer: "After the match is agreed, designers start on your tools and backlog. The 3-day trial is there so the fit is obvious early." },
      { question: "Who manages the designer?", answer: "You set the product priorities. RZQ provides the design lead and the working process." },
      { question: "Can the team grow or shrink?", answer: "Yes. Capacity is monthly, so you can add or reduce designers as the roadmap changes." },
    ],
  },
];

export type ServiceProof = { value: string; label: string };
export type ServiceQuality = { title: string; detail: string };

export type ServiceView = ServicePage & {
  proof: ServiceProof[];
  quotes: ServicePage["quote"][];
  storiesTitle: string;
  benefitsTitle: string;
  quality: ServiceQuality[];
};

const clutchProof = { value: "5.0", label: "Average rating on Clutch" };
const reviewsProof = { value: "89+", label: "Reviews on Clutch" };
const raisedProof = { value: "$1B+", label: "Raised by clients" };

const qualityByCategory: Record<ServicePage["category"], ServiceQuality[]> = {
  branding: [
    { title: "A story investors can follow", detail: "The narrative is built for the meeting, not as a document someone has to decode later." },
    { title: "Files your team can edit", detail: "Decks, identities, and templates ship in the tools you already present from." },
    { title: "A fast first version", detail: "You see a direction early, then we refine the slides or the system around real feedback." },
  ],
  design: [
    { title: "Flexible collaboration", detail: "A fixed monthly rate, with room to adjust capacity as the product changes." },
    { title: "On-time deliverables", detail: "Milestones are agreed up front so design does not drift past the release." },
    { title: "A fast start", detail: "A designer is on the work without a long hiring ramp." },
  ],
  development: [
    { title: "Design and build together", detail: "The people writing the code use the same files the design was approved in." },
    { title: "A release you can measure", detail: "The first version is small enough to ship and specific enough to learn from." },
    { title: "Support after launch", detail: "The first real users are not left on a frozen release." },
  ],
  solution: [
    { title: "Flexible collaboration", detail: "Sprint-based work or a dedicated person on a monthly rate." },
    { title: "On-time deliverables", detail: "Scope is cut to what the first release actually needs." },
    { title: "A fast start", detail: "A 3-day trial is available so the working fit is obvious early." },
  ],
};

const faces: Record<string, { proof: ServiceProof[]; second: keyof typeof quotes; storiesTitle: string; benefitsTitle: string }> = {
  "pitch-deck": {
    proof: [{ value: "100+", label: "Decks and product stories" }, clutchProof, raisedProof],
    second: "kirill",
    storiesTitle: "Investor presentations RZQ has designed",
    benefitsTitle: "How a pitch deck changes the meeting",
  },
  "brand-identity": {
    proof: [reviewsProof, clutchProof, raisedProof],
    second: "esme",
    storiesTitle: "Identities that carried into the product",
    benefitsTitle: "What a brand system covers",
  },
  "logo-design": {
    proof: [reviewsProof, clutchProof, { value: "85%", label: "User engagement on MYSO" }],
    second: "aetienne",
    storiesTitle: "Marks designed to survive at icon size",
    benefitsTitle: "What you leave with",
  },
  "graphic-design": {
    proof: [reviewsProof, clutchProof, engagement],
    second: "jimmy",
    storiesTitle: "Graphics that sit inside a real product",
    benefitsTitle: "The set we design",
  },
  rebranding: {
    proof: [reviewsProof, clutchProof, revenue],
    second: "stephane",
    storiesTitle: "Rebrands that kept the product recognizable",
    benefitsTitle: "How a rebrand is scoped",
  },
  "ui-ux-design": {
    proof: [reviewsProof, clutchProof, raisedProof],
    second: "jimmy",
    storiesTitle: "Products where the interface changed the result",
    benefitsTitle: "UI/UX design that covers the release",
  },
  "web-design": {
    proof: [reviewsProof, clutchProof, engagement],
    second: "ola",
    storiesTitle: "Sites designed around a clear offer",
    benefitsTitle: "What website design includes",
  },
  "mobile-design": {
    proof: [{ value: "85%", label: "User engagement on MYSO" }, clutchProof, reviewsProof],
    second: "aetienne",
    storiesTitle: "Mobile work people can use one-handed",
    benefitsTitle: "How mobile design affects the product",
  },
  "website-redesign": {
    proof: [revenue, clutchProof, reviewsProof],
    second: "ola",
    storiesTitle: "Redesigns that replaced an outdated site",
    benefitsTitle: "What changes in a redesign",
  },
  "ux-audit": {
    proof: [churn, clutchProof, reviewsProof],
    second: "jimmy",
    storiesTitle: "Products we reviewed before redrawing them",
    benefitsTitle: "What the audit returns",
  },
  "web-development": {
    proof: [reviewsProof, clutchProof, raisedProof],
    second: "stephane",
    storiesTitle: "Sites and products we designed and built",
    benefitsTitle: "What the build covers",
  },
  "mvp-development": {
    proof: [mysoRaise, mysoUse, raisedProof],
    second: "kirill",
    storiesTitle: "First versions that made it in front of users",
    benefitsTitle: "What ships in an MVP build",
  },
  "landing-page-design": {
    proof: [engagement, clutchProof, reviewsProof],
    second: "mohamed",
    storiesTitle: "Pages built for one action",
    benefitsTitle: "What a landing page is for",
  },
  "corporate-website-development": {
    proof: [reviewsProof, clutchProof, raisedProof],
    second: "ola",
    storiesTitle: "Company sites built to be updated",
    benefitsTitle: "What a corporate site includes",
  },
  "wow-web-design": {
    proof: [engagement, clutchProof, raisedProof],
    second: "kristen",
    storiesTitle: "Sites with a stronger point of view",
    benefitsTitle: "What makes the page memorable",
  },
  webflow: {
    proof: [reviewsProof, clutchProof, engagement],
    second: "stephane",
    storiesTitle: "Webflow builds your team can publish",
    benefitsTitle: "What the Webflow project includes",
  },
  "mobile-development": {
    proof: [mysoUse, clutchProof, reviewsProof],
    second: "kirill",
    storiesTitle: "Apps built against an approved design",
    benefitsTitle: "How the app gets built",
  },
  mvp: {
    proof: [{ value: "100+", label: "MVPs and first products" }, clutchProof, raisedProof],
    second: "mohamed",
    storiesTitle: "MVPs designed to test the product sooner",
    benefitsTitle: "Where teams start",
  },
  "product-redesign": {
    proof: [revenue, churn, clutchProof],
    second: "jimmy",
    storiesTitle: "Products redesigned after the first version",
    benefitsTitle: "What a product redesign changes",
  },
  "team-extension": {
    proof: [reviewsProof, clutchProof, { value: "3-day", label: "Trial before a longer engagement" }],
    second: "kirill",
    storiesTitle: "Teams RZQ designers have joined",
    benefitsTitle: "How the extra capacity works",
  },
};

export function presentService(item: ServicePage): ServiceView {
  const face = faces[item.slug];
  const second = quotes[face.second];
  return {
    ...item,
    proof: face.proof,
    quotes: [item.quote, second],
    storiesTitle: face.storiesTitle,
    benefitsTitle: face.benefitsTitle,
    quality: qualityByCategory[item.category],
  };
}

export function getService(slug: string) {
  return [...services, ...solutionsPages].find((s) => s.slug === slug);
}
