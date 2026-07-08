export interface NavLink {
  label: string;
  href: string;
}

export interface BenefitTextPart {
  text: string;
  bold?: boolean;
}

export interface BenefitItem {
  image: string;
  parts: BenefitTextPart[];
}

export interface AudienceItem {
  image: string;
  title: string;
  description: string;
}

export interface Expert {
  name: string;
  role: string;
  instagram: string;
  instagramUrl: string;
  image: string;
  achievements: string[];
  reversed?: boolean;
}

export interface ProgramModule {
  number: number;
  title: string;
  lessons: string[];
  outcome: string;
}

export interface PricingModuleItem {
  number?: number;
  title: string;
  highlight?: boolean;
}

export interface PricingPlan {
  name: string;
  displayTitle?: string;
  price: string;
  oldPrice: string;
  image: string;
  grayscale?: boolean;
  modules: PricingModuleItem[];
  bonuses?: string[];
  extras?: string[];
  vip?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface Earner {
  username: string;
  amount: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface StarPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  delay: number;
  duration: number;
}
