"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/i18n";

const STORAGE_KEY = "prosmm-promo-end";
const PROMO_DURATION_MS = 24 * 60 * 60 * 1000;

function getPromoEndTime(): number {
  if (typeof window === "undefined") return Date.now() + PROMO_DURATION_MS;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = Number.parseInt(stored, 10);
    if (!Number.isNaN(end) && end > Date.now()) return end;
  }

  const end = Date.now() + PROMO_DURATION_MS;
  window.localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function TimerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="promo-timer-digit flex h-7 min-w-[2rem] items-center justify-center rounded-md border border-[#ff9652]/35 bg-black/50 px-1.5 font-[family-name:var(--font-bebas)] text-lg leading-none tracking-wide text-white sm:h-8 sm:min-w-[2.25rem] sm:text-xl">
        {value}
      </span>
      <span className="font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.14em] text-[#ffb07a]/75 sm:text-[9px]">
        {label}
      </span>
    </div>
  );
}

export function PromoBanner() {
  const { promo } = useContent();
  const [remaining, setRemaining] = useState(PROMO_DURATION_MS);

  useEffect(() => {
    const end = getPromoEndTime();

    const tick = () => {
      const next = Math.max(0, end - Date.now());
      setRemaining(next);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="relative z-[60] w-full">
      <div className="relative overflow-hidden border-b border-[#ff9652]/25 bg-[#080808]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,47,0.1)_0%,rgba(255,122,47,0.02)_50%,rgba(255,122,47,0.1)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 promo-shimmer opacity-50" aria-hidden />

        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-3 py-2.5 sm:gap-x-5 sm:px-6 sm:py-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-gradient px-2.5 py-1 font-[family-name:var(--font-bebas)] text-xl leading-none tracking-wide text-white sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-2xl">
              {promo.discount}
            </span>
            <p className="max-w-[9.5rem] font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase leading-tight tracking-[0.1em] text-white sm:max-w-none sm:text-xs sm:tracking-[0.12em]">
              {promo.title}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="hidden font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ff9652] sm:inline">
              {promo.timerLabel}
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <TimerUnit value={pad(days)} label={promo.days} />
              <span className="mb-3 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
              <TimerUnit value={pad(hours)} label={promo.hours} />
              <span className="mb-3 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
              <TimerUnit value={pad(minutes)} label={promo.minutes} />
              <span className="mb-3 font-[family-name:var(--font-bebas)] text-base text-[#ff9652]/70">:</span>
              <TimerUnit value={pad(seconds)} label={promo.seconds} />
            </div>
          </div>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#ff9652]/40 bg-[#ff7a2f]/12 px-3 py-1.5 font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#ffb07a] transition-colors hover:border-[#ff9652]/60 hover:text-white sm:text-[10px]"
          >
            {promo.cta}
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
