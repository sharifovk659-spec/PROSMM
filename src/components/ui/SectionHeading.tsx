import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  children,
  dark = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2
        className={`font-[family-name:var(--font-bebas)] text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-12 accent-gradient" />
    </div>
  );
}
