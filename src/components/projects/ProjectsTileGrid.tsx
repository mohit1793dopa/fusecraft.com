"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { projectSectors } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

type FilterTag = "All" | "Commercial" | "Residential";

export function ProjectsTileGrid({ id }: { id?: string }) {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

  const filteredProjects = projectSectors.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tag.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id={id} className="scroll-mt-24 px-5 py-14 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1360px]">
        {/* Filter Navigation Bar */}
        <div className="mb-10 md:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-line pb-6">
          <div>
            <p className="eyebrow text-mocha">Project Index</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-medium mt-1">
              Architecture & Interiors Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-line bg-sand/70 p-1.5 sm:p-2 shadow-xs">
            {(["All", "Commercial", "Residential"] as const).map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? projectSectors.length
                  : projectSectors.filter(
                      (p) => p.tag.toLowerCase() === filter.toLowerCase(),
                    ).length;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 rounded-full px-4.5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-cream text-chestnut font-semibold shadow-xs"
                      : "text-mocha/80 hover:text-ink hover:bg-cream/50"
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`font-mono text-xs sm:text-sm ${
                      isActive ? "text-chestnut font-medium" : "text-mocha/60"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-in-One-Row Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group block"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative aspect-[16/10] w-full block overflow-hidden rounded-2xl md:rounded-3xl border border-line bg-sand shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-chestnut/40"
                  >
                    <Image
                      src={project.cover}
                      alt={`${project.title} — Fusecrafts Project Photography`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Atmospheric gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Top Badges - Both in Right Corner */}
                    <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 flex items-center justify-end gap-2 sm:gap-2.5 pointer-events-none z-10 flex-wrap">
                      <span className="rounded-full border border-white/20 bg-mocha/80 px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-sand backdrop-blur-md shadow-xs">
                        {project.tag}
                      </span>
                      {"collaborator" in project && project.collaborator ? (
                        <span className="rounded-full border border-white/20 bg-[#1D1E12]/80 px-3 py-1 font-display text-[11px] sm:text-xs italic text-almond backdrop-blur-md shadow-xs">
                          with {project.collaborator}
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/20 bg-[#1D1E12]/80 px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-sand/80 backdrop-blur-md shadow-xs">
                          {project.location}
                        </span>
                      )}
                    </div>

                    {/* Bottom Content inside image: Title + "View project" Button */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4 z-10">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-normal text-sand tracking-tight transition-colors duration-200 group-hover:text-cream">
                          {project.title}
                        </h3>
                      </div>

                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-cream/95 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-ink shadow-md backdrop-blur-md transition-all duration-300 group-hover:bg-cream group-hover:border-white group-hover:scale-105">
                        <span>View project</span>
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}