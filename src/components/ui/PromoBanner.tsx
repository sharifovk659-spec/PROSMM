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

function TimerUnit({ value, label, compact = false }: { value: string; label: string; compact?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span
        className={`promo-timer-digit flex items-center justify-center rounded-md border border-[#ff9652]/40 bg-black/60 font-[family-name:var(--font-bebas)] leading-none tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,180,120,0.1)] ${
          compact
            ? "h-6 min-w-[1.65rem] px-1 text-base"
            : "h-7 min-w-[2rem] px-1.5 text-lg sm:h-8 sm:min-w-[2.25rem] sm:text-xl"
        }`}
      >
        {value}
      </span>
      <span
        className={`font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-[0.12em] text-[#ffb07a]/80 ${
          compact ? "text-[7px]" : "text-[8px] sm:text-[9px]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function TimerColon({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`font-[family-name:var(--font-bebas)] text-[#ff9652]/75 ${
        compact ? "mb-2.5 text-sm" : "mb-3 text-base"
      }`}
    >
      :
    </span>
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
      const height = barRef.current?.offsetHeight ?? 52;
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
      <div
        ref={barRef}
        className="promo-bar-sticky fixed inset-x-0 top-0 z-[70] w-full"
      >
        <div className="relative overflow-hidden border-b border-[#ff9652]/30 bg-[#060606]/95 backdrop-blur-md">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,47,0.16)_0%,rgba(255,80,20,0.04)_35%,rgba(255,122,47,0.14)_100%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 promo-shimmer opacity-60" aria-hidden />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,150,82,0.65),transparent)]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-6xl px-2.5 py-2 sm:px-5 sm:py-2.5">
            {/* Mobile: 2 rows */}
            <div className="flex flex-col gap-2 sm:hidden">
              <div className="flex items-center gap-2">
                <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-gradient px-2 py-0.5 font-[family-name:var(--font-bebas)] text-lg leading-none text-white">
                  {promo.discount}
                </span>
                <p className="min-w-0 flex-1 font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-white">
                  {promo.title}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="mb-1 font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.14em] text-[#ff9652]">
                    {promo.timerLabel}
                  </p>
                  <div className="flex items-center gap-0.5">
                    <TimerUnit value={pad(days)} label={promo.days} compact />
                    <TimerColon compact />
                    <TimerUnit value={pad(hours)} label={promo.hours} compact />
                    <TimerColon compact />
                    <TimerUnit value={pad(minutes)} label={promo.minutes} compact />
                    <TimerColon compact />
                    <TimerUnit value={pad(seconds)} label={promo.seconds} compact />
                  </div>
                </div>

                <motion.a
                  href="#pricing"
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/15 px-2.5 py-1.5 font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.12em] text-[#ffb07a]"
                >
                  {promo.cta}
                  <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5" aria-hidden>
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

            {/* Desktop: single row */}
            <div className="hidden items-center justify-between gap-4 sm:flex">
              <div className="flex min-w-0 items-center gap-3">
                <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-xl bg-orange-gradient px-3 py-1.5 font-[family-name:var(--font-bebas)] text-2xl leading-none tracking-wide text-white shadow-[0_6px_24px_rgba(255,122,47,0.4)]">
                  {promo.discount}
                </span>
                <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.12em] text-white lg:text-sm">
                  {promo.title}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff9652]">
                  {promo.timerLabel}
                </span>
                <div className="flex items-center gap-1.5">
                  <TimerUnit value={pad(days)} label={promo.days} />
                  <TimerColon />
                  <TimerUnit value={pad(hours)} label={promo.hours} />
                  <TimerColon />
                  <TimerUnit value={pad(minutes)} label={promo.minutes} />
                  <TimerColon />
                  <TimerUnit value={pad(seconds)} label={promo.seconds} />
                </div>
              </div>

              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/12 px-4 py-2 font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffb07a] transition-colors hover:border-[#ff9652]/70 hover:text-white"
              >
                {promo.cta}
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
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
      </div>

      <div
        className="w-full shrink-0"
        style={{ height: "var(--promo-banner-height, 52px)" }}
        aria-hidden
      />
    </>
  );
}
