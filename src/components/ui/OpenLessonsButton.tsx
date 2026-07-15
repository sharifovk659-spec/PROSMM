"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useFreeLessons } from "@/components/providers/FreeLessonsProvider";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { useContent } from "@/i18n";

interface OpenLessonsButtonProps {
  children: ReactNode;
  className?: string;
  /** Show a small “click” chip next to the CTA (e.g. on the free-lesson banner). */
  showClickHint?: boolean;
}

function ClickFingerIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${className} click-finger`} aria-hidden>
      <path
        d="M9.2 2.8c.5-.25 1.1.05 1.25.55l1.1 3.7 1.05-.35a1.25 1.25 0 011.55.85l.55 2.05 1.4.4a1.2 1.2 0 01.8 1.5l-1.5 5.2a2.2 2.2 0 01-2.1 1.55H8.2a2.4 2.4 0 01-2.3-1.75L4.3 11.6a1.35 1.35 0 01.85-1.7l2.15-.7.45-1.75L5.5 6.2a1.15 1.15 0 01.45-1.5l3.25-1.9z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 8.2V4.9"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <circle cx="18.2" cy="7.2" r="1.15" className="click-finger-dot" fill="currentColor" />
    </svg>
  );
}

export function OpenLessonsButton({
  children,
  className = "",
  showClickHint = false,
}: OpenLessonsButtonProps) {
  const { open } = useFreeLessons();
  const { uiLabels } = useContent();

  if (!showClickHint) {
    return (
      <AnimatedButton onClick={open} className={className}>
        {children}
      </AnimatedButton>
    );
  }

  return (
    <div className="relative inline-flex">
      <AnimatedButton onClick={open} className={className}>
        {children}
      </AnimatedButton>
      <motion.span
        initial={{ opacity: 0, y: 6, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-2 -top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-[#ff9652]/55 bg-[#1a0f08]/95 px-2.5 py-1 font-[family-name:var(--font-oswald)] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#ffb07a] shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:-right-3 sm:-top-3.5 sm:text-[10px]"
      >
        <ClickFingerIcon />
        {uiLabels.clickHint}
      </motion.span>
    </div>
  );
}
