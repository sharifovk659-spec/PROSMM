import type {
  AudienceItem,
  BenefitItem,
  Expert,
  FaqItem,
  FooterLink,
  NavLink,
  PricingPlan,
  ProgramModule,
} from "@/data/types";

export type Locale = "ru" | "tj";

export interface HeroFeature {
  title: string;
  description: string;
  icon: "rocket" | "target" | "chart";
}

export interface FreeLessonsCopy {
  badge: string;
  title: string;
  subtitle: string;
  lessonTab: string;
  channelTab: string;
  closeLabel: string;
  videos: { id: string; title: string }[];
}

export interface HeroCopy {
  hashtagTraining: string;
  hashtagSmm: string;
  subtitleLine1: string;
  subtitleLine2: string;
  lessonCta: string;
  collaborationText: string;
  collaborationNames: string;
  footerText: string;
  ctaText: string;
}

export interface LessonsBannerCopy {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
}

export interface ContactCopy {
  subtitle: string;
  locationLabel: string;
  locationValue: string;
  phoneLabel: string;
  phoneHint: string;
  whatsappLabel: string;
  whatsappHint: string;
  emailLabel: string;
  emailHint: string;
  instagramLabel: string;
  instagramHint: string;
  expertCardTitle: string;
  responseTime: string;
}

export interface LocaleDictionary {
  sectionTitles: {
    benefits: string;
    audience: string;
    expertsBadge: string;
    program: string;
    pricing: string;
    earnings: string;
    reviews: string;
    faq: string;
    contact: string;
  };
  uiLabels: {
    headerCta: string;
    getLessons: string;
    fromExperts: string;
    audienceStrip: string;
    moduleOutcome: string;
    showModules: string;
    hideModules: string;
    purchase: string;
    bestChoice: string;
    folderLessons: string;
    footerInfo: string;
    footerDocs: string;
    footerRights: string;
    footerContacts: string;
    footerTagline: string;
    instagram: string;
    languageRu: string;
    languageTj: string;
    reviewsSubtitle: string;
    playReview: string;
    closeReview: string;
    clickHint: string;
    discountTitle: string;
    discountDays: string;
    discountHours: string;
    discountMinutes: string;
    discountSeconds: string;
    discountCta: string;
    pricingSwipe: string;
  };
  navLinks: NavLink[];
  heroFeatures: HeroFeature[];
  hero: HeroCopy;
  freeLessons: FreeLessonsCopy;
  courseBenefits: BenefitItem[];
  targetAudience: AudienceItem[];
  experts: Expert[];
  programModules: ProgramModule[];
  pricingPlans: PricingPlan[];
  lessonsBanner: LessonsBannerCopy;
  contactSection: ContactCopy;
  faqItems: FaqItem[];
  footerInfoLinks: FooterLink[];
  footerDocLinks: FooterLink[];
}
