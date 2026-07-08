"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

type Direction = "left" | "right";

interface DraggableMarqueeProps {
  direction: Direction;
  speed?: number;
  paused?: boolean;
  className?: string;
  children: ReactNode;
}

export function DraggableMarquee({
  direction,
  speed = 0.45,
  paused = false,
  className = "",
  children,
}: DraggableMarqueeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef(0);
  const initializedRef = useRef(false);

  const applyTransform = useCallback((offset: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  }, []);

  const normalizeOffset = useCallback(() => {
    const half = halfWidthRef.current;
    if (half <= 0) return;

    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  }, []);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    halfWidthRef.current = trackRef.current.scrollWidth / 2;

    if (!initializedRef.current && halfWidthRef.current > 0) {
      offsetRef.current = direction === "right" ? -halfWidthRef.current : 0;
      initializedRef.current = true;
      applyTransform(offsetRef.current);
    }
  }, [applyTransform, direction]);

  useEffect(() => {
    measure();

    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    const tick = () => {
      if (!paused && !isDraggingRef.current && halfWidthRef.current > 0) {
        if (direction === "left") {
          offsetRef.current -= speed;
        } else {
          offsetRef.current += speed;
        }
        normalizeOffset();
        applyTransform(offsetRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform, direction, normalizeOffset, paused, speed]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    if (wrapRef.current) wrapRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + delta;
    applyTransform(offsetRef.current);
  };

  const endDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    normalizeOffset();
    applyTransform(offsetRef.current);
    if (wrapRef.current) wrapRef.current.style.cursor = "grab";
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    endDrag();
  };

  return (
    <div
      ref={wrapRef}
      className={`reviews-marquee-wrap cursor-grab select-none touch-pan-x ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div ref={trackRef} className="reviews-marquee-track flex w-max gap-3 py-2 sm:gap-4 sm:py-2.5">
        {children}
      </div>
    </div>
  );
}
