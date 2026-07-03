"use client";

import { motion } from "framer-motion";
import { useContent } from "@/i18n";

function Star({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="icon-gradient"
      aria-hidden
    >
      <path
        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FloatingStars() {
  const { floatingStars } = useContent();

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {floatingStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50 blur-[4px]"
          style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom }}
          animate={{
            y: [0, -12, 0, 8, 0],
            x: [0, 6, 0, -4, 0],
            opacity: [0.35, 0.55, 0.4, 0.5, 0.35],
            scale: [1, 1.06, 1, 1.04, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={star.size} />
        </motion.div>
      ))}
    </div>
  );
}
