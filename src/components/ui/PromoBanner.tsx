"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/i18n";

const STORAGE_KEY = "prosmm-promo-end";
const PROMO_DURATION_MS = 24 * 60 * 60 * 1000;
const PROMO_HEIGHT_VAR = "--promo-banner-height";

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
    <div className="flex flex-col items-center gap-px">
      <span className="promo-timer-digit flex h-6 min-w-[1.55rem] items-center justify-center rounded-[6px] border border-[#ff9652]/40 bg-black/55 px-1 font-[family-name:var(--font-bebas)] text-[15px] leading-none tracking-wide text-white sm:h-7 sm:min-w-[1.9rem] sm:text-lg">
        {value}
      </span>
      <span className="font-[family-name:var(--font-oswald)] text-[7px] font-semibold uppercase tracking-[0.1em] text-[#ffb07a]/75 sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

export function PromoBanner() {
  const { promo } = useContent();
  const barRef = useRef<HTMLDivElement>(null);
  const [remaining, setRemaining] = useState(PROMO_DURATION_MS);

  useEffect(() => {
    const end = getPromoEndTime();

    const tick = () => {
      setRemaining(Math.max(0, end - Date.now()));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;

    const syncHeight = () => {
      const height = barRef.current?.offsetHeight ?? 44;
      root.style.setProperty(PROMO_HEIGHT_VAR, `${height}px`);
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    if (barRef.current) observer.observe(barRef.current);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
      root.style.removeProperty(PROMO_HEIGHT_VAR);
    };
  }, []);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <>
      <div ref={barRef} className="promo-bar-sticky fixed inset-x-0 top-0 z-[70] w-full">
        <div className="relative overflow-hidden border-b border-[#ff9652]/28 bg-[#060606]/96 backdrop-blur-md">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,47,0.14)_0%,rgba(255,80,20,0.03)_50%,rgba(255,122,47,0.12)_100%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 promo-shimmer opacity-45" aria-hidden />

          <div className="relative mx-auto flex max-w-6xl items-center gap-2 px-2.5 py-1.5 sm:gap-3 sm:px-5 sm:py-2">
            <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-md bg-orange-gradient px-2 py-0.5 font-[family-name:var(--font-bebas)] text-base leading-none text-white sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xl">
              {promo.discount}
            </span>

            <p className="min-w-0 flex-1 truncate font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.06em] text-white sm:flex-none sm:text-[11px] sm:tracking-[0.1em] lg:text-xs">
              {promo.title}
            </p>

            <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
              <span className="mr-0.5 hidden font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.12em] text-[#ff9652] md:inline">
                {promo.timerLabel}
              </span>
              <TimerUnit value={pad(days)} label={promo.days} />
              <span className="mb-2.5 font-[family-name:var(--font-bebas)] text-sm text-[#ff9652]/65">:</span>
              <TimerUnit value={pad(hours)} label={promo.hours} />
              <span className="mb-2.5 font-[family-name:var(--font-bebas)] text-sm text-[#ff9652]/65">:</span>
              <TimerUnit value={pad(minutes)} label={promo.minutes} />
              <span className="mb-2.5 font-[family-name:var(--font-bebas)] text-sm text-[#ff9652]/65">:</span>
              <TimerUnit value={pad(seconds)} label={promo.seconds} />
            </div>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/15 px-2 py-1 font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.1em] text-[#ffb07a] sm:px-3 sm:text-[10px]"
            >
              {promo.cta}
              <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden>
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

      <div
        className="w-full shrink-0"
        style={{ height: "var(--promo-banner-height, 44px)" }}
        aria-hidden
      />
    </>
  );
}
