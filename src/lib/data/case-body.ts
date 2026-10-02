export type CaseProcessStep = {
  title: string;
  items: string[];
};

export type CaseSection = {
  title: string;
  text: string;
  images: string[];
};

export type CaseResult = {
  metric: string;
  title: string;
  text: string;
};

export type CaseBody = {
  headline: string;
  lead: string;
  heroImage?: string;
  meta: {
    client: string;
    industry: string;
    timeframe: string;
    hq: string;
  };
  about: string;
  problem: string;
  solution: string;
  processIntro?: string;
  process: CaseProcessStep[];
  sections: CaseSection[];
  results: CaseResult[];
};

import bodies from "./case-bodies.json";

const map = bodies as Record<string, CaseBody>;

export function getCaseBody(slug: string): CaseBody | undefined {
  return map[slug];
}
