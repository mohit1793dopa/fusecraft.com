import type { Metadata } from "next";
import { CraftInteractiveHero } from "@/components/craft/CraftInteractiveHero";
import { ProjectsTileGrid } from "@/components/projects/ProjectsTileGrid";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Fully customized furniture, bespoke installations, and architectural details crafted for commercial and residential client spaces.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-cream">
      {/* 1. Distinct Centered Hero Section */}
      <CraftInteractiveHero
        eyebrow="Projects"
        title="Projects"
        headline="Built for the architectural brief."
        subtext="Bespoke furniture, custom installations, and architectural details — fully customized and crafted for each client's unique space."
        ctaLabel="Explore projects"
        ctaHref="#projects-grid"
      />

      {/* 2. Interactive Projects Showcase — 2-in-one-row visual tile gallery */}
      <ProjectsTileGrid id="projects-grid" />

      {/* 3. Reusable Signature Contact CTA */}
      <ContactCTA
        eyebrow="Collaboration"
        title="Have an upcoming commercial or residential space?"
        description="We collaborate early with architectural studios to resolve key thresholds, custom furniture, and site installations."
        ctaText="Discuss your project →"
        ctaHref="/contact"
      />
    </main>
  );
}
