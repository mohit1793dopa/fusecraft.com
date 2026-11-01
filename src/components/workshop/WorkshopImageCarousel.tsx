"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export interface WorkshopSlide {
  id: string;
  title: string;
  bay: string;
  image: string;
  tag: string;
}

const DEFAULT_SLIDES: WorkshopSlide[] = [
  {
    id: "ws-4368",
    bay: "Bay 01 // Hand Joinery",
    title: "Timber Framing & Floor Pre-Assembly",
    tag: "Floor Assembly",
    image: "/images/workshop/gallery/IMG_4368.jpg",
  },
  {
    id: "ws-4369",
    bay: "Bay 01 // Carpentry",
    title: "Precision Groove & Circular Saw Jig Cutting",
    tag: "Saw Milling",
    image: "/images/workshop/gallery/IMG_4369.jpg",
  },
  {
    id: "ws-4370",
    bay: "Bay 01 // Carpentry",
    title: "Solid Hardwood Modular Shelving Prototype",
    tag: "Timber Mockup",
    image: "/images/workshop/gallery/IMG_4370.jpg",
  },
  {
    id: "ws-4371",
    bay: "Bay 01 // Carpentry",
    title: "Sub-Millimeter Calibrated Table Saw Milling",
    tag: "Plank Milling",
    image: "/images/workshop/gallery/IMG_4371.jpg",
  },
  {
    id: "ws-4372",
    bay: "Bay 04 // Upholstery",
    title: "Juki Industrial Seam Guiding & Boucle Stitching",
    tag: "Machine Stitching",
    image: "/images/workshop/gallery/IMG_4372.jpg",
  },
  {
    id: "ws-4373",
    bay: "Bay 04 // Upholstery",
    title: "Bench Tailoring & Heavy Boucle Fabric Assembly",
    tag: "Fabric Tailoring",
    image: "/images/workshop/gallery/IMG_4373.jpg",
  },
  {
    id: "ws-4374",
    bay: "Bay 04 // Upholstery",
    title: "High-Density Foam Layering & Pattern Alignment",
    tag: "Foam & Textile",
    image: "/images/workshop/gallery/IMG_4374.jpg",
  },
  {
    id: "ws-4375",
    bay: "Studio Floor // Material Archive",
    title: "Fabric Swatch Library & Texture Sampling",
    tag: "Material Library",
    image: "/images/workshop/gallery/IMG_4375.jpg",
  },
  {
    id: "ws-4376",
    bay: "Bay 03 // Metal Studio",
    title: "Hand-Rubbed Brass Patina & Chemical Formulas",
    tag: "Chemical Patina",
    image: "/images/workshop/gallery/IMG_4376.jpg",
  },
  {
    id: "ws-4377",
    bay: "Finishing Yard // Nagpur",
    title: "Dual Spray Gun Architectural Matte Coating",
    tag: "Spray Finishing",
    image: "/images/workshop/gallery/IMG_4377.jpg",
  },
  {
    id: "ws-4378",
    bay: "Finishing Yard // Nagpur",
    title: "Precision Fluted Architectural Panel Spraying",
    tag: "Fluted Woodwork",
    image: "/images/workshop/gallery/IMG_4378.jpg",
  },
  {
    id: "ws-4379",
    bay: "Studio Floor // Prototype Bay",
    title: "Curved Monolithic Light Coves & LED Channels",
    tag: "Curved Joinery",
    image: "/images/workshop/gallery/IMG_4379.jpg",
  },
  {
    id: "ws-4380",
    bay: "Studio Floor // Prototype Bay",
    title: "Textured Amber Glass Screen & Circular Light Frame",
    tag: "Lighting Prototype",
    image: "/images/workshop/gallery/IMG_4380.jpg",
  },
  {
    id: "ws-4381",
    bay: "Bay 03 // Metal Studio",
    title: "Artisan Hand Polishing & Surface Metal Inspection",
    tag: "Surface Tolerances",
    image: "/images/workshop/gallery/IMG_4381.jpg",
  },
];

interface Props {
  slides?: WorkshopSlide[];
}

export function WorkshopImageCarousel({ slides = DEFAULT_SLIDES }: Props) {
  // Duplicate for seamless infinite loop
  const loop = [...slides, ...slides];

  return (
    <section className="border-t border-line bg-sand py-20 md:py-28 overflow-hidden">
      {/* Keyframe animation for continuous smooth linear slide */}
      <style>{`
        @keyframes workshop-linear-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .workshop-linear-track:hover {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .workshop-linear-track { animation: none !important; }
        }
      `}</style>

      {/* Header Container with Generous Left-Right Padding */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-24 mb-10 md:mb-14">
        <Reveal>
          <div>
            <p className="eyebrow text-mocha">Studio Archive &bull; Active Fabrication</p>
            <h2 className="font-display font-medium mt-2 text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
              The workshop floor in motion.
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Linear Slider Track with Edge Gradient Vignettes */}
      <div className="relative w-full overflow-hidden">
        {/* Left Vignette Fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 md:w-36"
          style={{
            background: "linear-gradient(to right, #eee6d3 15%, transparent)",
          }}
        />

        {/* Right Vignette Fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 md:w-36"
          style={{
            background: "linear-gradient(to left, #eee6d3 15%, transparent)",
          }}
        />

        {/* Continuous Infinite Marquee Track with Native 4:5 Portrait Card Ratio */}
        <div
          className="workshop-linear-track flex w-max gap-5 md:gap-6 py-4"
          style={{
            animation: "workshop-linear-slide 72s linear infinite",
            willChange: "transform",
          }}
        >
          {loop.map((item, i) => (
            <article
              key={`${item.id}-${i}`}
              className="group relative w-[265px] sm:w-[295px] md:w-[325px] lg:w-[340px] aspect-[4/5] flex-shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border border-line bg-cream shadow-[0_12px_36px_rgba(29,30,18,0.07)] transition-all duration-500 hover:border-mocha/40 hover:shadow-2xl"
            >
              {/* Media with native 4:5 ratio framing and smooth hover zoom */}
              <div className="relative h-full w-full overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 290px, 340px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
              </div>

              {/* Bottom Floating Badge Pills */}
              <div className="absolute bottom-3 sm:bottom-3.5 inset-x-2.5 sm:inset-x-3.5 flex items-center justify-between gap-1.5 sm:gap-2 z-10 pointer-events-none">
                <span className="rounded-full bg-cream/95 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8.5px] sm:text-[9.5px] md:text-[10px] font-mono font-medium text-moss-ink shadow-sm backdrop-blur-md border border-line/60 whitespace-nowrap leading-none tracking-tight">
                  {item.bay}
                </span>
                <span className="rounded-full bg-moss/85 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[7.5px] sm:text-[8px] md:text-[8.5px] uppercase tracking-wide text-sand backdrop-blur-md whitespace-nowrap leading-none shrink-0">
                  {item.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopImageCarousel;
