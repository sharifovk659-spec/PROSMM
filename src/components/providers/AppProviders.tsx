"use client";

import { FreeLessonsProvider } from "@/components/providers/FreeLessonsProvider";
import { DiscountCountdownBar } from "@/components/ui/DiscountCountdownBar";
import { FloatingContactDock } from "@/components/ui/FloatingContactDock";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <FreeLessonsProvider>
        {children}
        <DiscountCountdownBar />
        <FloatingContactDock />
      </FreeLessonsProvider>
    </LocaleProvider>
  );
}
