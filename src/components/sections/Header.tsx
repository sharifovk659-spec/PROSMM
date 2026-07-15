"use client";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  return (
    <header className="section-padding-inline fixed left-0 right-0 top-[3.25rem] z-50 flex justify-end py-3 sm:top-[3.75rem] lg:hidden">
      <LanguageSwitcher />
    </header>
  );
}
