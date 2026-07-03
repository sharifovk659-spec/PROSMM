"use client";

import { motion } from "framer-motion";
import { useContent } from "@/i18n";

const icons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M21.58 7.19a2.5 2.5 0 00-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41A2.5 2.5 0 002.42 7.19 26.3 26.3 0 002 12a26.3 26.3 0 00.42 4.81 2.5 2.5 0 001.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.5 2.5 0 001.77-1.78A26.3 26.3 0 0022 12a26.3 26.3 0 00-.42-4.81zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
  "Instagram Reels": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  ),
};

interface SocialIconsProps {
  vertical?: boolean;
  className?: string;
}

export function SocialIcons({ vertical = false, className = "" }: SocialIconsProps) {
  const { socialLinks } = useContent();

  return (
    <div
      className={`flex gap-3 ${vertical ? "flex-col" : "flex-row justify-center"} ${className}`}
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card text-gray transition-[filter,box-shadow] duration-[250ms] ease-in-out hover:brightness-[1.04] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        >
          {icons[social.name]}
        </motion.a>
      ))}
    </div>
  );
}
