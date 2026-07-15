import type {
  Earner,
  SocialLink,
  StarPosition,
} from "@/data/types";
import type { Locale, LocaleDictionary } from "./types";
import {
  ASSETS,
  CONTACT,
  EARNERS,
  EXPERT_STATIC,
  FLOATING_STARS,
  LINKS,
  SOCIAL_LINKS,
  VIDEO_REVIEWS,
} from "./static";
import { ruDictionary } from "./ru";
import { tjDictionary } from "./tj";

const dictionaries: Record<Locale, LocaleDictionary> = {
  ru: ruDictionary,
  tj: tjDictionary,
};

export interface SiteContent {
  locale: Locale;
  sectionTitles: LocaleDictionary["sectionTitles"];
  uiLabels: LocaleDictionary["uiLabels"];
  navLinks: LocaleDictionary["navLinks"];
  heroFeatures: LocaleDictionary["heroFeatures"];
  heroData: {
    centerExpert: string;
    hashtagTraining: string;
    hashtagSmm: string;
    subtitleLine1: string;
    subtitleLine2: string;
    lessonCta: string;
    collaborationText: string;
    collaborationNames: string;
    footerText: string;
    ctaText: string;
    ctaHref: string;
    purchaseHref: string;
  };
  freeLessonsData: {
    badge: string;
    title: string;
    subtitle: string;
    lessonTab: string;
    channelTab: string;
    closeLabel: string;
    channelEmbedSrc: string;
    youtubeChannelUrl: string;
    videos: { id: string; title: string }[];
  };
  courseBenefits: LocaleDictionary["courseBenefits"];
  targetAudience: LocaleDictionary["targetAudience"];
  experts: LocaleDictionary["experts"];
  programModules: LocaleDictionary["programModules"];
  pricingPlans: LocaleDictionary["pricingPlans"];
  lessonsBanner: LocaleDictionary["lessonsBanner"] & {
    expert: { image: string; name: string };
    phoneScreen: string;
  };
  contactSection: LocaleDictionary["contactSection"] & {
    phone: string;
    phoneHref: string;
    whatsapp: string;
    whatsappHref: string;
    email: string;
    emailHref: string;
    instagramUrl: string;
    instagramHandle: string;
  };
  faqItems: LocaleDictionary["faqItems"];
  footerInfoLinks: LocaleDictionary["footerInfoLinks"];
  footerDocLinks: LocaleDictionary["footerDocLinks"];
  earners: Earner[];
  videoReviews: {
    id: string;
    platform: "youtube" | "instagram";
    videoId: string;
    url: string;
    avatar: string;
    name: string;
    result: string;
  }[];
  socialLinks: SocialLink[];
  floatingStars: StarPosition[];
  audienceAssets: { freeLessonsPhones: string };
}

export function buildContent(locale: Locale): SiteContent {
  const dict = dictionaries[locale];

  return {
    locale,
    sectionTitles: dict.sectionTitles,
    uiLabels: dict.uiLabels,
    navLinks: dict.navLinks,
    heroFeatures: dict.heroFeatures,
    heroData: {
      centerExpert: ASSETS.heroCenter,
      hashtagTraining: dict.hero.hashtagTraining,
      hashtagSmm: dict.hero.hashtagSmm,
      subtitleLine1: dict.hero.subtitleLine1,
      subtitleLine2: dict.hero.subtitleLine2,
      lessonCta: dict.hero.lessonCta,
      collaborationText: dict.hero.collaborationText,
      collaborationNames: dict.hero.collaborationNames,
      footerText: dict.hero.footerText,
      ctaText: dict.hero.ctaText,
      ctaHref: LINKS.freeLessonUrl,
      purchaseHref: LINKS.purchase,
    },
    freeLessonsData: {
      ...dict.freeLessons,
      channelEmbedSrc: LINKS.channelEmbedSrc,
      youtubeChannelUrl: LINKS.youtubeChannel,
    },
    courseBenefits: dict.courseBenefits,
    targetAudience: dict.targetAudience,
    experts: dict.experts,
    programModules: dict.programModules,
    pricingPlans: dict.pricingPlans,
    lessonsBanner: {
      ...dict.lessonsBanner,
      expert: { image: ASSETS.lessonsBannerImage, name: dict.experts[0]?.name ?? "" },
      phoneScreen: ASSETS.lessonsPhoneScreen,
    },
    contactSection: {
      ...dict.contactSection,
      phone: CONTACT.phone,
      phoneHref: CONTACT.phoneHref,
      whatsapp: CONTACT.whatsapp,
      whatsappHref: CONTACT.whatsappHref,
      email: CONTACT.email,
      emailHref: CONTACT.emailHref,
      instagramUrl: LINKS.instagram,
      instagramHandle: EXPERT_STATIC.instagram,
    },
    faqItems: dict.faqItems,
    footerInfoLinks: dict.footerInfoLinks,
    footerDocLinks: dict.footerDocLinks,
    earners: [...EARNERS],
    videoReviews: [...VIDEO_REVIEWS],
    socialLinks: [...SOCIAL_LINKS],
    floatingStars: [...FLOATING_STARS],
    audienceAssets: { freeLessonsPhones: ASSETS.freeLessonsPhones },
  };
}

export const defaultLocale: Locale = "ru";
