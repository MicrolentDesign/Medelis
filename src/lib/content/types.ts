export interface HeroSlide {
  id: string;
  eyebrow: string;
  h1Prefix: string;
  h1Highlight: string;
  h1Suffix: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

export interface StatItem {
  iconName: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface RangeItem {
  slug: string;
  title: string;
  description: string;
  productCount: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  brandName: string;
  composition: string;
  dosageForm: string;
  packing: string;
  rangeSlug: string;
  rangeName: string;
  imageUrl: string;
  description?: string;
  indications?: string[];
  storage?: string;
  isTestCard?: boolean;
}

export interface WhyUsItem {
  iconName: string;
  title: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface HomepageData {
  slides: HeroSlide[];
  stats: StatItem[];
  ranges: RangeItem[];
  featuredProducts: ProductItem[];
  whyUs: WhyUsItem[];
  news: NewsItem[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    location: string;
  };
}
