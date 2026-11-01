import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { BottomFadeGrid } from "@/components/ui/top-fade-grid";
import { cn } from "@/lib/utils";

export type ContactCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
};

export function ContactCTA({
  eyebrow = "Begin a project",
  title = "Tell us about the room — and the detail that holds it together.",
  description = "Architects, designers, and clients: we collaborate early across facade, lighting, furniture, and partitions.",
  ctaText = "Get in touch →",
  ctaHref = "/contact",
  secondaryText,
  secondaryHref,
  className = "bg-sand px-5 py-20 md:px-8 md:py-28",
}: ContactCTAProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Upside-down drafting grid in the extreme background behind this banner */}
      <BottomFadeGrid />

      <Reveal className="relative z-10 mx-auto max-w-[1440px] overflow-hidden bg-cream px-6 py-14 md:px-16 md:py-20 rounded-[24px] border border-line/60 shadow-xs">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-mocha">{eyebrow}</p>
            <h2 className="type-display mt-4 max-w-2xl text-3xl md:text-5xl">
              {title}
            </h2>
            <p className="type-body mt-5 max-w-lg text-base md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={ctaHref} className="btn-primary w-fit">
              {ctaText}
            </Link>
            {secondaryText && secondaryHref ? (
              <a
                href={secondaryHref}
                className="btn-subtle w-fit"
              >
                {secondaryText}
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
