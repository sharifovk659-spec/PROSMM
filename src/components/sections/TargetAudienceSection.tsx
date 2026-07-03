"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AudienceItem } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { OpenLessonsButton } from "@/components/ui/OpenLessonsButton";

const cardFade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function CardIcon({ index }: { index: number }) {
  const className = "h-3.5 w-3.5 text-black/70";

  if (index === 0) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
        <rect x="3" y="5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
        <path
          d="M10 3l2.2 4.5 5 .7-3.6 3.5.9 5.1L10 14.8 5.5 16.8l.9-5.1L3 8.2l5-.7L10 3z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
        <path
          d="M4 14l3-8h6l3 8M7 10h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 6l1-2h2l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
        <path
          d="M10 4.5c-2.2 0-4 1.2-4 3s1.8 3 4 3 4-1.2 4-3-1.8-3-4-3z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6.5 10.5L8 16h4l1.5-5.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M6 14l2-6h4l2 6M8 10h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FreeLessonsPhones() {
  const { audienceAssets } = useContent();

  return (
    <div className="flex shrink-0 justify-center sm:justify-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={audienceAssets.freeLessonsPhones}
        alt="Instagram профили экспертов"
        width={160}
        height={100}
        className="h-[80px] w-auto max-w-[140px] object-contain object-left sm:h-[92px] sm:max-w-[160px]"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

function AudienceCard({
  item,
  index,
}: {
  item: AudienceItem;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardFade}
      whileHover={{ y: -3, transition: { duration: 0.22 } }}
      className="flex h-full min-h-[148px] overflow-hidden rounded-[18px] bg-[#ececec] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] sm:min-h-[160px] sm:rounded-[20px]"
    >
      <div className="relative w-[40%] shrink-0 bg-[#ff8a4c] sm:w-[42%]">
        <div className="relative h-full min-h-[148px] w-full sm:min-h-[160px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={90}
            sizes="(max-width: 640px) 42vw, 220px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm sm:bottom-2.5 sm:left-2.5 sm:h-8 sm:w-8">
          <CardIcon index={index} />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-3.5 py-4 sm:px-4 sm:py-5 md:px-5">
        <h3 className="font-[family-name:var(--font-inter)] text-[13px] font-bold leading-snug text-black sm:text-[15px] md:text-base">
          {item.title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-inter)] text-[11px] leading-relaxed text-black/55 sm:text-xs md:text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function TargetAudienceSection() {
  const { audienceAssets, sectionTitles, targetAudience, uiLabels } = useContent();

  return (
    <SectionContainer className="relative bg-black" maxWidth="sm">
      <SectionReveal>
        <div className="relative px-1 pt-6 sm:pt-8">
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <OpenLessonsButton className="!px-8 !py-3.5 shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
              {uiLabels.getLessons}
            </OpenLessonsButton>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-white pt-16 shadow-[0_4px_32px_rgba(0,0,0,0.12)] sm:rounded-[32px] sm:pt-[4.5rem]">
            <h2 className="px-6 text-center font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide text-black sm:px-10 sm:text-4xl md:text-5xl">
              {sectionTitles.audience}
            </h2>

            <div className="mt-8 grid grid-cols-1 items-stretch gap-4 px-5 sm:grid-cols-2 sm:gap-5 sm:px-8 md:gap-6 md:px-10">
              {targetAudience.map((item, i) => (
                <AudienceCard key={item.title} item={item} index={i} />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 items-center gap-5 rounded-b-[28px] bg-gradient-to-r from-[#fff4c9] via-[#fff0bf] to-[#ffe9a8] px-5 py-7 sm:mt-8 sm:grid-cols-[minmax(130px,160px)_1fr_auto] sm:items-center sm:gap-6 sm:px-8 sm:py-8 md:grid-cols-[minmax(150px,180px)_1fr_auto] md:gap-8 md:px-10">
              <FreeLessonsPhones />

              <p className="max-w-sm justify-self-center text-center font-[family-name:var(--font-inter)] text-sm leading-relaxed text-black sm:max-w-none sm:justify-self-stretch sm:text-left sm:text-[15px]">
                {uiLabels.audienceStrip}
              </p>

              <div className="flex shrink-0 flex-col items-center gap-2">
                <OpenLessonsButton className="!px-6 !py-3.5 sm:!px-8">
                  {uiLabels.getLessons}
                </OpenLessonsButton>
                <span className="rounded-md bg-white px-4 py-1 font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-widest text-black sm:text-xs">
                  {uiLabels.fromExperts}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
