"use client";

import { FreeLessonsProvider } from "@/components/providers/FreeLessonsProvider";
import { PurchaseProvider } from "@/components/providers/PurchaseProvider";
import { FloatingContactDock } from "@/components/ui/FloatingContactDock";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <FreeLessonsProvider>
        <PurchaseProvider>
          {children}
          <FloatingContactDock />
        </PurchaseProvider>
      </FreeLessonsProvider>
    </LocaleProvider>
  );
}
