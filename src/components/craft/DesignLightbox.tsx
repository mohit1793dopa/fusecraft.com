"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  SqueezeCarousel,
  type SqueezeSlide,
} from "@/components/ui/carousel-squeeze";
import { FramerMoveableThumbnails } from "@/components/ui/framer-moveable-thumbnails";

type DesignLightboxProps = {
  open: boolean;
  title: string;
  subcategory?: string;
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

function useMaxCarouselHeight() {
  const [maxH, setMaxH] = useState(640);
  useEffect(() => {
    const update = () => setMaxH(Math.round(window.innerHeight * 0.76));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return maxH;
}

export function DesignLightbox({
  open,
  title,
  subcategory,
  images,
  index,
  onClose,
  onIndexChange,
}: DesignLightboxProps) {
  const reduce = useReducedMotion();
  const labelId = useId();
  const count = images.length;
  const current = images[index] ?? images[0];
  const closeRef = useRef<HTMLButtonElement>(null);
  const maxCarouselHeight = useMaxCarouselHeight();

  const slides: SqueezeSlide[] = useMemo(
    () =>
      images.map((src, i) => ({
        id: `${src}-${i}`,
        image: src,
        imageAlt: `${title} — view ${i + 1}`,
        overlay: (
          <span className="rounded-full bg-moss-ink/45 px-2.5 py-1 text-[0.62rem] tracking-[0.14em] text-sand/90 uppercase backdrop-blur-sm">
            {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        ),
      })),
    [images, title, count],
  );

  const thumbnailItems = useMemo(
    () =>
      images.map((src, i) => ({
        id: `${src}-${i}`,
        url: src,
        title: `${title} — view ${i + 1}`,
      })),
    [images, title],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (count < 2) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onIndexChange((index + 1) % count);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onIndexChange((index - 1 + count) % count);
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, onIndexChange, index, count]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          className="fixed inset-0 z-[80] flex flex-col"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute inset-0 bg-[#0e0f0a]/92 backdrop-blur-md"
            onClick={onClose}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-[18%] z-[1] rounded-full bg-almond/10 blur-3xl"
          />

          <div className="relative z-20 flex items-start justify-between gap-3 px-4 pt-3.5 sm:gap-4 sm:px-10 sm:pt-5 md:px-12 md:pt-6 lg:px-16">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.35 }}
              className="min-w-0"
            >
              {subcategory ? (
                <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.18em] sm:tracking-[0.2em] text-almond/60 uppercase">
                  {subcategory}
                </p>
              ) : null}
              <h2
                id={labelId}
                className="mt-0.5 sm:mt-1 font-display text-[1.15rem] leading-tight font-medium tracking-tight text-sand sm:text-xl md:text-2xl lg:text-[1.65rem]"
              >
                {title}
              </h2>
            </motion.div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="group flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full bg-sand text-ink shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-almond"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] transition-transform duration-300 group-hover:rotate-90"
              >
                <path
                  d="M4.5 4.5l9 9M13.5 4.5l-9 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* More side padding; carousel sized to image ratio */}
          <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-8 lg:px-16">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="mx-auto w-full max-w-[1240px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop view: SqueezeCarousel */}
              <div className="hidden md:block">
                {count > 1 ? (
                  <SqueezeCarousel
                    slides={slides}
                    activeIndex={index}
                    onActiveChange={onIndexChange}
                    fitToImage
                    maxHeight={maxCarouselHeight}
                    gap={14}
                    slatWidth={count >= 5 ? 44 : count >= 4 ? 52 : 60}
                    radius={12}
                    duration={700}
                    hoverGrow={false}
                    autoplay={false}
                    controls
                  />
                ) : (
                  <div className="relative mx-auto flex max-h-[min(78vh,760px)] w-full items-center justify-center overflow-hidden rounded-[12px] bg-moss-ink/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={current}
                      alt={title}
                      className="max-h-[min(78vh,760px)] w-auto max-w-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Mobile view only: Large, prominent moveable thumbnails gallery with adaptive portrait/landscape height */}
              <div className="block md:hidden w-full">
                <FramerMoveableThumbnails
                  items={thumbnailItems}
                  index={index}
                  onIndexChange={onIndexChange}
                  adaptiveAspect={true}
                  objectFit="contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
