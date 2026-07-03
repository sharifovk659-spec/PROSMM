import type { ReactNode } from "react";

type MaxWidth = "sm" | "md" | "lg" | "xl";

const maxWidthClass: Record<MaxWidth, string> = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  maxWidth?: MaxWidth;
}

export function SectionContainer({
  children,
  id,
  className = "",
  innerClassName = "",
  maxWidth = "lg",
}: SectionContainerProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`mx-auto ${maxWidthClass[maxWidth]} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
