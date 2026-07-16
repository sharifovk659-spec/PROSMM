export type { Locale, LocaleDictionary } from "./types";
export { LINKS, ASSETS, SOCIAL_LINKS, CONTACT, buildWhatsAppPurchaseUrl, type PurchaseFormPayload } from "./static";
export { buildContent, defaultLocale, type SiteContent } from "./build-content";
export { LocaleProvider, useLocale, useContent } from "./LocaleProvider";
