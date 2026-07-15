"use client";

import { motion } from "framer-motion";
import { useFreeLessons } from "@/components/providers/FreeLessonsProvider";
import { useContent } from "@/i18n";

interface LessonCtaButtonProps {
  label: string;
  className?: string;
}

export function LessonCtaButton({ label, className = "" }: LessonCtaButtonProps) {
  const { open } = useFreeLessons();
  const { uiLabels } = useContent();

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
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#ff9652]/45 bg-[#ff7a2f]/15 px-2 py-0.5 font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#ffb07a]">
        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden>
          <path
            d="M6.2 2.2l.6 3.2H3.8a1 1 0 00-.8 1.6l3.4 4.2a1 1 0 001.6-.2l1.1-2.4 2.3.7a1 1 0 001.2-1.3L11.2 2.8a1 1 0 00-1.3-.7L6.2 2.2z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        {uiLabels.clickHint}
      </span>
    </motion.button>
  );
}
