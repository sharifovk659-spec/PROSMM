import type { Locale, LocaleDictionary } from "./types";
import { EXPERT_STATIC, LINKS } from "./static";

const programModulesRu: LocaleDictionary["programModules"] = [
  {
    number: 0,
    title: "Предобучение",
    lessons: [
      "Введение в курс и базовая подготовка",
    ],
    outcome:
      "Введение в курс и базовая подготовка",
  },
  {
    number: 1,
    title: "Упаковка",
    lessons: [
      "Упаковка профиля и экспертности",
    ],
    outcome:
      "Упаковка профиля и экспертности",
  },
  {
    number: 2,
    title: "Код контента",
    lessons: [
      "Система создания контента",
    ],
    outcome:
      "Система создания контента",
  },
  {
    number: 3,
    title: "Съёмка",
    lessons: [
      "Съёмка SMM-контента",
    ],
    outcome:
      "Съёмка SMM-контента",
  },
  {
    number: 4,
    title: "Монтаж",
    lessons: [
      "Монтаж и оформление роликов",
    ],
    outcome:
      "Монтаж и оформление роликов",
  },
  {
    number: 5,
    title: "Таргет",
    lessons: [
      "Таргет и продвижение",
    ],
    outcome:
      "Таргет и продвижение",
  },
  {
    number: 6,
    title: "Продажи",
    lessons: [
      "Продажи через контент",
    ],
    outcome:
      "Продажи через контент",
  },
  {
    number: 7,
    title: "Делегирование и масштаб",
    lessons: [
      "Делегирование и масштабирование",
    ],
    outcome:
      "Делегирование и масштабирование",
  },
  {
    number: 8,
    title: "Блог без лица",
    lessons: [
      "Ведение блога без показа лица",
    ],
    outcome:
      "Ведение блога без показа лица",
  },
  {
    number: 9,
    title: "Искусственный интеллект, AI",
    lessons: [
      "ИИ-инструменты для контента",
    ],
    outcome:
      "ИИ-инструменты для контента",
  },
  {
    number: 10,
    title: "Как построить крупный бизнес или агентство",
    lessons: [
      "Стратегия крупного бизнеса и агентства",
    ],
    outcome:
      "Стратегия крупного бизнеса и агентства",
  },
];

