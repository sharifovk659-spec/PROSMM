"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { ViewSlide } from "@/data";
import { useContent } from "@/i18n";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

function PhoneScreen({ src }: { src: string }) {
  return (
    <div className="relative h-[180px] w-[90px] shrink-0 overflow-hidden rounded-[16px] border border-black/10 bg-card shadow-[0_4px_16px_rgba(0,0,0,0.2)] sm:h-[220px] sm:w-[110px] sm:rounded-[20px]">
      <div className="absolute left-1/2 top-1.5 z-10 h-1 w-7 -translate-x-1/2 rounded-full bg-white/15" />
      <Image src={src} alt="" fill sizes="110px" className="object-cover" />
    </div>
  );
}

function SlideCard({ slide }: { slide: ViewSlide }) {
  const { uiLabels } = useContent();

  return (
    <div className="flex h-full min-h-[260px] flex-col justify-between rounded-[22px] bg-orange-gradient p-5 shadow-[0_4px_24px_rgba(0,0,0,0.15)] sm:min-h-[300px] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-[family-name:var(--font-bebas)] text-4xl leading-none text-white sm:text-5xl">
            {slide.views}
          </p>
          <p className="mt-1 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-white/75 sm:text-sm">
            {uiLabels.viewsCount}
          </p>
        </div>
        <span className="rounded-full bg-black/20 px-3 py-1 font-[family-name:var(--font-inter)] text-xs text-white/90">
          {uiLabels.smmTag}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-center gap-3 sm:gap-4">
        {slide.screens.map((src) => (
          <PhoneScreen key={src} src={src} />
        ))}
      </div>

      <p className="mt-4 text-center font-[family-name:var(--font-inter)] text-sm text-white/90 sm:text-base">
        {slide.label}
      </p>
    </div>
  );
}

export function ViewsSection() {
  const { sectionTitles, uiLabels, viewSlides } = useContent();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <SectionContainer className="bg-light" maxWidth="xl">
      <SectionReveal>
        <SectionHeading dark={false}>{sectionTitles.views}</SectionHeading>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="views-swiper relative mt-10 sm:mt-12">
          <motion.button
            type="button"
            aria-label="Предыдущий слайд"
            onClick={() => swiperRef.current?.slidePrev()}
            whileTap={{ scale: 0.96 }}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/8 bg-white text-black/80 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-[filter,transform,box-shadow] duration-[250ms] ease-in-out hover:brightness-[1.04] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:-left-5 sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <motion.button
            type="button"
            aria-label="Следующий слайд"
            onClick={() => swiperRef.current?.slideNext()}
            whileTap={{ scale: 0.96 }}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/8 bg-white text-black/80 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-[filter,transform,box-shadow] duration-[250ms] ease-in-out hover:brightness-[1.04] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:-right-5 sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".views-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-12"
          >
            {viewSlides.map((slide) => (
              <SwiperSlide key={slide.label}>
                <SlideCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="views-pagination mt-6 flex justify-center gap-2" />
        </div>
      </SectionReveal>
    </SectionContainer>
  );
}
