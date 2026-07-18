"use client";

import { useContent } from "@/i18n";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const { footerInfoLinks, uiLabels } = useContent();

  return (
    <footer className="section-padding relative border-t border-white/5 bg-black-soft !py-10">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-1">
              <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-white">
                PRO
              </span>
              <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-gradient-orange">
                SMM
              </span>
            </div>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray">
              {uiLabels.footerTagline}
            </p>
            <SocialIcons className="mt-5" />
          </div>

          <div className="md:text-right">
            <h3 className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.2em] text-gradient-orange">
              {uiLabels.footerInfo}
            </h3>
            <ul className="mt-5 space-y-2.5">
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
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <p className="text-center text-[11px] text-gray/60 sm:text-left sm:text-xs">
              © {new Date().getFullYear()} PROSMM. {uiLabels.footerRights}
            </p>
            <a
              href="https://komron.inovaauto.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[11px] text-gray/50 transition-colors hover:text-[#ff9652] sm:text-left sm:text-xs"
            >
              {uiLabels.footerDevCredit}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
