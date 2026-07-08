export const CONTACT = {
  phone: "+992 90 123 45 67",
  phoneHref: "tel:+992901234567",
  whatsapp: "+992 90 123 45 67",
  whatsappHref: "https://wa.me/992901234567",
  email: "info@prosmm.tj",
  emailHref: "mailto:info@prosmm.tj",
} as const;

export const LINKS = {
  freeLessonUrl: "https://www.youtube.com/watch?v=QJ0NAFQ-y9Y",
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
  { id: "r1", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-01.jpg", name: "@Muhammad_dudarkaev", result: "60.000 RUB" },
  { id: "r2", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-02.jpg", name: "@osha3", result: "90.000 RUB" },
  { id: "r3", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-03.jpg", name: "@vasi", result: "20.000 RUB" },
  { id: "r4", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-05.jpg", name: "@Ruslan", result: "110.000 RUB" },
  { id: "r5", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-07.jpg", name: "@Anna", result: "8.000 RUB" },
  { id: "r6", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-09.jpg", name: "@kamil", result: "42.000 RUB" },
  { id: "r7", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-10.jpg", name: "@diana_smm", result: "72.000 RUB" },
  { id: "r8", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-11.jpg", name: "@timur", result: "33.000 RUB" },
  { id: "r9", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-12.jpg", name: "@sabina", result: "55.000 RUB" },
  { id: "r10", videoId: "QJ0NAFQ-y9Y", avatar: "/images/earnings/avatar-04.jpg", name: "@blog", result: "30.000 RUB" },
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
