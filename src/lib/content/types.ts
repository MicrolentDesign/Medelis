export interface ServiceItem {
  slug: string;
  modality: string;
  title: string;
  description: string;
  typicalProducts: string[];
  materials: string[];
  isoStandard: string;
}

export interface IndustryItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyRequirements: string[];
}

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  isoReference?: string;
  published: boolean;
}

export interface CredibilityStat {
  label: string;
  value: string;
  subtext?: string;
  sourceVerified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "compliance" | "process" | "logistics" | "general";
}

export interface HomepageData {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  stats: CredibilityStat[];
  services: ServiceItem[];
  industries: IndustryItem[];
  insights: InsightItem[];
  faqs: FaqItem[];
}
