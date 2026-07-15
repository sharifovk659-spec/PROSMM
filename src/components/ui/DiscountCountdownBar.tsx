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
    <div className="flex min-w-[36px] flex-col items-center sm:min-w-[44px]">
      <span className="font-[family-name:var(--font-bebas)] text-lg leading-none tracking-wide text-white sm:text-xl">
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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[170] flex justify-center">
      <a
        href={DISCOUNT.href}
        className="discount-bar pointer-events-auto flex w-full items-center justify-between gap-2 border-b border-[#ff9652]/35 bg-[#120c08]/96 px-3 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.45)] backdrop-blur-md sm:gap-4 sm:px-6 sm:py-2.5"
      >
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center justify-center rounded-lg bg-orange-gradient px-2 py-1 font-[family-name:var(--font-bebas)] text-base leading-none tracking-wide text-white sm:rounded-xl sm:px-2.5 sm:py-1.5 sm:text-lg">
            −{DISCOUNT.percent}%
          </span>
          <span className="hidden font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffb07a] sm:inline sm:text-xs">
            {uiLabels.discountTitle}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <TimeCell value={pad(time.days)} label={uiLabels.discountDays} />
          <span className="pb-2.5 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.hours)} label={uiLabels.discountHours} />
          <span className="pb-2.5 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.minutes)} label={uiLabels.discountMinutes} />
          <span className="pb-2.5 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.seconds)} label={uiLabels.discountSeconds} />
        </div>

        <span className="shrink-0 rounded-full border border-[#ff9652]/45 px-2.5 py-1 font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.12em] text-white sm:px-3 sm:py-1.5 sm:text-[10px]">
          {uiLabels.discountCta}
        </span>
      </a>
    </div>
  );
}
