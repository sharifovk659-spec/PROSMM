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
  const className = "h-3 w-3 text-black/70";

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
        className="h-[72px] w-auto max-w-[130px] object-contain object-left sm:h-[84px] sm:max-w-[150px]"
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
      className="flex h-full min-h-[128px] overflow-hidden rounded-[16px] bg-[#ececec] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] sm:min-h-[136px] sm:rounded-[18px]"
    >
      <div className="relative w-[34%] shrink-0 bg-[#ff8a4c] sm:w-[36%]">
        <div className="relative h-full min-h-[128px] w-full sm:min-h-[136px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={90}
            sizes="(max-width: 640px) 34vw, 180px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm sm:h-7 sm:w-7">
          <CardIcon index={index} />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-3 py-3 sm:px-3.5 sm:py-4 md:px-4">
        <h3 className="font-[family-name:var(--font-inter)] text-[12px] font-bold leading-snug text-black sm:text-[13px] md:text-sm">
          {item.title}
        </h3>
        <p className="mt-1.5 font-[family-name:var(--font-inter)] text-[10px] leading-relaxed text-black/55 sm:text-[11px] md:text-xs">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function TargetAudienceSection() {
  const { sectionTitles, targetAudience, uiLabels } = useContent();

  return (
    <SectionContainer className="relative bg-black" maxWidth="sm">
      <SectionReveal>
        <div className="relative px-1 pt-2 sm:pt-4">
          <div className="overflow-hidden rounded-[28px] bg-white pt-10 shadow-[0_4px_32px_rgba(0,0,0,0.12)] sm:rounded-[32px] sm:pt-12">
            <h2 className="px-6 text-center font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide text-black sm:px-10 sm:text-4xl md:text-5xl">
              {sectionTitles.audience}
            </h2>

            <div className="mt-7 grid grid-cols-1 items-stretch gap-3 px-5 sm:mt-8 sm:grid-cols-2 sm:gap-4 sm:px-8 md:px-10">
              {targetAudience.map((item, i) => (
                <AudienceCard key={item.title} item={item} index={i} />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 items-center gap-4 rounded-b-[28px] bg-gradient-to-r from-[#fff4c9] via-[#fff0bf] to-[#ffe9a8] px-5 py-6 sm:mt-6 sm:grid-cols-[minmax(120px,150px)_1fr_auto] sm:gap-5 sm:px-8 sm:py-7 md:px-10">
              <FreeLessonsPhones />

              <p className="max-w-xl justify-self-center text-center font-[family-name:var(--font-inter)] text-xs leading-relaxed text-black sm:max-w-none sm:justify-self-stretch sm:text-left sm:text-sm">
                {uiLabels.audienceStrip}
              </p>

              <div className="flex shrink-0 flex-col items-center gap-2">
                <OpenLessonsButton className="!px-5 !py-3 sm:!px-7">
                  {uiLabels.getLessons}
                </OpenLessonsButton>
                <span className="rounded-md bg-white px-3 py-1 font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-widest text-black sm:text-xs">
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
