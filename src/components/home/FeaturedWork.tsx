"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { works } from "@/data/site";

// 3x5 Grid shape pattern from user specification:
// Row 1: Square, Circle, Circle, Square, Circle
// Row 2: Circle, Square, Circle, Circle, Square
// Row 3: Square, Circle, Circle, Square, Circle
const SHAPE_PATTERN: Array<"square" | "circle"> = [
  "square", "circle", "circle", "square", "circle",
  "circle", "square", "circle", "circle", "square",
  "square", "circle", "circle", "square", "circle",
];

export function FeaturedWork() {
  const reduce = useReducedMotion();
  const allFeatured = works.slice(0, 15);
  const visibleItems = allFeatured;

  return (
    <section
      id="selected-work"
      className="bg-sand px-5 py-14 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-mocha">Disciplines & Crafts</p>
              <h2 className="type-headline mt-2 text-2xl md:text-3xl">
                Pieces for the room.
              </h2>
            </div>
            <p className="type-annotation max-w-md md:text-right">
              Beds, chairs, doors, swings, lightings, partitions, sofa, tables,
              and bespoke architectural details.
            </p>
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-10 md:mt-12 mx-auto max-w-[1240px] grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-7 md:grid-cols-5 md:gap-x-6 md:gap-y-8 lg:gap-x-7 lg:gap-y-9"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((work, i) => {
              const isCircle = SHAPE_PATTERN[i % SHAPE_PATTERN.length] === "circle";

              return (
                <motion.div
                  key={work.slug}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.02,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex justify-center"
                >
                  <Link
                    href={work.href}
                    className={`group relative block aspect-square w-full max-w-[195px] sm:max-w-[200px] lg:max-w-[210px] overflow-hidden bg-almond transition-all duration-500 hover:shadow-xl ${
                      isCircle
                        ? "rounded-full ring-1 ring-moss-ink/15"
                        : "rounded-[22px] sm:rounded-[26px] md:rounded-[28px] ring-1 ring-moss-ink/10"
                    }`}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 210px"
                      quality={75}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                        isCircle
                          ? "from-moss-ink/85 via-moss-ink/25 to-transparent opacity-90 group-hover:opacity-100"
                          : "from-moss-ink/80 via-moss-ink/15 to-transparent opacity-85 group-hover:opacity-95"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-3 pb-3.5 pt-6 text-center sm:pb-4 md:pb-4.5">
                      <p className="text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] tracking-[0.16em] text-sand/80 uppercase font-mono">
                        {work.category}
                      </p>
                      <h3 className="mt-1 font-display text-sm sm:text-base md:text-[1.08rem] font-medium text-sand leading-tight">
                        {work.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/work"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Explore all collections</span>
            <span aria-hidden className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
