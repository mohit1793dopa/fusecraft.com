import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CraftCategoryView } from "@/components/craft/CraftCategoryView";
import {
  craftCategorySummaries,
  getCraftCategory,
} from "@/data/craft-portfolio";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  const main = craftCategorySummaries.map((c) => ({ category: c.slug }));
  const aliases = [
    "handles",
    "jhula",
    "metal-furniture",
    "outdoor-furniture",
    "tv-and-console-units",
    "facade-design",
    "railing-design",
  ].map((category) => ({ category }));
  return [...main, ...aliases];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const summary = craftCategorySummaries.find(
    (c) =>
      c.slug === slug ||
      (slug === "handles" && c.slug === "accessories") ||
      (slug === "jhula" && c.slug === "swings") ||
      (slug === "metal-furniture" && c.slug === "benches") ||
      (slug === "outdoor-furniture" && c.slug === "outdoor-furniture") ||
      (slug === "tv-and-console-units" && c.slug === "console-units") ||
      (slug === "facade-design" && c.slug === "facades") ||
      (slug === "railing-design" && c.slug === "railings")
  );
  if (!summary) return { title: "Collection" };
  return {
    title: summary.title,
    description: `${summary.title} designs from the Fusecrafts workshop.`,
  };
}

export default async function CraftCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = await getCraftCategory(slug);
  if (!category) notFound();

  const others = craftCategorySummaries
    .filter((c) => c.slug !== category.slug)
    .map((c) => ({ slug: c.slug, title: c.title, href: c.href }));

  return <CraftCategoryView category={category} others={others} />;
}
