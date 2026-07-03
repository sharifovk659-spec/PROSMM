"use client";

import { useContent } from "@/i18n";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const { footerInfoLinks, uiLabels, contactSection } = useContent();

  const contactItems = [
    {
      label: contactSection.phoneLabel,
      value: contactSection.phone,
      href: contactSection.phoneHref,
    },
    {
      label: contactSection.whatsappLabel,
      value: contactSection.whatsapp,
      href: contactSection.whatsappHref,
    },
    {
      label: contactSection.emailLabel,
      value: contactSection.email,
      href: contactSection.emailHref,
    },
    {
      label: contactSection.instagramLabel,
      value: contactSection.instagramHandle,
      href: contactSection.instagramUrl,
    },
  ];

  return (
    <footer className="section-padding relative border-t border-white/5 bg-black-soft !py-12">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <div className="flex items-center gap-1">
              <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-white">
                PRO
              </span>
              <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-gradient-orange">
                SMM
              </span>
            </div>
            <p className="mt-3 max-w-xs font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray">
              {uiLabels.footerTagline}
            </p>
            <SocialIcons className="mt-5" />
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.2em] text-gradient-orange">
              {uiLabels.footerInfo}
            </h3>
            <ul className="mt-5 space-y-3">
              {footerInfoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray transition-colors duration-[250ms] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.2em] text-gradient-orange">
              {uiLabels.footerContacts}
            </h3>
            <ul className="mt-5 space-y-3">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <span className="block font-[family-name:var(--font-oswald)] text-[10px] uppercase tracking-wider text-[#ff9652]/80">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-gray transition-colors group-hover:text-white">
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
          <p className="text-center text-[11px] text-gray/70 sm:text-xs">
            © {new Date().getFullYear()} PROSMM. {uiLabels.footerRights}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
