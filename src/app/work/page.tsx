import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CraftInteractiveHero } from "@/components/craft/CraftInteractiveHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { craftCategorySummaries } from "@/data/craft-portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Architectural furniture, lighting, and bespoke objects crafted under one roof — explore signature collections across 15 craft disciplines.",
};

// 3x5 Grid shape pattern matching the signature home page discipline grid:
// Row 1: Square, Circle, Circle, Square, Circle
// Row 2: Circle, Square, Circle, Circle, Square
// Row 3: Square, Circle, Circle, Square, Circle
const SHAPE_PATTERN: Array<"square" | "circle"> = [
  "square", "circle", "circle", "square", "circle",
  "circle", "square", "circle", "circle", "square",
  "square", "circle", "circle", "square", "circle",
];

export default function WorkPage() {
  return (
    <main className="bg-sand">
      {/* 1. Distinct Centered Hero Section */}
      <CraftInteractiveHero
        eyebrow="Work"
        title="Work"
        headline="Collections from the workshop."
        subtext="Architectural furniture, lighting, and bespoke objects crafted under one roof — explore signature collections across 15 craft disciplines."
        ctaLabel="Browse collections"
        ctaHref="#collections"
      />

      {/* 2. Collections Grid Section with Alternating Shapes */}
      <section id="collections" className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-7 md:grid-cols-5 md:gap-x-6 md:gap-y-8 lg:gap-x-7 lg:gap-y-9">
            {craftCategorySummaries.map((cat, i) => {
              const isCircle = SHAPE_PATTERN[i % SHAPE_PATTERN.length] === "circle";
              const count = cat.designCount;

              return (
                <Reveal key={cat.slug} delay={(i % 5) * 0.03} className="flex justify-center">
                  <Link
                    href={cat.href}
                    className={`group relative block aspect-square w-full max-w-[185px] sm:max-w-[200px] md:max-w-[215px] lg:max-w-[228px] overflow-hidden bg-almond transition-all duration-500 hover:shadow-xl ${
                      isCircle
                        ? "rounded-full ring-1 ring-moss-ink/15"
                        : "rounded-[22px] sm:rounded-[26px] md:rounded-[28px] ring-1 ring-moss-ink/10"
                    }`}
                  >
                    <Image
                      src={cat.cover}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 228px"
                      quality={80}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                        isCircle
                          ? "from-moss-ink/85 via-moss-ink/25 to-transparent opacity-90 group-hover:opacity-100"
                          : "from-moss-ink/80 via-moss-ink/15 to-transparent opacity-85 group-hover:opacity-95"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-3 pb-3.5 pt-7 text-center sm:pb-4 md:pb-5">
                      <p className="text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem] tracking-[0.16em] text-sand/80 uppercase font-mono">
                        {count > 0 ? `${count} design${count === 1 ? "" : "s"}` : "Collection"}
                      </p>
                      <h2 className="mt-1 font-display text-sm sm:text-base md:text-[1.12rem] lg:text-[1.18rem] font-medium text-sand leading-tight">
                        {cat.title}
                      </h2>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Reusable Signature Contact CTA */}
      <ContactCTA
        eyebrow="Custom Manufacturing"
        title="Need a bespoke detail or custom dimension?"
        description="Every piece in our catalog can be customized for your project's materials, finishes, and scale."
        ctaText="Inquire on custom work →"
        ctaHref="/contact"
      />
    </main>
  );
}
