export const CONTACT = {
  phone: "+992 100 944 545",
  phoneHref: "tel:+992100944545",
  whatsapp: "+992 100 944 545",
  whatsappHref: "https://wa.me/992100944545",
  email: "info@prosmm.tj",
  emailHref: "mailto:info@prosmm.tj",
} as const;

/** Sticky site-wide −50% promo countdown (one fixed place). */
export const DISCOUNT = {
  percent: 50,
  endsAt: "2026-07-31T23:59:59+05:00",
  href: "#pricing",
} as const;

export function buildWhatsAppPurchaseUrl(planName: string, locale: "ru" | "tj" = "tj") {
  const text =
    locale === "ru"
      ? `Здравствуйте! Я с сайта PROSMM. Хочу купить тариф «${planName}».`
      : `Салом! Ман аз сайти PROSMM омадам. Мехоҳам тарифи «${planName}»-ро харидорӣ кунам.`;

  return `https://wa.me/992100944545?text=${encodeURIComponent(text)}`;
}

export const LINKS = {
  freeLessonUrl: "https://www.youtube.com/shorts/cCQDPZpi9Ug",
  instagram: "https://www.instagram.com/ilhom.smm/",
  instagramReels: "https://www.instagram.com/ilhom.smm/reels/",
  youtubeChannel: "https://www.youtube.com/@muradlariba",
  channelEmbedSrc:
    "https://www.youtube-nocookie.com/embed/videoseries?list=UU57eWrUV3FSAF-Ov4sXEzYg",
  purchase: "#pricing",
  program: "#program",
  pricing: "#pricing",
  experts: "#experts",
  faq: "#faq",
  contact: "#contact",
} as const;

export const ASSETS = {
  heroCenter: "/images/hero/1023202.jpg",
  expertImage: "/images/experts/murad.jpg",
  freeLessonsPhones: "/images/lessons/free-lessons-phones.png",
  lessonsPhoneScreen: "/images/lessons/phone-screen.svg",
  lessonsBannerImage: "/images/lessons/img-8322.jpg",
} as const;

export const EARNERS = [
  { username: "@Muhammad_dudarkaev", amount: "60.000 RUB", avatar: "/images/earnings/avatar-01.jpg" },
  { username: "@osha3", amount: "90.000 RUB", avatar: "/images/earnings/avatar-02.jpg" },
  { username: "@vasi", amount: "20.000 RUB", avatar: "/images/earnings/avatar-03.jpg" },
  { username: "@blog", amount: "30.000 RUB", avatar: "/images/earnings/avatar-04.jpg" },
  { username: "@Ruslan", amount: "110.000 RUB", avatar: "/images/earnings/avatar-05.jpg" },
  { username: "@Lema", amount: "500 RUB", avatar: "/images/earnings/avatar-06.jpg" },
  { username: "@Anna", amount: "8.000 RUB", avatar: "/images/earnings/avatar-07.jpg" },
  { username: "@vik", amount: "15.000 RUB", avatar: "/images/earnings/avatar-08.jpg" },
  { username: "@kamil", amount: "42.000 RUB", avatar: "/images/earnings/avatar-09.jpg" },
  { username: "@diana_smm", amount: "72.000 RUB", avatar: "/images/earnings/avatar-10.jpg" },
  { username: "@timur", amount: "33.000 RUB", avatar: "/images/earnings/avatar-11.jpg" },
  { username: "@sabina", amount: "55.000 RUB", avatar: "/images/earnings/avatar-12.jpg" },
] as const;

export const VIDEO_REVIEWS = [
  {
    id: "r1",
    platform: "instagram" as const,
    videoId: "DL1LgXkuraH",
    url: "https://www.instagram.com/reel/DL1LgXkuraH/",
    avatar: "/images/earnings/avatar-01.svg",
    name: "@review_01",
    result: "Instagram",
  },
  {
    id: "r2",
    platform: "instagram" as const,
    videoId: "DOeEfooDKvX",
    url: "https://www.instagram.com/reel/DOeEfooDKvX/",
    avatar: "/images/earnings/avatar-02.svg",
    name: "@review_02",
    result: "Instagram",
  },
  {
    id: "r3",
    platform: "instagram" as const,
    videoId: "DOgZAJPDMg3",
    url: "https://www.instagram.com/reel/DOgZAJPDMg3/",
    avatar: "/images/earnings/avatar-03.svg",
    name: "@review_03",
    result: "Instagram",
  },
  {
    id: "r4",
    platform: "instagram" as const,
    videoId: "DSl2nOfjBRq",
    url: "https://www.instagram.com/reel/DSl2nOfjBRq/",
    avatar: "/images/earnings/avatar-04.svg",
    name: "@review_04",
    result: "Instagram",
  },
  {
    id: "r5",
    platform: "instagram" as const,
    videoId: "DSuJJ0rDGVZ",
    url: "https://www.instagram.com/reel/DSuJJ0rDGVZ/",
    avatar: "/images/earnings/avatar-05.svg",
    name: "@review_05",
    result: "Instagram",
  },
  {
    id: "r6",
    platform: "instagram" as const,
    videoId: "C7MGsy_sb2j",
    url: "https://www.instagram.com/reel/C7MGsy_sb2j/",
    avatar: "/images/earnings/avatar-06.svg",
    name: "@review_06",
    result: "Instagram",
  },
  {
    id: "r7",
    platform: "instagram" as const,
    videoId: "C9_aH6wKRii",
    url: "https://www.instagram.com/reel/C9_aH6wKRii/",
    avatar: "/images/earnings/avatar-07.svg",
    name: "@review_07",
    result: "Instagram",
  },
  {
    id: "r8",
    platform: "instagram" as const,
    videoId: "C_sw-3msnHD",
    url: "https://www.instagram.com/reel/C_sw-3msnHD/",
    avatar: "/images/earnings/avatar-08.svg",
    name: "@review_08",
    result: "Instagram",
  },
  {
    id: "r9",
    platform: "instagram" as const,
    videoId: "DGVQbbrOHoW",
    url: "https://www.instagram.com/reel/DGVQbbrOHoW/",
    avatar: "/images/earnings/avatar-09.svg",
    name: "@review_09",
    result: "Instagram",
  },
  {
    id: "r10",
    platform: "instagram" as const,
    videoId: "DI38XuNs64K",
    url: "https://www.instagram.com/reel/DI38XuNs64K/",
    avatar: "/images/earnings/avatar-10.svg",
    name: "@review_10",
    result: "Instagram",
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "Instagram", href: LINKS.instagram },
  { name: "YouTube", href: LINKS.freeLessonUrl },
  { name: "Instagram Reels", href: LINKS.instagramReels },
] as const;

export const FLOATING_STARS = [
  { top: "8%", left: "6%", size: 48, delay: 0, duration: 5 },
  { top: "14%", right: "8%", size: 36, delay: 0.8, duration: 6 },
  { bottom: "22%", left: "10%", size: 28, delay: 1.2, duration: 4.5 },
  { bottom: "18%", right: "6%", size: 52, delay: 0.4, duration: 5.5 },
  { top: "42%", left: "4%", size: 20, delay: 1.6, duration: 7 },
  { top: "38%", right: "5%", size: 24, delay: 2, duration: 6.5 },
] as const;

export const EXPERT_STATIC = {
  instagram: "@ilhom.smm",
  instagramUrl: LINKS.instagram,
  image: ASSETS.expertImage,
  name: "НИГМАТОВ ИЛХОМ",
} as const;
