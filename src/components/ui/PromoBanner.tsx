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

function TimerUnit({
  value,
  label,
  size = "mobile",
}: {
  value: string;
  label: string;
  size?: "mobile" | "desktop";
}) {
  const isDesktop = size === "desktop";

  return (
    <div className="flex flex-col items-center gap-px">
      <span
        className={`promo-timer-digit flex items-center justify-center rounded-[6px] border border-[#ff9652]/40 bg-black/55 font-[family-name:var(--font-bebas)] leading-none tracking-wide text-white ${
          isDesktop
            ? "h-8 min-w-[2.1rem] rounded-md px-1.5 text-xl"
            : "h-6 min-w-[1.55rem] px-1 text-[15px]"
        }`}
      >
        {value}
      </span>
      <span
        className={`font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-[0.1em] text-[#ffb07a]/75 ${
          isDesktop ? "text-[8px]" : "text-[7px]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function TimerRow({
  days,
  hours,
  minutes,
  seconds,
  labels,
  size = "mobile",
}: {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
  size?: "mobile" | "desktop";
}) {
  const colonClass =
    size === "desktop"
      ? "self-center pb-3 font-[family-name:var(--font-bebas)] text-lg leading-none text-[#ff9652]/70"
      : "self-center pb-2.5 font-[family-name:var(--font-bebas)] text-sm leading-none text-[#ff9652]/65";

  return (
    <div className={`flex items-start ${size === "desktop" ? "gap-1.5" : "gap-0.5"}`}>
      <TimerUnit value={days} label={labels.days} size={size} />
      <span className={colonClass}>:</span>
      <TimerUnit value={hours} label={labels.hours} size={size} />
      <span className={colonClass}>:</span>
      <TimerUnit value={minutes} label={labels.minutes} size={size} />
      <span className={colonClass}>:</span>
      <TimerUnit value={seconds} label={labels.seconds} size={size} />
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
  const days = pad(Math.floor(totalSeconds / 86400));
  const hours = pad(Math.floor((totalSeconds % 86400) / 3600));
  const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
  const seconds = pad(totalSeconds % 60);
  const labels = {
    days: promo.days,
    hours: promo.hours,
    minutes: promo.minutes,
    seconds: promo.seconds,
  };

  return (
    <>
      <div ref={barRef} className="promo-bar-sticky fixed inset-x-0 top-0 z-[70] w-full">
        <div className="relative overflow-hidden border-b border-[#ff9652]/28 bg-[#060606]/96 backdrop-blur-md">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,47,0.14)_0%,rgba(255,80,20,0.03)_50%,rgba(255,122,47,0.12)_100%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 promo-shimmer opacity-45" aria-hidden />

          {/* Mobile — unchanged compact row */}
          <div className="relative mx-auto flex max-w-6xl items-center gap-2 px-2.5 py-1.5 sm:hidden">
            <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-md bg-orange-gradient px-2 py-0.5 font-[family-name:var(--font-bebas)] text-base leading-none text-white">
              {promo.discount}
            </span>

            <p className="min-w-0 flex-1 truncate font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.06em] text-white">
              {promo.title}
            </p>

            <div className="flex shrink-0 items-center">
              <TimerRow
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                labels={labels}
                size="mobile"
              />
            </div>

            <motion.a
              href="#pricing"
              whileTap={{ scale: 0.96 }}
              className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/15 px-2 py-1 font-[family-name:var(--font-oswald)] text-[8px] font-semibold uppercase tracking-[0.1em] text-[#ffb07a]"
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

          {/* Desktop — aligned 3-column bar */}
          <div className="relative mx-auto hidden max-w-6xl items-center gap-6 px-6 py-2.5 sm:grid sm:grid-cols-[1fr_auto_auto]">
            <div className="flex min-w-0 items-center gap-3">
              <span className="promo-discount-pulse inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-gradient px-3 py-1 font-[family-name:var(--font-bebas)] text-2xl leading-none tracking-wide text-white shadow-[0_6px_20px_rgba(255,122,47,0.35)]">
                {promo.discount}
              </span>
              <p className="truncate font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.12em] text-white lg:text-[15px]">
                {promo.titleDesktop}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff9652]">
                {promo.timerLabel}
              </span>
              <TimerRow
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                labels={labels}
                size="desktop"
              />
            </div>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center justify-self-end gap-1.5 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/12 px-4 py-2 font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffb07a] transition-colors hover:border-[#ff9652]/70 hover:text-white"
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

      <div
        className="w-full shrink-0"
        style={{ height: "var(--promo-banner-height, 44px)" }}
        aria-hidden
      />
    </>
  );
}
