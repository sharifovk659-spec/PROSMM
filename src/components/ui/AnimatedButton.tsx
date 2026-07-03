"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "dark";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  solid: "btn-primary font-semibold text-white",
  outline:
    "border border-black/15 bg-transparent text-black/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[filter,transform,box-shadow] duration-[250ms] ease-in-out hover:brightness-[1.04] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]",
  dark: "btn-primary font-semibold text-white",
};

export function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
}: AnimatedButtonProps) {
  const base =
    "relative inline-flex items-center justify-center rounded-[19px] px-8 py-3.5 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.1em] sm:px-10 sm:py-4";

  const motionProps = {
    whileTap: { scale: 0.98 },
    whileHover: {
      scale: 1.04,
      y: -2,
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...motionProps}
        className={`${base} ${variants[variant]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...motionProps}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
