"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PricingModuleItem, PricingPlan } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

function StarIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${dark ? "text-black/70" : "icon-gradient"}`}
      aria-hidden
    >
      <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.27l-3.52 1.85.67-3.92L2.3 5.64l3.94-.57L8 1.5z" />
    </svg>
  );
}

function ModuleRow({ item }: { item: PricingModuleItem }) {
  if (item.highlight) {
    return (
      <li className="flex items-start gap-2 rounded-xl bg-[#ffd966] px-3 py-2.5">
        <StarIcon dark />
        <span className="font-[family-name:var(--font-inter)] text-sm leading-snug text-black sm:text-[15px]">
          <span className="font-[family-name:var(--font-oswald)] font-semibold uppercase">
            Модуль {item.number}
          </span>
          {" — "}
          <span className="font-semibold">{item.title}</span>
        </span>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-2">
      <StarIcon />
      <span className="font-[family-name:var(--font-inter)] text-sm leading-snug sm:text-[15px]">
        <span className="font-[family-name:var(--font-oswald)] font-semibold text-gradient-orange">
          Модуль {item.number}
        </span>
        <span className="font-semibold text-black">
          {" — "}
          {item.title}
        </span>
      </span>
    </li>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <StarIcon />
      <span className="font-[family-name:var(--font-inter)] text-sm leading-snug text-black/85 sm:text-[15px]">
        {text}
      </span>
    </li>
  );
}

function PricingCard({
  plan,
  index,
  purchaseHref,
  purchaseLabel,
}: {
  plan: PricingPlan;
  index: number;
  purchaseHref: string;
  purchaseLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[22px] bg-light shadow-[0_4px_24px_rgba(0,0,0,0.18)] ${
        plan.vip ? "z-10 shadow-[0_12px_48px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="p-4 pb-0 sm:p-5 sm:pb-0">
        <div className="relative h-[180px] overflow-hidden rounded-[16px] sm:h-[200px]">
          <Image
            src={plan.image}
            alt={plan.name}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className={`object-cover object-center ${plan.grayscale ? "grayscale" : ""}`}
          />
        </div>
      </div>

      <h3 className="mt-4 px-4 text-center font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wide text-black sm:px-5 sm:text-2xl">
        {plan.displayTitle ?? plan.name}
      </h3>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <ul className="space-y-2 sm:space-y-2.5">
          {plan.modules.map((mod) => (
            <ModuleRow key={`${mod.number}-${mod.title}`} item={mod} />
          ))}
        </ul>

        {plan.bonuses && plan.bonuses.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-semibold text-gradient-orange">
              Бонус
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              {plan.bonuses.map((bonus) => (
                <FeatureRow key={bonus} text={bonus} />
              ))}
            </ul>
          </div>
        )}

        {plan.extras && plan.extras.length > 0 && (
          <ul className="mt-4 space-y-2 sm:space-y-2.5">
            {plan.extras.map((extra) => (
              <FeatureRow key={extra} text={extra} />
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 sm:pt-6">
          <p className="font-[family-name:var(--font-bebas)] text-4xl leading-none text-black sm:text-[2.75rem]">
            {plan.price}
          </p>
          <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-black/40 line-through sm:text-base">
            {plan.oldPrice}
          </p>

          <AnimatedButton href={purchaseHref} className="mt-4 w-full sm:mt-5">
            {purchaseLabel}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const { heroData, pricingPlans, sectionTitles, uiLabels } = useContent();

  return (
    <SectionContainer id="pricing" className="relative bg-black md:!pb-28" maxWidth="xl">
      <SectionReveal>
        <SectionHeading>{sectionTitles.pricing}</SectionHeading>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-6">
          {pricingPlans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={i}
              purchaseHref={heroData.purchaseHref}
              purchaseLabel={uiLabels.purchase}
            />
          ))}
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
