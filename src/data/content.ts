import type {
  AudienceItem,
  BenefitItem,
  Earner,
  Expert,
  FaqItem,
  FooterLink,
  NavLink,
  PricingPlan,
  ProgramModule,
  SocialLink,
  StarPosition,
  ViewSlide,
} from "./types";

export const sectionTitles = {
  benefits: "ЧТО ВЫ ПОЛУЧИТЕ НА КУРСЕ:",
  audience: "ДЛЯ КОГО ЭТОТ КУРС:",
  expertsBadge: "ОБ ЭКСПЕРТАХ",
  program: "ПРОГРАММА ОБУЧЕНИЯ",
  pricing: "ТАРИФЫ КУРСА",
  earnings: "ЗАРАБОТАЛИ С КУРСА",
  views: "ПРОСМОТРЫ",
  faq: "ОТВЕТЫ НА ВОПРОСЫ",
} as const;

export const uiLabels = {
  headerCta: "Заказать",
  getLessons: "ПОЛУЧИТЬ 2 УРОКА",
  fromExperts: "ОТ ЭКСПЕРТОВ",
  audienceStrip:
    "Этот курс будет особенно полезен тем, у кого уже есть аудитория и кто хочет монетизировать контент, а также тем, кто только начинает строить личный бренд с нуля.",
  moduleOutcome: "Итог модуля",
  showModules: "ПОКАЗАТЬ МОДУЛИ",
  hideModules: "СКРЫТЬ МОДУЛИ",
  purchase: "ПРИОБРЕСТИ",
  bestChoice: "ЛУЧШИЙ ВЫБОР",
  viewsCount: "просмотров",
  smmTag: "SMM",
  folderLessons: "2 урока",
  footerInfo: "ИНФОРМАЦИЯ",
  footerDocs: "ДОКУМЕНТЫ",
} as const;

