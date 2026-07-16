"use client";

import { motion } from "framer-motion";
import { useFreeLessons } from "@/components/providers/FreeLessonsProvider";

interface LessonCtaButtonProps {
  label: string;
  className?: string;
}

function ClickFingerIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${className} click-finger`} aria-hidden>
      <path
        d="M9.2 2.8c.5-.25 1.1.05 1.25.55l1.1 3.7 1.05-.35a1.25 1.25 0 011.55.85l.55 2.05 1.4.4a1.2 1.2 0 01.8 1.5l-1.5 5.2a2.2 2.2 0 01-2.1 1.55H8.2a2.4 2.4 0 01-2.3-1.75L4.3 11.6a1.35 1.35 0 01.85-1.7l2.15-.7.45-1.75L5.5 6.2a1.15 1.15 0 01.45-1.5l3.25-1.9z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 8.2V4.9"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <circle cx="18.2" cy="7.2" r="1.25" className="click-finger-dot" fill="currentColor" />
    </svg>
  );
}

export function LessonCtaButton({ label, className = "" }: LessonCtaButtonProps) {
  const { open } = useFreeLessons();

  return (
    <motion.button
      type="button"
      onClick={open}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/45 px-3 py-2.5 shadow-none transition-colors hover:border-white/20 ${className}`}
    >
      <span className="lesson-play-pulse relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-orange-gradient">
        <svg viewBox="0 0 20 20" fill="currentColor" className="relative z-[1] ml-0.5 h-4 w-4 text-white" aria-hidden>
          <path d="M7 4.5v11l9-5.5-9-5.5z" />
        </svg>
      </span>
      <span className="font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
        {label}
      </span>
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/15 text-[#ffb07a]"
        aria-hidden
      >
        <ClickFingerIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
    </motion.button>
  );
}
