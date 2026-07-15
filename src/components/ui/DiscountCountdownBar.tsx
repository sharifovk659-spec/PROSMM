"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/i18n";
import { DISCOUNT } from "@/i18n/static";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(endsAt: string): TimeLeft {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const totalSec = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
    expired: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function TimeCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-[36px] flex-col items-center rounded-lg border border-white/10 bg-black/35 px-1.5 py-1 sm:min-w-[46px] sm:rounded-xl sm:px-2 sm:py-1.5">
      <span className="font-[family-name:var(--font-bebas)] text-base leading-none tracking-wide text-white sm:text-xl md:text-2xl">
        {value}
      </span>
      <span className="mt-0.5 font-[family-name:var(--font-oswald)] text-[7px] font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

export function DiscountCountdownBar() {
  const { uiLabels } = useContent();
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(DISCOUNT.endsAt));

  useEffect(() => {
    setTime(getTimeLeft(DISCOUNT.endsAt));
    const id = window.setInterval(() => {
      setTime(getTimeLeft(DISCOUNT.endsAt));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (time.expired) return null;

  return (
    <div className="discount-top-bar fixed inset-x-0 top-0 z-[170]">
      <a
        href={DISCOUNT.href}
        className="relative flex w-full items-center justify-center gap-2 overflow-hidden px-2 py-2 sm:gap-4 sm:px-4 sm:py-2.5"
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#1a0c04_0%,#3d1608_35%,#ff7a2f_52%,#3d1608_68%,#120805_100%)]"
          aria-hidden
        />
        <span
          className="discount-top-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex w-full max-w-6xl items-center justify-between gap-2 sm:gap-4">
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <span className="discount-percent-pulse inline-flex items-center justify-center rounded-lg bg-black/40 px-2 py-1 font-[family-name:var(--font-bebas)] text-lg leading-none tracking-wide text-white ring-1 ring-white/25 sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-2xl">
              −{DISCOUNT.percent}%
            </span>
            <span className="hidden font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:inline md:text-xs">
              {uiLabels.discountTitle}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            <TimeCell value={pad(time.days)} label={uiLabels.discountDays} />
            <span className="font-[family-name:var(--font-bebas)] text-sm text-white/70 sm:text-lg">:</span>
            <TimeCell value={pad(time.hours)} label={uiLabels.discountHours} />
            <span className="font-[family-name:var(--font-bebas)] text-sm text-white/70 sm:text-lg">:</span>
            <TimeCell value={pad(time.minutes)} label={uiLabels.discountMinutes} />
            <span className="font-[family-name:var(--font-bebas)] text-sm text-white/70 sm:text-lg">:</span>
            <TimeCell value={pad(time.seconds)} label={uiLabels.discountSeconds} />
          </div>

          <span className="inline-flex shrink-0 items-center rounded-full bg-white px-2.5 py-1.5 font-[family-name:var(--font-oswald)] text-[9px] font-bold uppercase tracking-[0.12em] text-black sm:px-4 sm:py-2 sm:text-[11px]">
            {uiLabels.discountCta}
          </span>
        </div>
      </a>
    </div>
  );
}
