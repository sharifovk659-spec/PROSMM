"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/i18n";
import { FloatingStars } from "@/components/ui/FloatingStars";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { LessonCtaButton } from "@/components/ui/LessonCtaButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function FeatureIcon({ type }: { type: "rocket" | "target" | "chart" }) {
  if (type === "rocket") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#ff9652]" aria-hidden>
        <path
          d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 17v4M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#ff9652]" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#ff9652]" aria-hidden>
      <path d="M5 18V8l4 3 4-5 4 3 2-2v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroSection() {
  const { heroData, heroFeatures } = useContent();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden />
      <div className="hero-halftone pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40" aria-hidden />
      <div className="hero-side-glow hero-side-glow-left pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3" aria-hidden />
      <div className="hero-side-glow hero-side-glow-right pointer-events-none absolute inset-y-0 right-0 z-0 w-1/3" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_38%,rgba(255,122,47,0.08)_0%,transparent_72%)]"
        aria-hidden
      />

      <FloatingStars />

      <div className="pointer-events-none absolute right-4 top-[4.5rem] z-50 hidden lg:block">
        <div className="pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col section-padding-inline pb-8 pt-28 sm:pb-10 sm:pt-32 lg:pb-12 lg:pt-28">
        <div className="grid flex-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)_minmax(0,1fr)] lg:items-center lg:gap-6 xl:gap-10">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-20 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-0 rounded-md border border-white/15 bg-black/30 px-3 py-1.5 font-[family-name:var(--font-oswald)] text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
              <span className="text-white">#{heroData.hashtagTraining}</span>
              <span className="text-gradient-orange">{heroData.hashtagSmm}</span>
            </div>

            <h1 className="mt-5 font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.9] tracking-[0.04em]">
              <span className="text-gradient-orange">PRO</span>
              <span className="text-white">SMM</span>
            </h1>

            <p className="mt-4 font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-[0.16em] text-white sm:text-base md:text-lg">
              {heroData.subtitleLine1}
              <br />
              {heroData.subtitleLine2}
            </p>

            <div className="mt-6 hidden lg:block sm:mt-8">
              <LessonCtaButton label={heroData.lessonCta} />
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-[5] mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:justify-self-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-[3/4] w-full max-w-[380px] lg:max-w-[420px]"
            >
              <Image
                src={heroData.centerExpert}
                alt="Эксперт PROSMM"
                fill
                priority
                sizes="(max-width: 1024px) 340px, 420px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/50 to-transparent" />
            </motion.div>

            <div className="mx-auto mt-5 w-full max-w-[320px] lg:hidden">
              <LessonCtaButton label={heroData.lessonCta} className="w-full justify-center" />
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-20 space-y-5 sm:space-y-6 lg:justify-self-end lg:pt-4"
          >
            {heroFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.22 }}
                className="flex items-start gap-4 lg:max-w-xs"
              >
                <div className="hero-feature-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,122,47,0.4)] sm:h-12 sm:w-12">
                  <FeatureIcon type={feature.icon} />
                </div>
                <div className="text-left">
                  <h3 className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.14em] text-[#ff9652] sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-gray sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-20 mt-8 lg:mt-4"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="hero-cta-bar mx-auto flex max-w-5xl flex-col items-stretch gap-5 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5 md:p-6"
          >
            <AnimatedButton
              href={heroData.purchaseHref}
              className="shrink-0 !px-8 !py-4 !tracking-[0.18em] sm:!px-10"
            >
              {heroData.ctaText}
            </AnimatedButton>

            <div className="text-center sm:text-left">
              <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white sm:text-[15px]">
                {heroData.collaborationText}
              </p>
              <p className="mt-1.5 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.12em] text-[#ff9652] sm:text-base">
                {heroData.collaborationNames}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-20 mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-inter)] text-[11px] leading-relaxed text-gray sm:mt-8 sm:text-xs md:text-sm"
        >
          {heroData.footerText}
        </motion.p>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
