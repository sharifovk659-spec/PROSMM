import { EXPERT_STATIC, LINKS } from "./static";
import type { LocaleDictionary } from "./types";

const programModulesTj: LocaleDictionary["programModules"] = [
  {
    number: 0,
    title: "Пешомӯз",
    lessons: [
      "Муқаддима ба курс ва омодагии асосӣ",
    ],
    outcome:
      "Муқаддима ба курс ва омодагии асосӣ",
  },
  {
    number: 1,
    title: "Упаковка",
    lessons: [
      "Бастабандии профил ва экспертиза",
    ],
    outcome:
      "Бастабандии профил ва экспертиза",
  },
  {
    number: 2,
    title: "Коди контент",
    lessons: [
      "Системаи эҷоди контент",
    ],
    outcome:
      "Системаи эҷоди контент",
  },
  {
    number: 3,
    title: "Сёмка",
    lessons: [
      "Суратбардории контенти SMM",
    ],
    outcome:
      "Суратбардории контенти SMM",
  },
  {
    number: 4,
    title: "Монтаж",
    lessons: [
      "Монтаж ва ороиши роликҳо",
    ],
    outcome:
      "Монтаж ва ороиши роликҳо",
  },
  {
    number: 5,
    title: "Таргет",
    lessons: [
      "Таргет ва тарғибот",
    ],
    outcome:
      "Таргет ва тарғибот",
  },
  {
    number: 6,
    title: "Продажа",
    lessons: [
      "Фурӯш тавассути контент",
    ],
    outcome:
      "Фурӯш тавассути контент",
  },
  {
    number: 7,
    title: "Делегатсия ва масштаб",
    lessons: [
      "Делегатсия ва масштабсозӣ",
    ],
    outcome:
      "Делегатсия ва масштабсозӣ",
  },
  {
    number: 8,
    title: "Блог бе рӯй",
    lessons: [
      "Бурдани блог бе нишон додани рӯй",
    ],
    outcome:
      "Бурдани блог бе нишон додани рӯй",
  },
  {
    number: 9,
    title: "Зеҳни сунъӣ, ИИ",
    lessons: [
      "Асбобҳои ИИ барои контент",
    ],
    outcome:
      "Асбобҳои ИИ барои контент",
  },
  {
    number: 10,
    title: "Чӣ тавр тиҷорат ва ё агентсии калон сохт",
    lessons: [
      "Стратегияи тиҷорат ва агентсии калон",
    ],
    outcome:
      "Стратегияи тиҷорат ва агентсии калон",
  },
];

