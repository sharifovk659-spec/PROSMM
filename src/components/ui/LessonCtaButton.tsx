"use client";

import { motion } from "framer-motion";
import { useFreeLessons } from "@/components/providers/FreeLessonsProvider";

interface LessonCtaButtonProps {
  label: string;
  className?: string;
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
    </motion.button>
  );
}
