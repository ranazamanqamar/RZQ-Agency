export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "I was impressed with the high levels of detail and polish for all the features.",
    name: "Jimmy Hosang",
    role: "Founder & CEO",
  },
  {
    quote:
      "Their professionalism, dedication, responsiveness, and determination are commendable.",
    name: "Emil Ljesnjanin",
    role: "Founder & CEO",
  },
  {
    quote:
      "Their expertise and guidance were instrumental. They demonstrated their commitment to creating a product that resonated with our target audience, which led to improved user satisfaction.",
    name: "Aetienne Sardon",
    role: "Founder, MYSO Finance",
  },
  {
    quote: "Working with RZQ is really smooth in terms of communication and workflow",
    name: "Stephane Heip",
    role: "CMO, Enzyme",
  },
  {
    quote:
      "Throughout the entire project all I saw was sheer will to keep pushing forward and adapting to whatever the next request was. Terrific job and we couldn't have done it without you.",
    name: "Ola Olusoga",
    role: "Vice President at WordPress",
  },
  {
    quote:
      "We had a feeling that RZQ is not just a contract outsourcing team but part of our startup company. We had super close communication.",
    name: "Kirill Onasenko",
    role: "CEO, VOXE",
  },
  {
    quote:
      "Their UI/UX design skills were very impressive. Modern, creative, and best in class plus they were intuitive and 'got what we wanted' without any hand-holding and minimal direction.",
    name: "Esme Guevara",
    role: "CMO & Head of Product, QTalent",
  },
  {
    quote:
      "The process was something to be admired, they have a great idea of how to turn an idea into a visual product. They would also immediately make changes to any improvements we mentioned.",
    name: "Mohamed Shegow",
    role: "CEO, Sinta",
  },
  {
    quote:
      "They understood our idea and gave us more feedback than expected. They did more than we asked them to do, which was excellent. RZQ produces excellent quality work.",
    name: "Kristen Cheng",
    role: "Founder & CEO, BehindTitles",
  },
];

export const awards = [
  "89+ Reviews on Clutch",
  "Top Design Company 2025",
  "Top Digital Design Company 2026",
  "Global 100 B2B UI/UX Company by Clutch",
  "Top Rated Plus Agency on Upwork",
  "Champion Company by Clutch",
  "Top UX Strategy Company by Clutch",
  "Top User Experience team by GoodFirms",
  "Top 50 Trending team on Dribbble",
  "Projects are Featured on Behance platform",
  "Professional partner by Webflow",
];

export const stats = [
  {
    value: "+170%",
    label: "Engagement Rate",
    detail: "Intuitive flows that turn clicks into leads",
  },
  {
    value: "4.6×",
    label: "Revenue Growth After Redesign",
    detail: "Product improvements that scale business impact",
  },
  {
    value: "-37%",
    label: "Churn Across SaaS Clients",
    detail: "Better onboarding, better UX, fewer cancellations",
  },
];

export const trustBadges = [
  { name: "WordPress.com", tone: "white" as const },
  { name: "Galaxy", tone: "white" as const },
  { name: "Flair", tone: "purple" as const },
  { name: "Mojo CX", metric: "$2.3M", tone: "dark" as const },
  { name: "GT Protocol", metric: "$1.5 M", tone: "dark" as const },
  { name: "Myso Finance", metric: "$2.4M", tone: "dark" as const },
];
