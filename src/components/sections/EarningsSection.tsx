"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Earner } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VISIBLE_EARNERS = 6;

function EarnerCard({ earner, index }: { earner: Earner; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.05 + Math.floor(index / 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex aspect-[3/4] cursor-default flex-col items-center justify-center rounded-[16px] bg-orange-gradient px-2 py-3 shadow-[0_3px_14px_rgba(0,0,0,0.24)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(255,122,47,0.3)] sm:rounded-[18px] sm:px-3 sm:py-4"
    >
      <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white/25 shadow-[0_3px_10px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <Image
          src={earner.avatar}
          alt={earner.username}
          fill
          quality={90}
          sizes="48px"
          className="object-cover object-center"
        />
      </div>

      <p className="mt-2 w-full truncate text-center font-[family-name:var(--font-inter)] text-[10px] text-white/90 sm:text-[11px]">
        {earner.username}
      </p>

      <p className="mt-0.5 font-[family-name:var(--font-oswald)] text-sm font-semibold tracking-wide text-white sm:text-base">
        {earner.amount}
      </p>
    </motion.div>
  );
}

export function EarningsSection() {
  const { earners, sectionTitles } = useContent();
  const visibleEarners = earners.slice(0, VISIBLE_EARNERS);

  return (
    <SectionContainer className="bg-black-soft" maxWidth="md">
      <SectionReveal>
        <SectionHeading>{sectionTitles.earnings}</SectionHeading>
      </SectionReveal>

      <SectionReveal delay={0.12}>
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3">
          {visibleEarners.map((earner, i) => (
            <EarnerCard key={earner.username} earner={earner} index={i} />
          ))}
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