export const ruDictionary: LocaleDictionary = {
  sectionTitles: {
    benefits: "ЧТО ВЫ ПОЛУЧИТЕ НА КУРСЕ:",
    audience: "ДЛЯ КОГО ЭТОТ КУРС:",
    expertsBadge: "ОБ ЭКСПЕРТАХ",
    program: "ПРОГРАММА ОБУЧЕНИЯ",
    pricing: "ТАРИФЫ КУРСА",
    earnings: "ЗАРАБОТАЛИ С КУРСА",
    reviews: "ОТЗЫВЫ УЧЕНИКОВ",
    faq: "ОТВЕТЫ НА ВОПРОСЫ",
    contact: "КОНТАКТЫ",
  },
  uiLabels: {
    headerCta: "БЕСПЛАТНЫЙ УРОК",
    getLessons: "БЕСПЛАТНЫЙ УРОК",
    fromExperts: "ОТ ЭКСПЕРТА",
    audienceStrip:
      "Этот курс даёт не только теорию — 95% это практика. Вы не просто учитесь, а применяете знания на деле: от нуля до предпринимателя, от изучения SMM до первых заказов, от малого бизнеса до привлечения новых клиентов через интернет. Каждый урок — конкретный шаг к результату.",
    moduleOutcome: "Итог модуля",
    showModules: "ПОКАЗАТЬ МОДУЛИ",
    hideModules: "СКРЫТЬ МОДУЛИ",
    purchase: "ПРИОБРЕСТИ",
    bestChoice: "ЛУЧШИЙ ВЫБОР",
    folderLessons: "1 урок бесплатно",
    footerInfo: "ИНФОРМАЦИЯ",
    footerDocs: "ДОКУМЕНТЫ",
    footerRights: "Все права защищены.",
    footerContacts: "КОНТАКТЫ",
    footerTagline: "Обучение SMM и монетизация контента в Таджикистане",
    instagram: "Instagram",
    languageRu: "РУ",
    languageTj: "ТОҶ",
    reviewsSubtitle: "Реальные истории учеников — нажмите на видео, чтобы посмотреть",
    playReview: "Смотреть отзыв",
    closeReview: "Закрыть",
    clickHint: "Нажмите",
    discountBadge: "-50%",
  },
  navLinks: [
    { label: "Программа", href: LINKS.program },
    { label: "Тарифы", href: LINKS.pricing },
    { label: "Эксперты", href: LINKS.experts },
    { label: "FAQ", href: LINKS.faq },
    { label: "Контакты", href: LINKS.contact },
  ],
  heroFeatures: [
    { title: "ПРАКТИКА", description: "Только рабочие инструменты и пошаговые стратегии", icon: "rocket" },
    { title: "РЕЗУЛЬТАТ", description: "Увеличьте охваты, клиентов и прибыль с SMM", icon: "target" },
    { title: "ПОДДЕРЖКА", description: "Кураторы и поддержка на каждом этапе", icon: "chart" },
  ],
  hero: {
    hashtagTraining: "ОБУЧЕНИЕ",
    hashtagSmm: "SMM",
    subtitleLine1: "ЗАРАБАТЫВАЙ НА КОНТЕНТЕ",
    subtitleLine2: "С ПОМОЩЬЮ SMM",
    lessonCta: "БЕСПЛАТНЫЙ УРОК",
    collaborationText:
      "Громкая коллаборация сильнейших экспертов в бизнесе и продвижении в Таджикистане",
    collaborationNames: EXPERT_STATIC.name,
    footerText:
      "Увеличение клиентов, прибыли и продаж при помощи контент-маркетинга в 2026 году",
    ctaText: "ПРИНЯТЬ УЧАСТИЕ",
  },
  freeLessons: {
    badge: "БЕСПЛАТНО",
    title: "БЕСПЛАТНЫЙ УРОК",
    subtitle: "Для тех, кому достаточно одного урока — смотрите прямо на сайте",
    lessonTab: "Урок",
    channelTab: "Все видео канала",
    closeLabel: "Закрыть",
    videos: [{ id: "cCQDPZpi9Ug", title: "Бесплатный урок" }],
  },
  courseBenefits: [
    {
      image: "/images/benefits/benefit-1.svg",
      parts: [
        { text: "Поймёте, как " },
        { text: "выбрать нишу", bold: true },
        { text: " и расти в бизнесе или SMM" },
      ],
    },
    {
      image: "/images/benefits/benefit-2.svg",
      parts: [
        { text: "Получите " },
        { text: "онлайн и оффлайн уроки", bold: true },
        { text: " вместе с материалами от эксперта курса и кураторов" },
      ],
    },
    {
      image: "/images/benefits/benefit-3.svg",
      parts: [
        { text: "Научитесь " },
        { text: "зарабатывать", bold: true },
        { text: " на контенте с нуля" },
      ],
    },
    {
      image: "/images/benefits/benefit-5.svg",
      parts: [
        { text: "Получите поддержку куратора и эксперта курса " },
        { text: "на протяжении курса и ещё 3 месяца", bold: true },
        { text: ", пока не дойдёте до результата" },
      ],
    },
  ],
  targetAudience: [
    {
      image: "/images/audience/audience-1.jpg",
      title: "Владельцы бизнеса",
      description:
        "Для тех, кто хочет через SMM увеличить продажи, привлечь больше клиентов и развить свой бизнес.",
    },
    {
      image: "/images/audience/audience-3.jpg",
      title: "Хотят стать SMM-специалистами",
      description:
        "Для тех, кто хочет освоить востребованную профессию SMM и работать из дома или удалённо, без начальника и с любыми клиентами, зарабатывая от 10 000 сомони в месяц.",
    },
    {
      image: "/images/audience/audience-4.jpg",
      title: "Открыть бизнес с нуля в интернете",
      description:
        "Для тех, кто с помощью SMM хочет открыть бизнес в интернете и при малых затратах, с нуля и без большого риска начать зарабатывать серьёзные деньги.",
    },
  ],
  experts: [
    {
      name: EXPERT_STATIC.name,
      role: "Основатель курса PRO SMM — эксперт по SMM и бизнесу в интернете",
      instagram: EXPERT_STATIC.instagram,
      instagramUrl: EXPERT_STATIC.instagramUrl,
      image: EXPERT_STATIC.image,
      achievements: [
        "700+ учеников курса",
        "2 собственных доходных бизнеса",
        "1000+ продвинутых бизнесов",
        "49 тысяч подписчиков",
      ],
    },
  ],
  programModules: programModulesRu,
  pricingPlans: [
    {
      name: "СТАНДАРТ ОНЛАЙН",
      price: "12.495₽",
      oldPrice: "24.990₽",
      image: "/images/pricing/plan-1.svg",
      grayscale: true,
      modules: programModulesRu
        .filter((m) => m.number <= 9)
        .map((m) => ({ number: m.number, title: m.title })),
      bonuses: [
        "Доступ к материалам курса до 3 месяцев",
        "Самостоятельное обучение",
        "Бесплатная студия в Душанбе до конца уроков",
        "Выпускной в ресторане",
      ],
    },
    {
      name: "ПРЕМИУМ ОНЛАЙН И ОФФЛАЙН",
      price: "24.995₽",
      oldPrice: "49.990₽",
      image: "/images/pricing/plan-2.svg",
      modules: programModulesRu
        .filter((m) => m.number <= 9)
        .map((m) => ({ number: m.number, title: m.title })),
      extras: [
        "Мини-группа до 30 человек",
        "Куратор и эксперт",
        "Проверка домашних заданий",
        "Обратная связь от эксперта",
        "Закрытый чат участников",
        "Еженедельные оффлайн-встречи",
        "Выпускной в ресторане",
        "Бесплатная студия в Душанбе до конца курса",
      ],
    },
    {
      name: "VIP ОНЛАЙН И ОФФЛАЙН",
      displayTitle: "👑 VIP 👑",
      price: "59.995₽",
      oldPrice: "119.990₽",
      image: "/images/pricing/plan-3.svg",
      modules: programModulesRu.map((m) => ({
        number: m.number,
        title: m.title,
        highlight: m.number === 10,
      })),
      extras: [
        "Группа 5 человек",
        "Работа только с экспертом и немного с куратором",
        "Личная стратегия с экспертом",
        "Персональный куратор 24/7",
        "Проверка домашних заданий",
        "Закрытый чат участников",
        "Еженедельные оффлайн-встречи",
        "Выпускной в ресторане",
        "Гарантия результата",
      ],
      vip: true,
    },
  ],
  contactSection: {
    subtitle:
      "Свяжитесь с командой PROSMM — ответим на вопросы о курсе, тарифах и обучении",
    locationLabel: "Локация",
    locationValue: "Таджикистан",
    phoneLabel: "Телефон",
    phoneHint: "Звоните в рабочее время",
    whatsappLabel: "WhatsApp",
    whatsappHint: "Быстрый ответ в мессенджере",
    emailLabel: "Email",
    emailHint: "Для деловых запросов и сотрудничества",
    instagramLabel: "Instagram",
    instagramHint: "Напишите в Direct",
    expertCardTitle: "Ваш эксперт",
    responseTime: "Обычно отвечаем в течение 24 часов",
  },
  lessonsBanner: {
    titleLine1: "1 БЕСПЛАТНЫЙ УРОК",
    titleLine2: "ОТ ЭКСПЕРТА",
    subtitle: "Урок о заработке в интернете через телефон",
    ctaText: "СМОТРЕТЬ УРОК",
  },
  promo: {
    discount: "-50%",
    title: "СКИДКА 50% НА ВСЕ ТАРИФЫ",
    timerLabel: "До конца",
    days: "День",
    hours: "Час",
    minutes: "Мин",
    seconds: "Сек",
    cta: "Тарифы",
  },
  purchaseForm: {
    title: "Покупка тарифа",
    subtitle: "Заполните данные — заявка придёт нам сразу",
    planLabel: "Тариф",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+992 ...",
    goalLabel: "Что хотите сделать?",
    goalPlaceholder: "Например: изучить SMM, продвинуть бизнес...",
    submit: "Отправить",
    sending: "Отправляем...",
    successTitle: "ОТПРАВЛЕНО!",
    successText: "Заявка получена. Мы скоро свяжемся с вами.",
    error: "Произошла ошибка. Попробуйте ещё раз.",
    close: "Закрыть",
    requiredHint: "Все поля обязательны",
  },
  faqItems: [
    {
      question: "Нужно ли мне иметь iPhone?",
      answer:
        "Нет, iPhone не обязателен. Все уроки сняты так, чтобы вы могли снимать и монтировать SMM на любом смартфоне — Android или iPhone. Главное — камера и желание учиться.",
    },
    {
      question: "Сколько будет доступ к курсу?",
      answer:
        "В тарифе «Стандарт онлайн» доступ к материалам — до 3 месяцев. В тарифах «Премиум» и «VIP» доступ сохраняется навсегда, включая все будущие обновления курса.",
    },
    {
      question: "Боюсь, что я не смогу",
      answer:
        "Это нормально! Курс построен пошагово — от нуля до результата. У вас будут шаблоны, чек-листы и поддержка кураторов. Большинство учеников начинали без опыта и уже зарабатывают на контенте.",
    },
    {
      question: "Как я могу оплатить с другой страны?",
      answer:
        "Принимаем оплату картами Visa и Mastercard, а также через PayPal и криптовалюту. После оплаты доступ открывается автоматически — независимо от вашей страны.",
    },
  ],
  footerInfoLinks: [
    { label: "Программа обучения", href: LINKS.program },
    { label: "Тарифы", href: LINKS.pricing },
    { label: "Эксперты", href: LINKS.experts },
    { label: "FAQ", href: LINKS.faq },
    { label: "Контакты", href: LINKS.contact },
  ],
  footerDocLinks: [],
};

