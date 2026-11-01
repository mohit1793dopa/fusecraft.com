"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { collaborators } from "@/data/site";

export function CollaboratorsBand() {
  const reduce = useReducedMotion();
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Duplicate list to guarantee infinite loop on any screen width
  const slides = [...collaborators, ...collaborators];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      skipSnaps: false,
    },
    [
      AutoScroll({
        speed: 1.2,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: !reduce,
      }),
    ]
  );

  // Track dragging to prevent accidental link opening when sliding
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    dragDistanceRef.current = 0;
    isDraggingRef.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerStartRef.current) return;
    const dx = Math.abs(e.clientX - pointerStartRef.current.x);
    const dy = Math.abs(e.clientY - pointerStartRef.current.y);
    const dist = Math.max(dx, dy);
    dragDistanceRef.current = dist;
    if (dist > 6) {
      isDraggingRef.current = true;
    }
  };

  const onPointerUp = () => {
    pointerStartRef.current = null;
    // Keep flag true briefly so the trailing click event is prevented
    setTimeout(() => {
      isDraggingRef.current = false;
      dragDistanceRef.current = 0;
    }, 100);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current || dragDistanceRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
    emblaApi.scrollPrev();
    if (autoScroll && !reduce) {
      setTimeout(() => autoScroll.play(), 1200);
    }
  }, [emblaApi, reduce]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
    emblaApi.scrollNext();
    if (autoScroll && !reduce) {
      setTimeout(() => autoScroll.play(), 1200);
    }
  }, [emblaApi, reduce]);

  // Sync scrollability
  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);



  return (
    <section className="bg-sand py-14 md:py-20 select-none">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-mocha">Collaborators</p>
              <h2 className="type-headline mt-2 max-w-xl text-2xl md:text-3xl lg:text-4xl">
                Partners who share the standard.
              </h2>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous collaborator"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors hover:bg-almond hover:border-mocha/40 active:scale-95 disabled:opacity-40"
                disabled={!canScrollPrev}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next collaborator"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors hover:bg-almond hover:border-mocha/40 active:scale-95 disabled:opacity-40"
                disabled={!canScrollNext}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Draggable Carousel Track */}
      <div className="relative mt-10 overflow-hidden">
        {/* Edge Gradient Vignettes */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-sand via-sand/80 to-transparent md:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-sand via-sand/80 to-transparent md:w-20"
        />

        <div
          ref={emblaRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <div className="flex pl-5 md:pl-8">
            {slides.map((studio, i) => {
              const href = "href" in studio ? studio.href : undefined;
              const cardContent = (
                <>
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#fbf8f2] px-6 py-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={studio.image}
                      alt={`${studio.name} logo`}
                      draggable={false}
                      className="max-h-[76%] w-full object-contain pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 grayscale"
                    />
                    {href && (
                      <span className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-cream/90 text-mocha opacity-0 shadow-xs backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="px-4 py-3.5">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-[0.58rem] tracking-[0.16em] text-mocha/60 uppercase">
                        {studio.role}
                      </p>
                      {href && (
                        <span className="text-[0.62rem] text-mocha/40 group-hover:text-ink transition-colors">
                          Visit ↗
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 font-display text-base font-medium text-ink md:text-lg">
                      {studio.name}
                    </h3>
                  </div>
                </>
              );

              const slideStyle =
                "group block shrink-0 w-[210px] sm:w-[230px] md:w-[250px] mr-3.5 sm:mr-4 md:mr-5 overflow-hidden bg-cream border border-line/70 transition-all duration-300 hover:border-mocha/30 hover:shadow-sm";

              return href ? (
                <a
                  key={`${studio.name}-${i}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  draggable={false}
                  className={`${slideStyle} hover:opacity-95`}
                >
                  {cardContent}
                </a>
              ) : (
                <article key={`${studio.name}-${i}`} className={slideStyle}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Link href="/contact" className="btn-primary">
          Contact to collaborate →
        </Link>
      </div>
    </section>
  );
}
