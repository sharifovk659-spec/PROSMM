"use client";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  return (
    <header className="section-padding-inline fixed left-0 right-0 z-50 flex justify-end py-4 lg:hidden" style={{ top: "var(--promo-banner-height, 52px)" }}>
      <LanguageSwitcher />
    </header>
  );
}
