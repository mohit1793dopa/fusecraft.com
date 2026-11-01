"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TopFadeGrid } from "@/components/ui/top-fade-grid";

type Props = {
  title: string;
  eyebrow?: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trailImages?: any[];
  hint?: string;
};

export function CraftInteractiveHero({
  title,
  eyebrow = "Collection",
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream py-24 sm:py-28 md:py-36">
      {/* Top Fade Grid Background in Fusecrafts warm architectural style */}
      <TopFadeGrid />

      {/* Soft ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(230,204,178,0.35),transparent_68%)]"
      />

      {/* Copy & CTAs */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center sm:px-8">
        <Reveal className="mx-auto flex w-full max-w-2xl flex-col items-center">
          {eyebrow ? <p className="eyebrow text-mocha">{eyebrow}</p> : null}
          {title && title.toLowerCase() !== (eyebrow || "").toLowerCase() ? (
            <p className="mt-3 text-[0.7rem] tracking-[0.2em] text-mocha/45 uppercase">
              {title}
            </p>
          ) : null}
          <h1 className="type-headline mx-auto mt-3 max-w-3xl text-3xl leading-[1.12] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {headline}
          </h1>
          <p className="type-body mx-auto mt-5 max-w-md text-base text-mocha/80 md:text-lg">
            {subtext}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href={ctaHref} className="btn-primary">
              <span>{ctaLabel}</span>
              <span aria-hidden>→</span>
            </Link>
            {secondaryHref ? (
              <Link href={secondaryHref} className="btn-ghost text-chestnut">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
