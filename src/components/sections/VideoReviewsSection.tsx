"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "@/i18n";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ReviewItem = {
  id: string;
  videoId: string;
  avatar: string;
  name: string;
  result: string;
};

function PlayIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8.5 6.5v11l9-5.5-9-5.5z" />
    </svg>
  );
}

function ReviewCard({
  review,
  onOpen,
  playLabel,
}: {
  review: ReviewItem;
  onOpen: (review: ReviewItem) => void;
  playLabel: string;
}) {
  const thumb = `https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`;

  return (
    <button
      type="button"
      onClick={() => onOpen(review)}
      className="review-card group relative h-[340px] w-[210px] shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#111] text-left shadow-[0_10px_36px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#ff9652]/50 hover:shadow-[0_18px_48px_rgba(255,122,47,0.28)] sm:h-[380px] sm:w-[230px]"
      aria-label={`${playLabel}: ${review.name}`}
    >
      <Image
        src={thumb}
        alt={review.name}
        fill
        sizes="230px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="review-play-btn flex h-14 w-14 items-center justify-center rounded-full bg-orange-gradient text-white shadow-[0_8px_28px_rgba(255,122,47,0.45)] transition-transform duration-300 group-hover:scale-110">
          <PlayIcon className="ml-0.5 h-6 w-6" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/25">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-inter)] text-sm font-semibold text-white">
              {review.name}
            </p>
            <p className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-wider text-[#ff9652]">
              {review.result}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function ReviewModal({
  review,
  onClose,
  closeLabel,
}: {
  review: ReviewItem;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const embedSrc = `https://www.youtube-nocookie.com/embed/${review.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[180] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={review.name}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/88 backdrop-blur-sm"
        onClick={onClose}
        aria-label={closeLabel}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[26px] border border-white/12 bg-[#0b0b0b] shadow-[0_28px_90px_rgba(0,0,0,0.7)]"
      >
        <div className="relative aspect-[9/16] w-full bg-black sm:aspect-[9/14]">
          <iframe
            src={embedSrc}
            title={review.name}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/8 px-4 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20">
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-[family-name:var(--font-inter)] text-sm font-semibold text-white">
                {review.name}
              </p>
              <p className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-wider text-[#ff9652]">
                {review.result}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 px-4 py-2 font-[family-name:var(--font-oswald)] text-[11px] uppercase tracking-wider text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            {closeLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function VideoReviewsSection() {
  const { sectionTitles, uiLabels, videoReviews } = useContent();
  const [active, setActive] = useState<ReviewItem | null>(null);
  const loop = [...videoReviews, ...videoReviews];

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,122,47,0.08)_0%,transparent_65%)]"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading>{sectionTitles.reviews}</SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray sm:text-base">
            {uiLabels.reviewsSubtitle}
          </p>
        </SectionReveal>

        <div
          className={`reviews-marquee-wrap relative mt-10 sm:mt-14 ${active ? "is-paused" : ""}`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent sm:w-20" />

          <div className="reviews-marquee-track flex w-max gap-4 py-4 sm:gap-5">
            {loop.map((review, index) => (
              <ReviewCard
                key={`${review.id}-${index}`}
                review={review}
                onOpen={setActive}
                playLabel={uiLabels.playReview}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ReviewModal
            review={active}
            onClose={() => setActive(null)}
            closeLabel={uiLabels.closeReview}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
