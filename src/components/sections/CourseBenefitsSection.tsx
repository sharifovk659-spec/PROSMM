"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { BenefitItem } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";

const cardFade = {
  hidden: { opacity: 0, y: 36 },
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

function OrangeStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[#ff9652] ${className}`}
      aria-hidden
    >
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
    </svg>
  );
}

function BenefitCard({
  image,
  parts,
  index,
  className = "",
}: BenefitItem & { index: number; className?: string }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardFade}
      className={`flex flex-col items-center ${className}`}
    >
      <div className="relative mb-5 sm:mb-6">
        <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full bg-[#141414] shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px]">
          <Image
            src={image}
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/8" />
        </div>
      </div>

      <p className="max-w-[220px] text-center font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white sm:max-w-[240px] sm:text-sm md:max-w-[260px] md:text-[15px]">
        {parts.map((part, i) =>
          part.bold ? (
            <strong key={i} className="font-bold text-white">
              {part.text}
            </strong>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>
    </motion.div>
  );
}

export function CourseBenefitsSection() {
  const { courseBenefits, sectionTitles } = useContent();
  const topRow = courseBenefits.slice(0, 2);
  const bottomRow = courseBenefits.slice(2, 4);

  return (
    <SectionContainer className="relative overflow-hidden bg-black" maxWidth="lg">
      <OrangeStar className="absolute left-4 top-8 h-4 w-4 opacity-80 sm:left-8 sm:top-10 sm:h-5 sm:w-5" />
      <div
        className="absolute left-6 top-24 hidden h-3 w-3 rotate-45 bg-[#ff9652] opacity-70 sm:block md:left-10"
        aria-hidden
      />

      <SectionReveal>
        <h2 className="text-center font-[family-name:var(--font-bebas)] text-3xl leading-[0.95] tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {sectionTitles.benefits}
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-12 flex flex-col items-center gap-12 sm:hidden">
          {courseBenefits.map((item, i) => (
            <BenefitCard key={i} {...item} index={i} />
          ))}
        </div>

        <div className="mt-12 hidden sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:hidden">
          {courseBenefits.map((item, i) => (
            <BenefitCard key={i} {...item} index={i} />
          ))}
        </div>

        <div className="mt-14 hidden flex-col items-center gap-14 lg:flex">
          <div className="grid w-full max-w-3xl grid-cols-2 gap-14 xl:max-w-4xl xl:gap-20">
            {topRow.map((item, i) => (
              <BenefitCard key={i} {...item} index={i} />
            ))}
          </div>
          <div className="grid w-full max-w-3xl grid-cols-2 gap-14 xl:max-w-4xl xl:gap-20">
            {bottomRow.map((item, i) => (
              <BenefitCard key={i} {...item} index={i + 2} />
            ))}
          </div>
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
