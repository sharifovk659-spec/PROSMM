"use client";

import Image from "next/image";
import { useContent } from "@/i18n";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { OpenLessonsButton } from "@/components/ui/OpenLessonsButton";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function LessonsBannerSection() {
  const { lessonsBanner } = useContent();

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(255,122,47,0.05)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
        <SectionReveal delay={0.05} className="relative flex flex-1 items-center justify-center lg:justify-start">
          <div className="relative h-[320px] w-full max-w-[340px] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:h-[380px] sm:max-w-[380px]">
            <Image
              src={lessonsBanner.expert.image}
              alt={lessonsBanner.expert.name}
              fill
              quality={90}
              sizes="380px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </SectionReveal>

        <SectionReveal className="flex-1 lg:max-w-[520px]">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {lessonsBanner.titleLine1}
            {lessonsBanner.titleLine2 ? (
              <>
                <br />
                <span className="text-gradient-orange">{lessonsBanner.titleLine2}</span>
              </>
            ) : null}
          </h2>

          <p className="mt-4 max-w-md font-[family-name:var(--font-inter)] text-xs leading-relaxed text-gray sm:text-sm">
            {lessonsBanner.subtitle}
          </p>

          <OpenLessonsButton className="mt-8 !px-10 !py-4 !tracking-[0.2em]">
            {lessonsBanner.ctaText}
          </OpenLessonsButton>
        </SectionReveal>

        <SocialIcons
          vertical
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 lg:flex"
        />
        <SocialIcons className="lg:hidden" />
      </div>
    </section>
  );
}
