"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "@/i18n";

interface FreeLessonsModalProps {
  open: boolean;
  onClose: () => void;
}

type TabId = "lesson" | "channel";

export function FreeLessonsModal({ open, onClose }: FreeLessonsModalProps) {
  const { freeLessonsData } = useContent();
  const [tab, setTab] = useState<TabId>("lesson");
  const [activeVideo, setActiveVideo] = useState(freeLessonsData.videos[0]?.id ?? "");

  useEffect(() => {
    if (!open) return;
    setTab("lesson");
    setActiveVideo(freeLessonsData.videos[0]?.id ?? "");
  }, [open, freeLessonsData.videos]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const lessonSrc = activeVideo
    ? `https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : "";

  const channelSrc = freeLessonsData.channelEmbedSrc;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={freeLessonsData.title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/88 backdrop-blur-sm"
            onClick={onClose}
            aria-label={freeLessonsData.closeLabel}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
              <div>
                <p className="font-[family-name:var(--font-oswald)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff9652]">
                  {freeLessonsData.badge}
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-white sm:text-3xl">
                  {freeLessonsData.title}
                </h2>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-xs text-gray sm:text-sm">
                  {freeLessonsData.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:text-white"
                aria-label={freeLessonsData.closeLabel}
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2 border-b border-white/10 px-4 py-3 sm:px-6">
              <button
                type="button"
                onClick={() => setTab("lesson")}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-wider transition-colors ${
                  tab === "lesson"
                    ? "bg-orange-gradient text-white"
                    : "bg-white/5 text-gray hover:text-white"
                }`}
              >
                {freeLessonsData.lessonTab}
              </button>
              <button
                type="button"
                onClick={() => setTab("channel")}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-wider transition-colors ${
                  tab === "channel"
                    ? "bg-orange-gradient text-white"
                    : "bg-white/5 text-gray hover:text-white"
                }`}
              >
                {freeLessonsData.channelTab}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {tab === "lesson" ? (
                <div className="space-y-4">
                  {freeLessonsData.videos.length > 1 && (
                    <div className="flex flex-wrap gap-2">
                      {freeLessonsData.videos.map((video) => (
                        <button
                          key={video.id}
                          type="button"
                          onClick={() => setActiveVideo(video.id)}
                          className={`rounded-full px-4 py-2 font-[family-name:var(--font-inter)] text-xs transition-colors ${
                            activeVideo === video.id
                              ? "bg-white text-black"
                              : "bg-white/10 text-gray hover:text-white"
                          }`}
                        >
                          {video.title}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-white/10 bg-black">
                    {lessonSrc && (
                      <iframe
                        key={activeVideo}
                        src={lessonSrc}
                        title={freeLessonsData.title}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative min-h-[55vh] w-full overflow-hidden rounded-[16px] border border-white/10 bg-black sm:min-h-[62vh]">
                  <iframe
                    src={channelSrc}
                    title="YouTube канал"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
