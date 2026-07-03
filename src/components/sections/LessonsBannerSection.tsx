"use client";

import Image from "next/image";
import { useContent } from "@/i18n";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { OpenLessonsButton } from "@/components/ui/OpenLessonsButton";
import { SocialIcons } from "@/components/ui/SocialIcons";

function PhoneMockup() {
  const { lessonsBanner } = useContent();

  return (
    <div className="relative z-20 h-[200px] w-[100px] overflow-hidden rounded-[20px] border border-white/10 bg-card shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:h-[240px] sm:w-[120px]">
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-white/15" />
      <Image
        src={lessonsBanner.phoneScreen}
        alt="Урок по SMM"
        fill
        sizes="120px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

function FolderProp() {
  const { uiLabels } = useContent();

  return (
    <div className="relative z-10 flex h-24 w-28 flex-col items-center justify-end rounded-[16px] bg-orange-gradient p-3 shadow-[0_6px_20px_rgba(0,0,0,0.3)] sm:h-28 sm:w-32">
      <div className="absolute -top-2 left-3 h-4 w-12 rounded-t-md bg-[#ffc89a]" />
      <svg viewBox="0 0 24 24" fill="none" className="mb-1 h-8 w-8 text-black/50" aria-hidden>
        <path
          d="M4 6h5l2 2h9a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span className="font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-wider text-white/90">
        {uiLabels.folderLessons}
      </span>
    </div>
  );
}

export function LessonsBannerSection() {
  const { lessonsBanner } = useContent();

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(255,122,47,0.05)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-8">
        <SectionReveal className="flex-1 lg:max-w-[480px]">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {lessonsBanner.titleLine1}
            <br />
            <span className="text-gradient-orange">{lessonsBanner.titleLine2}</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray sm:text-base">
            {lessonsBanner.subtitle}
          </p>

          <OpenLessonsButton className="mt-8 !px-10 !py-4 !tracking-[0.2em]">
            {lessonsBanner.ctaText}
          </OpenLessonsButton>
        </SectionReveal>

        <SectionReveal delay={0.15} className="relative flex flex-1 items-end justify-center lg:justify-end">
          <div className="relative flex h-[280px] w-full max-w-[360px] items-end justify-center sm:h-[320px]">
            <div className="absolute bottom-0 left-1/2 z-10 h-[240px] w-[170px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:h-[280px] sm:w-[190px]">
              <Image
                src={lessonsBanner.expert.image}
                alt={lessonsBanner.expert.name}
                fill
                quality={90}
                sizes="190px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-[58%] z-20 sm:bottom-6">
              <PhoneMockup />
            </div>

            <div className="absolute bottom-8 left-[18%] z-20 sm:bottom-10">
              <FolderProp />
            </div>
          </div>

          <SocialIcons
            vertical
            className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:flex"
          />
        </SectionReveal>

        <SocialIcons className="lg:hidden" />
      </div>
    </section>
  );
}
