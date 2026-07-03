"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Expert } from "@/data";
import { useContent } from "@/i18n";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { OpenLessonsButton } from "@/components/ui/OpenLessonsButton";

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-gradient">
      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-white" aria-hidden>
        <path
          d="M3 8.5L6.5 12L13 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ExpertProfile({ expert }: { expert: Expert }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
    >
      <div className="flex justify-center md:justify-start">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[22px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:max-w-[300px] md:max-w-[320px]">
            <Image
              src={expert.image}
              alt={expert.name}
              fill
              quality={90}
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <a
            href={expert.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card flex w-full max-w-[280px] items-center gap-3 px-4 py-3 transition-[filter,transform,box-shadow] duration-[250ms] ease-in-out hover:brightness-[1.04] hover:-translate-y-0.5 sm:max-w-[300px] md:max-w-[320px]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-orange-gradient">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray">Instagram</p>
              <p className="font-[family-name:var(--font-oswald)] text-sm text-white">
                {expert.instagram}
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-[family-name:var(--font-bebas)] text-4xl leading-none tracking-wide text-white sm:text-5xl md:text-6xl">
          {expert.name}
        </h3>

        <div className="premium-card mt-4 px-5 py-3.5">
          <p className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wide text-gray sm:text-base">
            {expert.role}
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {expert.achievements.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-sm leading-relaxed text-gray sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExpertsSection() {
  const { experts, sectionTitles, uiLabels } = useContent();
  const expert = experts[0];

  return (
    <section
      id="experts"
      className="section-padding relative overflow-hidden bg-black md:!pb-28"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(255,122,47,0.04)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionReveal>
          <div className="mb-14 flex flex-col items-center text-center md:mb-20">
            <span className="btn-primary relative inline-block rounded-[19px] px-6 py-2.5 font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
              <span className="relative z-10">{sectionTitles.expertsBadge}</span>
            </span>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {expert && <ExpertProfile expert={expert} />}
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-16 flex justify-center md:mt-20">
            <OpenLessonsButton className="!px-10 !py-4">
              {uiLabels.getLessons}
            </OpenLessonsButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
