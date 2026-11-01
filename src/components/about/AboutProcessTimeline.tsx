"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

interface TimelineStep {
  id: string;
  number: string;
  tag: string;
  title: string;
  quote: string;
  body: string;
  chips: string[];
  image: string;
  imageAlt: string;
  badge?: string;
  imageClassName?: string;
}

const stepsData: TimelineStep[] = [
  {
    id: "step-1",
    number: "01",
    tag: "ORIGIN",
    title: "How we started",
    quote: "We set up our own workshop to take control of how details turn out.",
    body: "Detailing was usually left to the end of a project, handed to whoever was available on site in a hurry. We started with carpentry, then brought metalwork, upholstery, and finishing in-house so every trade answers to the same drawing and standard.",
    chips: ["Carpentry (Genesis)", "Metalwork", "Upholstery", "Finishing"],
    image: "/images/workshop/gallery/IMG_4368.jpg",
    imageAlt: "Artisan craftsman assembling timber framing on the Fusecrafts workshop floor in Nagpur",
    badge: "01 • WORKSHOP ORIGIN · NAGPUR",
    imageClassName: "object-[65%_60%]",
  },
  {
    id: "step-2",
    number: "02",
    tag: "METHOD",
    title: "How we work",
    quote: "If we think a detail will not work, we say so before it is made.",
    body: "Fusion means combining dissimilar materials — brass in timber, cane in metal, lighting built directly into screens. We make full-scale 1:1 samples of difficult junctions first to catch problems before site delivery, always experimenting within the brief and budget.",
    chips: ["Dissimilar Materials", "1:1 Physical Samples", "Disciplined to the Brief"],
    image: "/images/workshop/gallery/IMG_4381.jpg",
    imageAlt: "Artisan hands inspecting surface finish and joint tolerances on the workshop floor",
    badge: "02 • 1:1 DETAIL INSPECTION",
    imageClassName: "object-center",
  },
  {
    id: "step-3",
    number: "03",
    tag: "REPERTOIRE",
    title: "What we make",
    quote: "A handle gets the same attention as a four-metre door.",
    body: "Doors, partitions, screens, jaalis, wall panels, staircases, integrated light fittings, cabinetry, and bespoke hardware. The scale of the piece never changes the care with which it is engineered and finished.",
    chips: ["Doors & Partitions", "Screens & Jaalis", "Custom Lighting", "Hardware & Pulls", "Painting & Polishing"],
    image: "/images/browse-by-craft/doors.jpg",
    imageAlt: "Bespoke architectural portal door with copper-brass inlays and custom door pull by Fusecrafts",
    badge: "03 • BESPOKE REPERTOIRE",
    imageClassName: "object-[35%_55%]",
  },
  {
    id: "step-4",
    number: "04",
    tag: "COLLABORATION",
    title: "Who we work with",
    quote: "Everything is made in our workshop and brought to site finished.",
    body: "We partner with architects, interior designers, and discerning homeowners while designs are still evolving. Delivering fully pre-assembled, finished elements means less time on site, zero mess, and no rushed decisions under pressure.",
    chips: ["Architects & Designers", "100% Pre-Assembled", "Minimal Site Downtime"],
    image: "/images/about/collaboration-design-review.jpg",
    imageAlt: "Architect Aziz Rasheed and collaborators reviewing architectural plans and joinery drawings together",
    badge: "04 • COLLABORATION",
    imageClassName: "object-[center_35%]",
  },
  {
    id: "step-5",
    number: "05",
    tag: "TRAJECTORY",
    title: "Where we are going",
    quote: "We want to get better at what we do rather than simply take on more of it.",
    body: "We keep every failed sample, cracked joint, and rejected finish in our workshop library to learn from. Our focus is a dedicated testing laboratory, training craftsmen as detail specialists, and partnering with studios globally.",
    chips: ["The Testing Archive", "Detail Specialists", "Global Reach"],
    image: "/images/about/showroom-logo-zoomed.png",
    imageAlt: "Fusecrafts architectural exhibition pavilion showcasing the signature studio brand mark",
    badge: "05 • THE FUSECRAFTS WORKSHOP",
    imageClassName: "object-center",
  },
];

