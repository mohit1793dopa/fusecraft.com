"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { CraftInteractiveHero } from "@/components/craft/CraftInteractiveHero";
import { DesignLightbox } from "@/components/craft/DesignLightbox";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { CraftCategory } from "@/data/craft-portfolio";

type OtherCategory = { slug: string; title: string; href: string };

type Props = {
  category: CraftCategory;
  others: OtherCategory[];
};

const CATEGORY_HERO_COPY: Record<
  string,
  {
    headline: string;
    subtext: (total: number) => string;
  }
> = {
  chairs: {
    headline: "Seating built for how the room is used.",
    subtext: (total) => `${total} designs across dining, lounge, and benches.`,
  },
  doors: {
    headline: "Entries and thresholds finished as architecture.",
    subtext: (total) => `${total} designs across pivot, brass, and custom entrance portals.`,
  },
  tables: {
    headline: "Surfaces and bases resolved as one continuous detail.",
    subtext: (total) => `${total} designs across centre, dining, and corner tables.`,
  },
  "tv-and-console-units": {
    headline: "Architectural media walls and bespoke consoles tailored to the room.",
    subtext: (total) => `${total} designs across TV feature panels and console units.`,
  },
  sofa: {
    headline: "Lounge pieces tuned to the room’s scale.",
    subtext: (total) => `${total} designs across sectional, contemporary, and metal-framed sofas.`,
  },
  beds: {
    headline: "Bedroom pieces resolved to the architectural plan.",
    subtext: (total) => `${total} designs crafted with timber joinery, upholstered headboards, and frames.`,
  },
  partitions: {
    headline: "Screens and divides that hold space without closing it.",
    subtext: (total) => `${total} designs across geometric jaalis, room dividers, and devghar screens.`,
  },
  lightings: {
    headline: "Ceiling and lobby light designed as architecture.",
    subtext: (total) => `${total} bespoke chandelier and architectural lighting fixtures.`,
  },
  jhula: {
    headline: "Swing seating with a calm architectural silhouette.",
    subtext: (total) => `${total} bespoke suspended swing design for lounges and verandas.`,
  },
  "outdoor-furniture": {
    headline: "Terrace, garden, and café pieces constructed for climate resilience.",
    subtext: (total) => `${total} designs across outdoor seating, tables, and benches.`,
  },
  "metal-furniture": {
    headline: "Sculptural steel and brass work shaped with structural discipline.",
    subtext: (total) => `${total} designs across architectural benches, frames, and seating.`,
  },
  handles: {
    headline: "Tactile architectural hardware sculpted in metal and wood.",
    subtext: (total) => `${total} designs across bespoke door pulls, handles, and hardware.`,
  },
  accessories: {
    headline: "Tactile architectural hardware, hooks, and custom wall fittings.",
    subtext: (total) => `${total} designs across door pulls, cabinet handles, hanging shelves, and brackets.`,
  },
  "railing-design": {
    headline: "Sculptural balustrades and balustrade details crafted for architectural stairs.",
    subtext: (total) => `${total} designs across staircase balustrades, parametric railings, and mezzanine barriers.`,
  },
  "facade-design": {
    headline: "Building envelopes, screens, and parametric architectural facades.",
    subtext: (total) => total > 0 ? `${total} designs across architectural screens and facades.` : "Portfolio pieces currently being curated from recent architectural completions.",
  },
  wardrobes: {
    headline: "Bespoke full-height wardrobes and architectural bedroom storage.",
    subtext: (total) => total > 0 ? `${total} designs across bespoke wardrobes and closets.` : "Portfolio pieces currently being curated from recent architectural completions.",
  },
};

