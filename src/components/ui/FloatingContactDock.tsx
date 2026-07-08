"use client";

import { useContent } from "@/i18n";
import { ContactWormLink } from "@/components/ui/ContactWormLink";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <path
        d="M12 3c-4.97 0-9 3.8-9 8.48 0 1.49.4 2.94 1.16 4.22L3 21l5.56-1.46A8.93 8.93 0 0012 19.5c4.97 0 9-3.8 9-8.48S16.97 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.4c.2-.45.35-.47.58-.48l.52.01c.16 0 .37-.06.58.44.2.47.68 1.66.74 1.78.06.12.1.27-.01.43-.1.16-.16.26-.32.42-.16.16-.33.36-.47.48-.16.14-.33.29-.14.57.19.28.85 1.4 1.82 2.27 1.25 1.12 2.3 1.47 2.62 1.64.32.16.51.14.7-.08.19-.22.8-.93 1.01-1.25.21-.32.42-.27.7-.16.29.1 1.82.86 2.13 1.02.31.15.52.23.6.36.08.13.08.75-.18 1.47-.26.72-1.53 1.38-2.12 1.47-.58.09-1.26.14-2.04-.14-.78-.28-1.82-.67-2.9-1.47-1.08-.8-1.92-1.78-2.14-2.08-.22-.3-1.86-2.3-1.86-3.18 0-.88.44-1.31.6-1.49.16-.18.35-.23.47-.23.12 0 .24 0 .35.01.11.01.26-.04.4.31.14.35.48 1.17.52 1.25.04.08.07.18.01.29-.06.11-.09.18-.18.28-.09.1-.19.22-.27.3-.09.08-.18.17-.08.33.1.16.42.7.9 1.14.48.44.88.58 1.01.65.13.07.22.06.3-.03.08-.09.35-.41.45-.55.09-.14.19-.12.32-.07.13.05.83.39.97.46.14.07.24.1.27.16.04.06.04.35-.08.69z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <path
        d="M7.2 4.5h2.4l1.2 4-1.6 1a9.2 9.2 0 004.6 4.6l1-1.6 4 1.2v2.4a1.6 1.6 0 01-1.7 1.6C9.4 17.7 4.8 13.1 4.8 6.1a1.6 1.6 0 011.4-1.6z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" aria-hidden>
      <path
        d="M5 6.5a2.5 2.5 0 012.5-2.5h9A2.5 2.5 0 0119 6.5v6A2.5 2.5 0 0116.5 15H10l-4.5 3.5V6.5z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18.5h7a2.5 2.5 0 002.5-2.5v-1"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FloatingContactDock() {
  const { contactSection } = useContent();

  return (
    <div
      className="fixed bottom-5 right-4 z-[160] flex flex-col gap-3 sm:bottom-7 sm:right-6 sm:gap-3.5"
      aria-label="Контакты"
    >
      <ContactWormLink
        href={contactSection.whatsappHref}
        label={contactSection.whatsappLabel}
      >
        <WhatsAppIcon />
      </ContactWormLink>
      <ContactWormLink href={contactSection.phoneHref} label={contactSection.phoneLabel}>
        <PhoneIcon />
      </ContactWormLink>
      <ContactWormLink href={contactSection.emailHref} label={contactSection.emailLabel}>
        <ChatIcon />
      </ContactWormLink>
    </div>
  );
}