export function AboutProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepId, setActiveStepId] = useState<string>("step-1");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = stepsData.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = stepElements.length - 1; i >= 0; i--) {
        const item = stepElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveStepId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative mt-8">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-10 xl:grid-cols-[340px_1fr] xl:gap-12">
        {/* Sticky Desktop Navigation Rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-4 rounded-2xl border border-line bg-cream p-6 shadow-xs">
            <p className="eyebrow text-mocha/70">Navigation</p>
            <nav className="mt-4 space-y-1.5" aria-label="Process steps">
              {stepsData.map((step) => {
                const isActive = activeStepId === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(step.id)}
                    className={`group flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[13.5px] transition-all duration-200 ${
                      isActive
                        ? "bg-sand text-chestnut font-semibold shadow-xs"
                        : "text-mocha/80 font-medium hover:bg-sand/60 hover:text-ink"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          isActive
                            ? "text-chestnut font-semibold"
                            : "text-mocha/50 group-hover:text-mocha"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="leading-snug">{step.title}</span>
                    </div>
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-200 ${
                        isActive
                          ? "scale-125 bg-chestnut"
                          : "bg-line group-hover:bg-mocha/40"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-line/60 pt-4">
              <span className="eyebrow block text-[10px] text-mocha/50">
                Fusecrafts
              </span>
              <span className="text-xs text-mocha">Nagpur &bull; Est. 2022</span>
            </div>
          </div>
        </aside>

        {/* Main Process Cards Stream */}
        <div className="relative space-y-6 md:space-y-8">
          {/* Animated Vertical Progress Track in gutter between navigation rail and cards */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute -left-5 xl:-left-6 top-6 bottom-8 w-[2px] rounded-full bg-line/80 pointer-events-none"
          >
            {/* Active Chestnut Fill */}
            <motion.div
              style={{ height: progressHeight }}
              className="w-full rounded-full bg-chestnut origin-top"
            />
          </div>

          {stepsData.map((step) => {
            const isActive = activeStepId === step.id;
            return (
              <div
                id={step.id}
                key={step.id}
                className="scroll-mt-36 group relative"
              >
                {/* Subtle Step Marker Node on the vertical line (No numbers, clean minimal bead) */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute -left-5 xl:-left-6 top-8 -translate-x-1/2 pointer-events-none z-10"
                >
                  <span
                    className={`block h-2 w-2 rounded-full border border-sand transition-all duration-300 ${
                      isActive
                        ? "bg-chestnut scale-125 shadow-xs"
                        : "bg-line/90"
                    }`}
                  />
                </div>

                {/* Step Card Content */}
                <Reveal delay={0.04}>
                    <article className="overflow-hidden rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:border-mocha/40 hover:shadow-md md:p-8">
                      <div className="flex items-center justify-between border-b border-line pb-3.5">
                        <span className="eyebrow text-mocha">{step.tag}</span>
                        <span className="font-display text-xl font-medium text-chestnut">
                          {step.number}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:items-center lg:gap-10">
                        <div>
                          <h3 className="type-headline text-2xl md:text-3xl text-ink font-medium">
                            {step.title}
                          </h3>

                          <p className="font-display mt-2.5 text-base md:text-lg italic text-chestnut leading-snug">
                            &ldquo;{step.quote}&rdquo;
                          </p>

                          <p className="type-body mt-3 text-xs sm:text-[13.5px] md:text-sm leading-relaxed text-mocha/90">
                            {step.body}
                          </p>

                          {/* Minimalist chips */}
                          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-line/60">
                            {step.chips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-line bg-sand/60 px-3 py-1 font-sans text-xs text-mocha font-medium whitespace-nowrap"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Visual Frame */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-almond/30 shadow-inner">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 30vw"
                            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                              step.imageClassName || "object-center"
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-moss/25 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2.5 left-2.5 rounded bg-moss/75 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-sand backdrop-blur-sm">
                            {step.badge || `${step.number} • ${step.title}`}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
