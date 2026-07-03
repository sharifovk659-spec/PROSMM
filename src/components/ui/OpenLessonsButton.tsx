"use client";

import type { ReactNode } from "react";
import { useFreeLessons } from "@/components/providers/FreeLessonsProvider";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

interface OpenLessonsButtonProps {
  children: ReactNode;
  className?: string;
}

export function OpenLessonsButton({ children, className = "" }: OpenLessonsButtonProps) {
  const { open } = useFreeLessons();

  return (
    <AnimatedButton onClick={open} className={className}>
      {children}
    </AnimatedButton>
  );
}
