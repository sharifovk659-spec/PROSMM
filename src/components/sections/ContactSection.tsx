"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ContactIconType = "location" | "phone" | "whatsapp" | "email" | "instagram";

function ContactIcon({ type }: { type: ContactIconType }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M6.5 4h3l1.5 5-2 1.2a11 11 0 005.8 5.8L17.5 14l5 1.5v3a2 2 0 01-2.1 2C9.8 20.5 3.5 14.2 3.5 6.1A2 2 0 015.5 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.61 4.04 1.66 5.68L2 22l4.56-1.75a9.86 9.86 0 004.48 1.08h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.4 13.95c-.15.42-.87.81-1.2.86-.31.05-.71.07-1.15-.07-.27-.09-.62-.21-1.07-.41-1.88-.81-3.1-2.7-3.19-2.83-.09-.12-.76-.99-.76-1.89 0-.9.47-1.34.64-1.52.17-.18.37-.23.5-.23.12 0 .25 0 .36.01.12.01.27-.05.42.32.15.36.51 1.25.55 1.34.05.09.08.2.02.32-.06.12-.09.2-.18.3-.09.1-.19.22-.27.3-.09.09-.18.19-.08.37.1.18.44.73.95 1.18.65.58 1.2.76 1.38.85.18.09.28.08.38-.05.1-.13.44-.51.56-.69.12-.18.24-.15.41-.09.17.06 1.08.51 1.27.6.19.09.32.14.37.21.05.08.05.46-.1.88z" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ContactCard({
  icon,
  label,
  value,
  hint,
  href,
}: {
  icon: ContactIconType;
  label: string;
  value: string;
  hint: string;
  href?: string;
}) {
  const className =
    "group flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]";

  const inner = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-gradient text-white">
        <ContactIcon type={icon} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff9652]">
          {label}
        </p>
        <p className="mt-0.5 break-all font-[family-name:var(--font-inter)] text-[15px] font-semibold text-white">
          {value}
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-inter)] text-xs text-gray/80">{hint}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.22 }}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.22 }} className={className}>
      {inner}
    </motion.div>
  );
}

export function ContactSection() {
  const { sectionTitles, contactSection, experts } = useContent();
  const expert = experts[0];

  return (
    <SectionContainer id="contact" className="relative overflow-hidden bg-black" maxWidth="lg">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_50%,rgba(255,122,47,0.07)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <SectionReveal>
        <SectionHeading>{sectionTitles.contact}</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray sm:text-base">
          {contactSection.subtitle}
        </p>
      </SectionReveal>

      <div className="relative z-10 mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_320px] lg:items-stretch lg:gap-10 xl:grid-cols-[1fr_360px]">
        <SectionReveal delay={0.1} className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <ContactCard
            icon="phone"
            label={contactSection.phoneLabel}
            value={contactSection.phone}
            hint={contactSection.phoneHint}
            href={contactSection.phoneHref}
          />
          <ContactCard
            icon="whatsapp"
            label={contactSection.whatsappLabel}
            value={contactSection.whatsapp}
            hint={contactSection.whatsappHint}
            href={contactSection.whatsappHref}
          />
          <ContactCard
            icon="email"
            label={contactSection.emailLabel}
            value={contactSection.email}
            hint={contactSection.emailHint}
            href={contactSection.emailHref}
          />
          <ContactCard
            icon="instagram"
            label={contactSection.instagramLabel}
            value={contactSection.instagramHandle}
            hint={contactSection.instagramHint}
            href={contactSection.instagramUrl}
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d]">
            <div className="relative min-h-[280px] flex-1 sm:min-h-[320px]">
              <Image
                src={expert?.image ?? "/images/experts/murad.jpg"}
                alt={expert?.name ?? "PROSMM"}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="border-t border-white/8 px-5 py-5">
              <p className="font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff9652]">
                {contactSection.expertCardTitle}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-bebas)] text-[2rem] leading-none tracking-wide text-white">
                {expert?.name}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray">
                {expert?.role}
              </p>
              <p className="mt-3 font-[family-name:var(--font-inter)] text-xs text-gray/70">
                {contactSection.locationLabel}: {contactSection.locationValue}
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </SectionContainer>
  );
}
