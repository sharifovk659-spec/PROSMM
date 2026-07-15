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
    <div className="flex min-w-[42px] flex-col items-center sm:min-w-[48px]">
      <span className="font-[family-name:var(--font-bebas)] text-xl leading-none tracking-wide text-white sm:text-2xl">
        {value}
      </span>
      <span className="mt-0.5 font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-[9px]">
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[150] flex justify-center px-3 pb-3 sm:px-4 sm:pb-4">
      <a
        href={DISCOUNT.href}
        className="discount-bar pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-3 rounded-2xl border border-[#ff9652]/40 bg-[#120c08]/95 px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:gap-5 sm:px-5 sm:py-3"
      >
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center justify-center rounded-xl bg-orange-gradient px-2.5 py-1.5 font-[family-name:var(--font-bebas)] text-lg leading-none tracking-wide text-white sm:px-3 sm:text-xl">
            −{DISCOUNT.percent}%
          </span>
          <span className="hidden font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffb07a] sm:inline sm:text-xs">
            {uiLabels.discountTitle}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <TimeCell value={pad(time.days)} label={uiLabels.discountDays} />
          <span className="pb-3 font-[family-name:var(--font-bebas)] text-lg text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.hours)} label={uiLabels.discountHours} />
          <span className="pb-3 font-[family-name:var(--font-bebas)] text-lg text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.minutes)} label={uiLabels.discountMinutes} />
          <span className="pb-3 font-[family-name:var(--font-bebas)] text-lg text-[#ff9652]/70">:</span>
          <TimeCell value={pad(time.seconds)} label={uiLabels.discountSeconds} />
        </div>

        <span className="hidden shrink-0 rounded-full border border-[#ff9652]/45 px-3 py-1.5 font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:inline-flex">
          {uiLabels.discountCta}
        </span>
      </a>
    </div>
  );
}
