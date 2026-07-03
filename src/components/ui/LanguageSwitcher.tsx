"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, content } = useLocale();

  const options: { id: Locale; label: string }[] = [
    { id: "ru", label: content.uiLabels.languageRu },
    { id: "tj", label: content.uiLabels.languageTj },
  ];

  return (
    <div
      className={`inline-flex rounded-full border border-white/15 bg-black/40 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => {
        const active = locale === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLocale(option.id)}
            className={`rounded-full px-3 py-1.5 font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-wider transition-colors ${
              active
                ? "bg-orange-gradient text-white"
                : "text-gray hover:text-white"
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
