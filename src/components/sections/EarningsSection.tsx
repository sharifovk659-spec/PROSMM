"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Earner } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function EarnerCard({ earner, index }: { earner: Earner; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.06 + Math.floor(index / 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex aspect-[4/5] cursor-default flex-col items-center justify-center rounded-[20px] bg-orange-gradient px-3 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(255,122,47,0.35)] sm:rounded-[22px] sm:px-4 sm:py-6"
    >
      <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
        <Image
          src={earner.avatar}
          alt={earner.username}
          fill
          quality={90}
          sizes="80px"
          className="object-cover object-center"
        />
      </div>

      <p className="mt-3 w-full truncate text-center font-[family-name:var(--font-inter)] text-[11px] text-white/90 sm:text-xs">
        {earner.username}
      </p>

      <p className="mt-1 font-[family-name:var(--font-oswald)] text-base font-semibold tracking-wide text-white sm:text-lg">
        {earner.amount}
      </p>
    </motion.div>
  );
}

export function EarningsSection() {
  const { earners, sectionTitles } = useContent();

  return (
    <SectionContainer className="bg-black-soft" maxWidth="xl">
      <SectionReveal>
        <SectionHeading>{sectionTitles.earnings}</SectionHeading>
      </SectionReveal>

      <SectionReveal delay={0.12}>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {earners.map((earner, i) => (
            <EarnerCard key={earner.username} earner={earner} index={i} />
          ))}
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