export const tjDictionary: LocaleDictionary = {
  sectionTitles: {
    benefits: "ДАР КУРС ЧӢ МЕГИРЕД:",
    audience: "ИН КУРС БАРОИ КИСТ:",
    expertsBadge: "ДАР БОРАИ ЭКСПЕРТ",
    program: "БАРНОМАИ ОМӮЗИШ",
    pricing: "ТАРИФҲОИ КУРС",
    earnings: "АЗ КУРС ДАРОМОД КАРДАНД",
    reviews: "ФИКРҲОИ ДОНИШҶӮЁН",
    faq: "ҶАВОБ БА САВОЛҲО",
    contact: "ТАМОС",
  },
  uiLabels: {
    headerCta: "ДАРСИ РОЙГОН",
    getLessons: "ДАРСИ РОЙГОН",
    fromExperts: "АЗ ЭКСПЕРТ",
    audienceStrip:
      "Ин курс на танҳо назария медиҳад — 95%-и он амалия аст. Шумо на фақат меомӯзед, балки дар амал татбиқ мекунед: аз сифр то соҳибкор шудан, аз омӯхтани SMM то гирифтани фармоишҳои аввалин, аз бизнеси хурд то ҷалби мизоҷони нав тавассути интернет. Ҳар дарс — қадами мушаххас ба сӯи натиҷа.",
    moduleOutcome: "Натиҷаи модул",
    showModules: "НИШОН ДОДАНИ МОДУЛҲО",
    hideModules: "ПИНҲОН КАРДАНИ МОДУЛҲО",
    purchase: "ХАРИДОРИ",
    bestChoice: "БЕҲТАРИН ИНТИХОБ",
    folderLessons: "1 дарси бе пул",
    footerInfo: "МАЪЛУМОТ",
    footerDocs: "ҲУҶҶАТҲО",
    footerRights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    footerContacts: "ТАМОС",
    footerTagline: "Омӯзиши SMM ва монетизатсияи контент дар Тоҷикистон",
    instagram: "Instagram",
    languageRu: "РУ",
    languageTj: "ТОҶ",
    reviewsSubtitle: "Ҳикояҳои ҳақиқии донишҷӯён — барои тамошо видеоро пахш кунед",
    playReview: "Отзивро тамошо кунед",
    closeReview: "Пӯшидан",
    clickHint: "Зер кунед",
  },
  navLinks: [
    { label: "Барнома", href: LINKS.program },
    { label: "Тарифҳо", href: LINKS.pricing },
    { label: "Экспертҳо", href: LINKS.experts },
    { label: "FAQ", href: LINKS.faq },
    { label: "Тамос", href: LINKS.contact },
  ],
  heroFeatures: [
    {
      title: "АМАЛИЯТ",
      description: "Танҳо асбобҳои коркард ва стратегияҳои қадам ба қадам",
      icon: "rocket",
    },
    {
      title: "НАТИҶА",
      description: "Охватҳо, муштариён ва фоидаро бо SMM зиёд кунед",
      icon: "target",
    },
    {
      title: "ДАСТГИРӢ",
      description: "Кураторҳо ва дастгирӣ дар ҳар марҳила",
      icon: "chart",
    },
  ],
  hero: {
    hashtagTraining: "ОМӮЗИШ",
    hashtagSmm: "SMM",
    subtitleLine1: "АЗ КОНТЕНТ ДАРОМОД КУН",
    subtitleLine2: "БО ЁРИИ SMM",
    lessonCta: "ДАРСИ РОЙГОН",
    collaborationText:
      "Коллаборатсияи баланди қавитарин экспертҳои бизнес ва тарғибот дар Тоҷикистон",
    collaborationNames: EXPERT_STATIC.name,
    footerText:
      "Зиёд кардани муштариён, фоида ва фурӯш тавассути контент-маркетинг дар соли 2026",
    ctaText: "ИШТИРОК КУНЕД",
  },
  freeLessons: {
    badge: "РОЙГОН",
    title: "ДАРСИ РОЙГОН",
    subtitle: "Барои онҳое, ки як дарс кофӣ аст — мустақиман дар сайт тамошо кунед",
    lessonTab: "Дарс",
    channelTab: "Ҳамаи видеоҳои канал",
    closeLabel: "Пӯшидан",
    videos: [{ id: "cCQDPZpi9Ug", title: "Дарси ройгон" }],
  },
  courseBenefits: [
    {
      image: "/images/benefits/benefit-1.svg",
      parts: [
        { text: "Мефаҳмед, чӣ тавр " },
        { text: "самтро интихоб карда", bold: true },
        { text: ", дар бизнес ё SMM пешравӣ кунед" },
      ],
    },
    {
      image: "/images/benefits/benefit-2.svg",
      parts: [
        { text: "Мегиред " },
        { text: "дарсҳои онлайнӣ ва оффлайнӣ", bold: true },
        { text: " бо ҳамроҳии материалҳо аз эксперти курс ва кураторҳо" },
      ],
    },
    {
      image: "/images/benefits/benefit-3.svg",
      parts: [
        { text: "Меомӯзед " },
        { text: "даромад кардан", bold: true },
        { text: " аз контент аз сифр" },
      ],
    },
    {
      image: "/images/benefits/benefit-5.svg",
      parts: [
        { text: "Мегиред дастгирии куратор ва эксперти курсро дар муддати курс ва " },
        { text: "3 моҳи оянда", bold: true },
        { text: ", то шумо ба натиҷа расед" },
      ],
    },
  ],
  targetAudience: [
    {
      image: "/images/audience/audience-1.jpg",
      title: "Соҳибони бизнес",
      description:
        "Барои онҳое, ки мехоҳанд тавассути SMM фурӯши худро зиёд карда, мизоҷони бештар ҷалб намоянд ва бизнеси худро рушд диҳанд.",
    },
    {
      image: "/images/audience/audience-3.jpg",
      title: "Мехоҳанд аз SMM-специалист шаванд",
      description:
        "Барои шахсоне, ки мехоҳанд касби серталаби SMM-ро омӯзанд ва аз хона ё фосилавӣ, бе раис ва бо дилхоҳ мизоҷ ҳамкори кор карда озод аз 10 000 сомонӣ дар як моҳ даромад ба даст оранд.",
    },
    {
      image: "/images/audience/audience-4.jpg",
      title: "Бизнеси худро аз 0 дар интернет сар карда пеш баранд",
      description:
        "Барои онҳое, ки мехоҳанд бо ёрии SMM бизнесро дар интернет кушоянд ва ба хароҷоти кам, бизнеси худро аз 0 бе риски зиёд сар карда пулҳои калон кор кунанд.",
    },
  ],
  experts: [
    {
      name: EXPERT_STATIC.name,
      role: "Асосгузори курси PRO SMM — експерти SMM ва бизнес дар интернет",
      instagram: EXPERT_STATIC.instagram,
      instagramUrl: EXPERT_STATIC.instagramUrl,
      image: EXPERT_STATIC.image,
      achievements: [
        "700+ Шогирдони курс",
        "2 Бизнеси сердаромади худ",
        "1000+ Бизнесҳои пешбурда",
        "49 ҳазор подписчик",
      ],
    },
  ],
  programModules: programModulesTj,
  pricingPlans: [
    {
      name: "СТАНДАРТ ОНЛАЙН",
      price: "14.990₽",
      oldPrice: "24.990₽",
      image: "/images/pricing/plan-1.svg",
      grayscale: true,
      modules: programModulesTj
        .filter((m) => m.number <= 9)
        .map((m) => ({ number: m.number, title: m.title })),
      bonuses: [
        "Дастрасӣ ба материалҳои курс то 3 моҳ",
        "Омӯзиши мустақил",
        "Студияи ройгон дар Душанбе то охири дарсҳо",
        "Выпускной дар ресторан",
      ],
    },
    {
      name: "ПРЕМИУМ ОНЛАЙН ВА ОФФЛАЙН",
      price: "39.990₽",
      oldPrice: "49.990₽",
      image: "/images/pricing/plan-2.svg",
      modules: programModulesTj
        .filter((m) => m.number <= 9)
        .map((m) => ({ number: m.number, title: m.title })),
      extras: [
        "Мини-гурӯҳ то 30 нафар",
        "Куратор ва эксперт",
        "Санҷиши вазифаҳои хонагӣ",
        "Алоқаи баргашт аз эксперт",
        "Чати пӯшидаи иштирокчиён",
        "Ҳар ҳафта встречаи оффлайнӣ",
        "Выпускной дар ресторан",
        "Студияи ройгон дар Душанбе то охири курс",
      ],
    },
    {
      name: "ВИП ОНЛАЙН ВА ОФФЛАЙН",
      displayTitle: "👑 VIP 👑",
      price: "99.990₽",
      oldPrice: "119.990₽",
      image: "/images/pricing/plan-3.svg",
      modules: programModulesTj.map((m) => ({
        number: m.number,
        title: m.title,
        highlight: m.number === 10,
      })),
      extras: [
        "Гурӯҳи 5 нафар",
        "Кор танҳо бо эксперт ва каме бо куратор",
        "Стратегияи шахсӣ бо эксперт",
        "Куратори шахсӣ 24/7",
        "Санҷиши вазифаҳои хонагӣ",
        "Чати пӯшидаи иштирокчиён",
        "Ҳар ҳафта встречаи оффлайнӣ",
        "Выпускной дар ресторан",
        "Кафолати натиҷа",
      ],
      vip: true,
    },
  ],
  contactSection: {
    subtitle:
      "Бо дастаи PROSMM тамос гиред — ба саволҳо оид ба курс, тарифҳо ва омӯзиш ҷавоб медиҳем",
    locationLabel: "Ҷойгиршавӣ",
    locationValue: "Тоҷикистон",
    phoneLabel: "Телефон",
    phoneHint: "Дар вақти корӣ занг занед",
    whatsappLabel: "WhatsApp",
    whatsappHint: "Ҷавоби зуд дар мессенҷер",
    emailLabel: "Email",
    emailHint: "Барои дархостҳои корӣ ва ҳамкорӣ",
    instagramLabel: "Instagram",
    instagramHint: "Дар Direct нависед",
    expertCardTitle: "Эксперти шумо",
    responseTime: "Одатан дар давоми 24 соат ҷавоб медиҳем",
  },
  lessonsBanner: {
    titleLine1: "1 ДАРСИ РОЙГОН",
    titleLine2: "АЗ ЭКСПЕРТ",
    subtitle: "Дарси пул кор кардан аз интернет бо тавассути телефон",
    ctaText: "ТАМОШО КУНЕД",
  },
  faqItems: [
    {
      question: "Оё iPhone лозим аст?",
      answer:
        "Не, iPhone ҳатмӣ нест. Ҳамаи дарсҳо чунин сабт шудаанд, ки шумо метавонед SMM-ро дар ҳар гуна смартфон — Android ё iPhone — сабт ва монтаж кунед. Муҳим — камера ва хоҳиши омӯхтан.",
    },
    {
      question: "Дастрасӣ ба курс чанд вақт мешавад?",
      answer:
        "Дар тарифи «Стандарт онлайн» дастрасӣ ба материалҳо — то 3 моҳ. Дар тарифҳои «Премиум» ва «VIP» дастрасӣ барои ҳамеша бо ҳамаи навсозиҳои ояндаи курс боқӣ мемонад.",
    },
    {
      question: "Метарсам, ки наметавонам",
      answer:
        "Ин табиӣ аст! Курс қадам ба қадам сохта шудааст — аз сифр то натиҷа. Шаблонҳо, чек-листҳо ва дастгирии кураторҳо хоҳед дошт. Аксари донишҷӯён бе таҷриба оғоз карда, аллакай аз контент даромад мегиранд.",
    },
    {
      question: "Чӣ тавр аз кишвари дигар пардохт кунам?",
      answer:
        "Пардохт бо кортҳои Visa ва Mastercard, инчунин тавассути PayPal ва криптовалюта қабул мешавад. Пас аз пардохт дастрасӣ худкор кушода мешавад — аз кишвари шумо вобаста нест.",
    },
  ],
  footerInfoLinks: [
    { label: "Барномаи омӯзиш", href: LINKS.program },
    { label: "Тарифҳо", href: LINKS.pricing },
    { label: "Экспертҳо", href: LINKS.experts },
    { label: "FAQ", href: LINKS.faq },
    { label: "Тамос", href: LINKS.contact },
  ],
  footerDocLinks: [],
};
