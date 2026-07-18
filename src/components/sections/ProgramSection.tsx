"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProgramModule } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const INITIAL_VISIBLE = 3;

function ReelIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7l5 3-5 3V7z" fill="currentColor" />
    </svg>
  );
}

function ModuleCard({
  module,
  index,
  compact = false,
}: {
  module: ProgramModule;
  index: number;
  compact?: boolean;
}) {
  const { uiLabels } = useContent();
  const padLeft = compact ? "pl-4 sm:pl-5" : "pl-5 sm:pl-6";
  const tabClass = compact
    ? "min-h-[100px] w-9 sm:min-h-[110px] sm:w-10"
    : "min-h-[120px] w-11 sm:min-h-[140px] sm:w-12";
  const cardPad = compact
    ? "gap-4 rounded-[22px] px-4 py-5 sm:gap-5 sm:rounded-[24px] sm:px-6 sm:py-6 lg:gap-6"
    : "gap-6 rounded-[28px] px-6 py-8 sm:gap-8 sm:rounded-[30px] sm:px-10 sm:py-10 lg:gap-10";
  const titleClass = compact
    ? "text-lg sm:text-xl"
    : "text-xl sm:text-2xl";
  const listGap = compact ? "mt-3 space-y-2 sm:mt-4 sm:space-y-2.5" : "mt-5 space-y-3 sm:mt-6 sm:space-y-3.5";
  const listText = compact ? "text-sm sm:text-[15px]" : "text-[15px] sm:text-base";
  const outcomePad = compact ? "p-4 sm:p-5" : "p-5 sm:p-6";
  const outcomeWidth = compact ? "lg:w-[36%] lg:max-w-[280px]" : "lg:w-[38%] lg:max-w-[320px]";

  return (
    <motion.div
      initial={compact ? { opacity: 0, y: 24 } : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: compact ? index * 0.04 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative ${padLeft}`}
    >
      <div
        className={`absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-l-[12px] rounded-r-[5px] bg-[#ffdb7e] ${tabClass}`}
      >
        <span className="rotate-180 font-[family-name:var(--font-oswald)] text-[10px] font-bold uppercase tracking-wide text-black [writing-mode:vertical-rl] sm:text-xs">
          Модуль {module.number}
        </span>
      </div>

      <div className={`flex flex-col bg-white ${cardPad} lg:flex-row lg:items-start`}>
        <div className="min-w-0 flex-[1.4]">
          <h3
            className={`font-[family-name:var(--font-inter)] font-bold leading-tight text-black ${titleClass}`}
          >
            {module.title}
          </h3>

          {module.lessons.length > 0 && (
            <ol className={listGap}>
              {module.lessons.map((lesson, i) => (
                <li
                  key={`${i}-${lesson}`}
                  className={`flex gap-2 font-[family-name:var(--font-inter)] leading-relaxed text-black ${listText}`}
                >
                  <span className="shrink-0 font-semibold text-[#ff8a4c]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div
          className={`w-full shrink-0 rounded-[18px] bg-[#ff8a4c] ${outcomePad} ${outcomeWidth}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c45a20]/45 px-3 py-1.5">
            <ReelIcon />
            <span className="font-[family-name:var(--font-inter)] text-xs font-bold text-white sm:text-sm">
              {uiLabels.moduleOutcome}
            </span>
          </div>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white sm:text-sm">
            {module.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgramModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { programModules, sectionTitles } = useContent();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-3 pt-[3vh] sm:px-6 sm:pt-[4vh]">
          <motion.button
            type="button"
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-modal-title"
            className="relative z-[101] flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:rounded-[28px]"
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative shrink-0 border-b border-black/5 px-6 py-4 sm:px-8 sm:py-5">
              <h2
                id="program-modal-title"
                className="text-center font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-black sm:text-3xl md:text-4xl"
              >
                {sectionTitles.program}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Закрыть программу"
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-2xl leading-none text-black/50 transition-colors hover:bg-black/5 hover:text-black sm:right-6"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-5">
              <div className="flex flex-col gap-4 sm:gap-5">
                {programModules.map((mod, i) => (
                  <ModuleCard key={mod.number} module={mod} index={i} compact />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ProgramSection() {
  const { heroData, programModules, sectionTitles, uiLabels } = useContent();
  const [modalOpen, setModalOpen] = useState(false);
  const visibleModules = programModules.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <SectionContainer id="program" className="relative bg-black" maxWidth="md">
        <SectionReveal>
          <div className="rounded-[28px] bg-[#ebebeb] px-4 py-8 sm:rounded-[32px] sm:px-8 sm:py-10 md:px-10 md:py-12">
            <h2 className="text-center font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide text-black sm:text-4xl md:text-5xl">
              {sectionTitles.program}
            </h2>

            <div className="mt-8 flex flex-col gap-7 sm:mt-10 sm:gap-8">
              {visibleModules.map((mod, i) => (
                <ModuleCard key={mod.number} module={mod} index={i} />
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AnimatedButton
                variant="outline"
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto"
              >
                {uiLabels.showModules}
              </AnimatedButton>

              <AnimatedButton href={heroData.purchaseHref} className="w-full sm:w-auto">
                {uiLabels.purchase}
              </AnimatedButton>
            </div>
          </div>
        </SectionReveal>
      </SectionContainer>

      <ProgramModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
