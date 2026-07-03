"use client";

import { FreeLessonsProvider } from "@/components/providers/FreeLessonsProvider";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <FreeLessonsProvider>{children}</FreeLessonsProvider>
    </LocaleProvider>
  );
}