export function CraftCategoryView({ category, others }: Props) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<{
    title: string;
    subcategory: string;
    images: string[];
    index: number;
  } | null>(null);

  const sections = useMemo(() => {
    if (filter === "all") return category.subcategories;
    return category.subcategories.filter((s) => s.slug === filter);
  }, [category.subcategories, filter]);

  const total = category.subcategories.reduce(
    (n, s) => n + s.designs.length,
    0,
  );

  // Smooth anchor scrolling when navigating to a specific subcategory (e.g. /craft/chairs#lounge-chairs)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const t0 = setTimeout(handleHash, 100);
    const t1 = setTimeout(handleHash, 300);
    const t2 = setTimeout(handleHash, 650);

    window.addEventListener("hashchange", handleHash);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const heroCopy = CATEGORY_HERO_COPY[category.slug] ?? {
    headline: `${category.title} crafted with workshop discipline.`,
    subtext: (n: number) =>
      `${n} design${n === 1 ? "" : "s"} from the workshop — open any piece to browse its views.`,
  };

  return (
    <main className="bg-cream">
      <CraftInteractiveHero
        title={category.title}
        eyebrow="Collection"
        headline={heroCopy.headline}
        subtext={heroCopy.subtext(total)}
        ctaLabel={total === 0 ? "Coming soon" : "Browse designs"}
        ctaHref="#designs"
        secondaryLabel="‹ All collections"
        secondaryHref="/#selected-work"
      />

      {category.subcategories.length > 1 ? (
        <div className="sticky top-[4.75rem] z-40 px-4 sm:px-6 md:top-[7.45rem] md:px-8">
          <div className="mx-auto flex justify-center">
            <div
              role="tablist"
              aria-label="Filter by type"
              className="no-scrollbar relative inline-flex w-auto max-w-full items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto rounded-full border border-line/90 bg-cream/85 p-1.5 sm:p-2 shadow-[0_8px_30px_rgba(49,51,31,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl"
            >
              <Chip
                active={filter === "all"}
                onClick={() => setFilter("all")}
                label="All"
              />
              {category.subcategories.map((s) => (
                <Chip
                  key={s.slug}
                  active={filter === s.slug}
                  onClick={() => setFilter(s.slug)}
                  label={s.title}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div id="designs" className="mx-auto max-w-[1440px] space-y-16 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
        {sections.map((section) => (
          <section
            key={section.slug}
            id={section.slug}
            className="scroll-mt-40 md:scroll-mt-52"
          >
            {category.subcategories.length > 1 ||
            section.title !== "All designs" ? (
              <Reveal>
                <p className="eyebrow text-mocha">{section.title}</p>
                <h2 className="type-headline mt-2 text-2xl md:text-3xl">
                  {section.designs.length} piece
                  {section.designs.length === 1 ? "" : "s"}
                </h2>
              </Reveal>
            ) : null}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {section.designs.map((design, i) => (
                <motion.button
                  key={design.slug}
                  type="button"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % 6) * 0.04, duration: 0.5 }}
                  onClick={() =>
                    setActive({
                      title: design.title,
                      subcategory: section.title,
                      images: design.images,
                      index: 0,
                    })
                  }
                  className="group relative aspect-square overflow-hidden rounded-[20px] bg-almond text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chestnut"
                >
                  <Image
                    src={design.main}
                    alt={design.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/80 via-moss-ink/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                    <p className="text-[0.55rem] tracking-[0.14em] text-sand/55 uppercase">
                      {design.images.length > 1
                        ? `${design.images.length} views`
                        : "View"}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-medium text-sand md:text-base">
                      {design.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}

        {total === 0 ? (
          <div className="mx-auto max-w-2xl py-12 text-center md:py-20">
            <div className="rounded-3xl border border-line bg-sand/60 px-6 py-16 shadow-xs backdrop-blur-xs md:px-12 md:py-20">
              <span className="eyebrow text-mocha">Under Development</span>
              <h2 className="type-headline mt-3 text-3xl md:text-5xl text-ink">
                Coming Soon
              </h2>
              <p className="type-body mx-auto mt-4 max-w-md text-mocha/80">
                {category.slug === "sculptures"
                  ? "Free-standing metal sculptures, patinated brass art pieces, and bespoke site-specific installations are currently being curated and documented from our workshop."
                  : category.slug === "facades" || category.slug === "facade-design"
                  ? "Architectural facade envelopes, parametric louvers, and bespoke building skin installations are currently being documented from our workshop."
                  : category.slug === "wardrobes"
                  ? "Bespoke full-height wardrobes, walk-in dressing suites, and integrated storage solutions are currently being curated and documented from our workshop."
                  : `${category.title} collections and documentation are currently in curation from our workshop.`}
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn-primary">
                  Inquire on custom work →
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="border-t border-line pt-10">
          <p className="eyebrow text-mocha">More collections</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="rounded-full bg-sand px-4 py-2 text-[0.68rem] tracking-[0.12em] text-ink uppercase ring-1 ring-line transition hover:bg-almond"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ContactCTA
        eyebrow="Custom Collections"
        title="Need a custom variation of this piece?"
        description="Every piece in our catalog can be customized for your project's materials, finishes, and architectural scale."
        ctaText="Inquire on custom work →"
        ctaHref="/contact"
      />

      <DesignLightbox
        open={!!active}
        title={active?.title ?? ""}
        subcategory={active?.subcategory}
        images={active?.images ?? []}
        index={active?.index ?? 0}
        onClose={() => setActive(null)}
        onIndexChange={(i) =>
          setActive((prev) => (prev ? { ...prev, index: i } : prev))
        }
      />
    </main>
  );
}

function Chip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative z-10 shrink-0 rounded-full px-4.5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[0.82rem] font-medium tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer ${
        active
          ? "bg-moss-ink text-sand shadow-[0_4px_14px_rgba(29,30,18,0.2)]"
          : "text-mocha/80 hover:bg-sand/70 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
