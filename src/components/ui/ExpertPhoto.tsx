"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExpertPhotoProps {
  src: string;
  alt: string;
  side: "left" | "right";
  delay?: number;
}

export function ExpertPhoto({ src, alt, side, delay = 0 }: ExpertPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none absolute bottom-0 z-[2] w-[42vw] max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] ${
        side === "left" ? "left-0 sm:left-2" : "right-0 sm:right-2"
      }`}
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 42vw, 380px"
          className="object-cover object-top"
        />
        {/* Bottom fade mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        {/* Side fade for blending */}
        <div
          className={`absolute inset-0 ${
            side === "left"
              ? "bg-gradient-to-r from-black/60 via-transparent to-transparent"
              : "bg-gradient-to-l from-black/60 via-transparent to-transparent"
          }`}
        />
      </div>
    </motion.div>
  );
}