export const navLinks: NavLink[] = [
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Эксперты", href: "#experts" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

export const freeLessonUrl =
  "https://www.youtube.com/watch?v=QJ0NAFQ-y9Y";

export const freeLessonsData = {
  badge: "БЕСПЛАТНО",
  title: "2 БЕСПЛАТНЫХ УРОКА",
  subtitle: "Смотрите уроки прямо на сайте — без оплаты и регистрации",
  channelEmbedSrc:
    "https://www.youtube-nocookie.com/embed/videoseries?list=UU57eWrUV3FSAF-Ov4sXEzYg",
  youtubeChannelUrl: "https://www.youtube.com/@muradlariba",
  videos: [
    { id: "QJ0NAFQ-y9Y", title: "Урок 1" },
    { id: "QJ0NAFQ-y9Y", title: "Урок 2" },
  ],
} as const;

export const audienceAssets = {
  freeLessonsPhones: "/images/lessons/free-lessons-phones.png?v=3",
};

export const heroFeatures = [
  {
    title: "ПРАКТИКА",
    description: "Только рабочие инструменты и пошаговые стратегии",
    icon: "rocket" as const,
  },
  {
    title: "РЕЗУЛЬТАТ",
    description: "Увеличьте охваты, клиентов и прибыль с SMM",
    icon: "target" as const,
  },
  {
    title: "ПОДДЕРЖКА",
    description: "Кураторы и поддержка на каждом этапе",
    icon: "chart" as const,
  },
];

export const heroData = {
  centerExpert: "/images/hero/1023202.jpg",
  subtitleLine1: "ЗАРАБАТЫВАЙ НА КОНТЕНТЕ",
  subtitleLine2: "С ПОМОЩЬЮ SMM",
  lessonCta: "ПОЛУЧИ 2 УРОКА БЕСПЛАТНО",
  collaborationText:
    "Громкая коллаборация сильнейших экспертов в бизнесе и продвижении в Таджикистане",
  collaborationNames: "НИГМАТОВ ИЛХОМ",
  footerText:
    "Увеличение узнаваемости, клиентов, прибыли и продаж при помощи контент-маркетинга в 2025 году",
  ctaText: "ПРИНЯТЬ УЧАСТИЕ",
  ctaHref: freeLessonUrl,
  purchaseHref: "#pricing",
};

export const floatingStars: StarPosition[] = [
  { top: "8%", left: "6%", size: 48, delay: 0, duration: 5 },
  { top: "14%", right: "8%", size: 36, delay: 0.8, duration: 6 },
  { bottom: "22%", left: "10%", size: 28, delay: 1.2, duration: 4.5 },
  { bottom: "18%", right: "6%", size: 52, delay: 0.4, duration: 5.5 },
  { top: "42%", left: "4%", size: 20, delay: 1.6, duration: 7 },
  { top: "38%", right: "5%", size: 24, delay: 2, duration: 6.5 },
];

export const courseBenefits: BenefitItem[] = [
  {
    image: "/images/benefits/benefit-1.svg",
    parts: [
      { text: "Поймёте, как " },
      { text: "упаковать экспертность", bold: true },
      { text: " и привлекать клиентов через SMM" },
    ],
  },
  {
    image: "/images/benefits/benefit-2.svg",
    parts: [
      { text: "Получите " },
      { text: "готовые уроки", bold: true },
      { text: " и материалы от экспертов курса" },
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
    image: "/images/benefits/benefit-4.svg",
    parts: [
      { text: "Освоите форматы с " },
      { text: "35.1 млн", bold: true },
      { text: " просмотров и больше" },
    ],
  },
  {
    image: "/images/benefits/benefit-5.svg",
    parts: [
      { text: "Получите " },
      { text: "поддержку кураторов", bold: true },
      { text: " на каждом этапе" },
    ],
  },
];

export const targetAudience: AudienceItem[] = [
  {
    image: "/images/audience/audience-1.jpg",
    title: "Начинающие и опытные блогеры",
    description:
      "У кого уже есть блог или соцсети и кто хочет научиться зарабатывать на контенте",
  },
  {
    image: "/images/audience/audience-2.jpg",
    title: "Владельцы личного бренда",
    description:
      "Предприниматели, коучи, консультанты и авторы, которые используют личный бренд для роста дохода",
  },
  {
    image: "/images/audience/audience-3.jpg",
    title: "Маркетологи и SMM-специалисты",
    description:
      "Профессионалы, которые хотят углубить знания в стратегиях монетизации для клиентов или личных проектов",
  },
  {
    image: "/images/audience/audience-4.jpg",
    title: "Владельцы малого и среднего бизнеса",
    description:
      "Предприниматели, которые ищут новые способы привлечения клиентов и роста дохода через монетизацию контента",
  },
];

export const experts: Expert[] = [
  {
    name: "НИГМАТОВ ИЛХОМ",
    role: "Основатель PROSMM · Эксперт по монетизации SMM",
    instagram: "@ilhom.smm",
    instagramUrl: "https://www.instagram.com/ilhom.smm/",
    image: "/images/experts/murad.jpg",
    achievements: [
      "96+ млн просмотров на лучшем SMM",
      "Обучил 3 000+ авторов контента",
      "7 собственных студий для съёмок",
      "Спикер на крупнейших SMM-конференциях",
    ],
  },
];

export const programModules: ProgramModule[] = [
  {
    number: 0,
    title: "Предобучение",
    lessons: [
      "Разговариваем на языке контент маркетинга",
      "Шапка профиля",
      "Анализ и настройка аккаунта",
      "Оформление шапки профиля",
      "Что нельзя делать со своей страницей",
      "Стоит ли дублировать контент (альтернативные площадки)",
    ],
    outcome:
      "Вы узнаете базовые настройки Instagram, функционал, как оживить страницу после ботов и розыгрышей, настроите аккаунт перед публикациями и узнаете об альтернативных площадках для коротких видео.",
  },
  {
    number: 1,
    title: "Психология личного бренда",
    lessons: [
      "Зачем нужен личный бренд и как он влияет на заработок?",
      "Синдром отложенных дел",
      "Страх вести блог из-за окружения",
      "Страх перед камерой",
      "Синдром отличника",
      "Какие знания есть у меня, и как они помогут людям?",
      "Что делать, если у тебя ещё нет экспертности?",
    ],
    outcome:
      "Поймёте, как формируется личный бренд в соцсетях, проработаете страхи осуждения и камеры, найдёте сильные стороны и раскроете свою экспертность.",
  },
  {
    number: 2,
    title: "Позиционирование + креативное мышление",
    lessons: [
      "Что такое позиционирование и зачем это нужно?",
      "Стратегии и этапы позиционирования бренда",
      "Как выявить сильные стороны для своего позиционирования?",
      "Как понять, верно ли вы выбрали позиционирование своего бренда?",
      "Как выйти из тени",
      "Упражнения для создания уникального блога",
      "Забери хлеб у креативщика",
    ],
    outcome:
      "Научитесь позиционированию, которое отражает экспертность и легко монетизируется, выявите сильные стороны личного бренда, выйдете «из тени» и создадите уникальный блог с креативными рубриками.",
  },
  {
    number: 3,
    title: "Визуал",
    lessons: [
      "Визуальный стиль блога",
      "Шрифты и типографика",
      "Цветовая палитра аккаунта",
      "Обложки и превью SMM",
      "Тренды визуала 2024",
      "Единый стиль в ленте",
    ],
    outcome:
      "Сформируете узнаваемый визуальный стиль блога: шрифты, цвета и обложки, которые выделяют вас в ленте.",
  },
  {
    number: 5,
    title: "Модуль масштабирования",
    lessons: [
      "Как масштабировать контент без выгорания",
      "Контент-план на месяц вперёд",
      "Серийный контент и рубрики",
      "Коллаборации и взаимный пиар",
      "Автоматизация публикаций",
      "Рост охватов через тренды",
    ],
    outcome:
      "Научитесь масштабировать производство SMM и расти в охватах без потери качества.",
  },
  {
    number: 6,
    title: "Модуль аналитики",
    lessons: [
      "Метрики Instagram: что важно отслеживать",
      "Анализ удержания и досмотров",
      "A/B тестирование обложек и хуков",
      "Разбор статистики конкурентов",
      "Корректировка стратегии по цифрам",
      "Отчётность и планирование роста",
    ],
    outcome:
      "Сможете читать аналитику, находить точки роста и принимать решения на основе данных.",
  },
  {
    number: 7,
    title: "Модуль личного бренда",
    lessons: [
      "Визуальный стиль и узнаваемость",
      "Голос бренда и tone of voice",
      "Сторителлинг в SMM",
      "Работа с репутацией",
      "Личный бренд эксперта vs блогера",
      "Упаковка экспертности",
    ],
    outcome:
      "Сформируете цельный личный бренд, который выделяет вас среди конкурентов и усиливает доверие.",
  },
  {
    number: 8,
    title: "Модуль воронок",
    lessons: [
      "Воронка: просмотры → подписки → заявки",
      "Лид-магниты через SMM",
      "Прогрев аудитории контентом",
      "Триггерные SMM для продаж",
      "Связка Instagram + Telegram",
      "Закрытие на консультацию и продукт",
    ],
    outcome:
      "Построите работающую воронку продаж через SMM и начнёте получать целевые заявки.",
  },
  {
    number: 9,
    title: "Модуль делегирования",
    lessons: [
      "Что делегировать в контенте",
      "Поиск монтажёра и сценариста",
      "ТЗ для команды",
      "Контроль качества без микроменеджмента",
      "Бюджет на команду",
      "Масштабирование через ассистентов",
    ],
    outcome:
      "Научитесь делегировать рутину и масштабировать блог с командой, сохраняя качество.",
  },
  {
    number: 10,
    title: "Как вести блог без лица",
    lessons: [
      "Форматы faceless SMM",
      "Озвучка и субтитры",
      "Визуальные рубрики без камеры",
      "Анонимный личный бренд",
      "Монетизация без показа лица",
      "Кейсы успешных faceless-блогов",
    ],
    outcome:
      "Сможете вести прибыльный блог без показа лица, используя креативные форматы и сильную подачу.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "САМОСТОЯТЕЛЬНЫЙ",
    price: "14.990₽",
    oldPrice: "24.990₽",
    image: "/images/pricing/plan-1.svg",
    grayscale: true,
    modules: [
      { number: 0, title: "Предобучение" },
      { number: 1, title: "Психология личного бренда" },
      { number: 2, title: "Позиционирование + креативное мышление" },
      { number: 3, title: "Визуал" },
      { number: 5, title: "Модуль масштабирования" },
      { number: 6, title: "Модуль аналитики" },
    ],
    bonuses: [
      "Доступ к материалам на 3 месяца",
      "Самостоятельное обучение",
    ],
  },
  {
    name: "ПРЕМИУМ",
    price: "39.990₽",
    oldPrice: "49.990₽",
    image: "/images/pricing/plan-2.svg",
    modules: [
      { number: 0, title: "Предобучение" },
      { number: 1, title: "Психология личного бренда" },
      { number: 2, title: "Позиционирование + креативное мышление" },
      { number: 3, title: "Визуал" },
      { number: 5, title: "Модуль масштабирования" },
      { number: 6, title: "Модуль аналитики" },
      { number: 7, title: "Модуль личного бренда" },
      { number: 8, title: "Модуль воронок" },
      { number: 9, title: "Модуль делегирования" },
    ],
    extras: [
      "Мини-группа до 30 человек",
      "Куратор",
      "Проверка домашних заданий",
      "Обратная связь от экспертов",
      "Закрытый чат участников",
      "Еженедельные эфиры",
    ],
  },
  {
    name: "VIP",
    displayTitle: "👑 VIP 👑",
    price: "99.990₽",
    oldPrice: "119.990₽",
    image: "/images/pricing/plan-3.svg",
    modules: [
      { number: 0, title: "Предобучение" },
      { number: 1, title: "Психология личного бренда" },
      { number: 2, title: "Позиционирование + креативное мышление" },
      { number: 3, title: "Визуал" },
      { number: 5, title: "Модуль масштабирования" },
      { number: 6, title: "Модуль аналитики" },
      { number: 7, title: "Модуль личного бренда" },
      { number: 8, title: "Модуль воронок" },
      { number: 9, title: "Модуль делегирования" },
      { number: 10, title: "Как вести блог без лица", highlight: true },
    ],
    extras: [
      "Группа 10 человек",
      "4 сессии с Илхомом",
      "Система сертификации",
      "Личная стратегия с экспертом",
      "Съёмка SMM в студии PROSMM",
      "Персональный куратор 24/7",
      "Гарантия результата",
    ],
    vip: true,
  },
];

export const lessonsBanner = {
  titleLine1: "ПОЛУЧИТЬ УРОКИ",
  titleLine2: "ОТ ЭКСПЕРТА",
  subtitle:
    "2 бесплатных урока от создателя PROSMM — смотрите бесплатно прямо на сайте",
  ctaText: "ХОЧУ УРОКИ",
  expert: { image: "/images/experts/murad.jpg", name: "НИГМАТОВ ИЛХОМ" },
  phoneScreen: "/images/lessons/phone-screen.svg",
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: freeLessonUrl },
  { name: "Telegram", href: "#" },
  { name: "TikTok", href: "#" },
];

export const earners: Earner[] = [
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
];

export const viewSlides: ViewSlide[] = [
  {
    views: "4.2M",
    label: "SMM Натальи Шульман",
    screens: ["/images/views/screen-1.svg", "/images/views/screen-2.svg"],
  },
  {
    views: "1.8M",
    label: "SMM из подкаста",
    screens: ["/images/views/screen-3.svg"],
  },
  {
    views: "890K",
    label: "Pianobar — SMM под ключ",
    screens: ["/images/views/screen-4.svg", "/images/views/screen-5.svg"],
  },
  {
    views: "650K",
    label: "Driveo — салон авто",
    screens: ["/images/views/screen-6.svg"],
  },
  {
    views: "421K",
    label: "Подкаст Валерия Якубцевича",
    screens: ["/images/views/screen-7.svg", "/images/views/screen-8.svg"],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Нужно ли мне иметь iPhone?",
    answer:
      "Нет, iPhone не обязателен. Все уроки сняты так, чтобы вы могли снимать и монтировать SMM на любом смартфоне — Android или iPhone. Главное — камера и желание учиться.",
  },
  {
    question: "Сколько будет доступ к курсу?",
    answer:
      "В тарифе «Самостоятельный» доступ к записям — 6 месяцев. В тарифах «Премиум» и «VIP» доступ сохраняется навсегда, включая все будущие обновления курса.",
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
];

export const footerInfoLinks: FooterLink[] = [
  { label: "О курсе", href: "#" },
  { label: "Программа обучения", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Эксперты", href: "#experts" },
  { label: "Контакты", href: "#contact" },
];

export const footerDocLinks: FooterLink[] = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Пользовательское соглашение", href: "#" },
  { label: "Публичная оферта", href: "#" },
  { label: "Согласие на обработку данных", href: "#" },
];
