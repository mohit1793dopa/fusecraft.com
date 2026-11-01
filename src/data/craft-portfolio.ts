/* Auto-generated craft portfolio index — do not edit by hand */

export type CraftDesign = {
  slug: string;
  title: string;
  main: string;
  images: string[];
};

export type CraftSubcategory = {
  slug: string;
  title: string;
  designs: CraftDesign[];
};

export type CraftCategory = {
  slug: string;
  title: string;
  cover: string;
  href: string;
  subcategories: CraftSubcategory[];
};

export type CraftCategorySummary = {
  slug: string;
  title: string;
  cover: string;
  href: string;
  designCount: number;
};

export const craftCategorySummaries: CraftCategorySummary[] = [
  {
    slug: "beds",
    title: "Beds",
    cover: "/images/browse-by-craft/beds.jpg",
    href: "/craft/beds",
    designCount: 7,
  },
  {
    slug: "chairs",
    title: "Chairs",
    cover: "/images/browse-by-craft/chairs.jpg",
    href: "/craft/chairs",
    designCount: 10,
  },
  {
    slug: "doors",
    title: "Doors",
    cover: "/images/browse-by-craft/doors.jpg",
    href: "/craft/doors",
    designCount: 3,
  },
  {
    slug: "swings",
    title: "Swings",
    cover: "/images/browse-by-craft/jhula.jpg",
    href: "/craft/swings",
    designCount: 1,
  },
  {
    slug: "lightings",
    title: "Lightings",
    cover: "/images/browse-by-craft/lightings.jpg",
    href: "/craft/lightings",
    designCount: 1,
  },
  {
    slug: "partitions",
    title: "Partitions",
    cover: "/images/browse-by-craft/partitions.jpg",
    href: "/craft/partitions",
    designCount: 2,
  },
  {
    slug: "sofa",
    title: "Sofa",
    cover: "/images/browse-by-craft/sofa.jpg",
    href: "/craft/sofa",
    designCount: 7,
  },
  {
    slug: "tables",
    title: "Tables",
    cover: "/images/browse-by-craft/tables.jpg",
    href: "/craft/tables",
    designCount: 9,
  },
  {
    slug: "accessories",
    title: "Accessories",
    cover: "/images/browse-by-craft/handles.jpg",
    href: "/craft/accessories",
    designCount: 9,
  },
  {
    slug: "console-units",
    title: "Console Units",
    cover: "/images/browse-by-craft/tv-and-console-units.jpg",
    href: "/craft/console-units",
    designCount: 8,
  },
  {
    slug: "facades",
    title: "Facades",
    cover: "/images/browse-by-craft/facade-corten.jpg",
    href: "/craft/facades",
    designCount: 0,
  },
  {
    slug: "railings",
    title: "Railings",
    cover: "/images/browse-by-craft/railing-design.jpg",
    href: "/craft/railings",
    designCount: 3,
  },
  {
    slug: "benches",
    title: "Benches",
    cover: "/images/browse-by-craft/benches.jpg",
    href: "/craft/benches",
    designCount: 3,
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    cover: "/images/browse-by-craft/wardrobe-handles.jpg",
    href: "/craft/wardrobes",
    designCount: 3,
  },
  {
    slug: "sculptures",
    title: "Sculptures",
    cover: "/images/browse-by-craft/sculptures-totem.jpg",
    href: "/craft/sculptures",
    designCount: 0,
  },
];

/** Lightweight list for nav / work page */
export const craftCategories = craftCategorySummaries;

const loaders: Record<string, () => Promise<{ default: CraftCategory }>> = {
  beds: () => import("./craft/beds.json"),
  chairs: () => import("./craft/chairs.json"),
  doors: () => import("./craft/doors.json"),
  swings: () => import("./craft/swings.json"),
  jhula: () => import("./craft/swings.json"),
  lightings: () => import("./craft/lightings.json"),
  partitions: () => import("./craft/partitions.json"),
  sofa: () => import("./craft/sofa.json"),
  tables: () => import("./craft/tables.json"),
  accessories: () => import("./craft/accessories.json"),
  handles: () => import("./craft/accessories.json"),
  "console-units": () => import("./craft/console-units.json"),
  "tv-and-console-units": () => import("./craft/console-units.json"),
  facades: () => import("./craft/facades.json"),
  "facade-design": () => import("./craft/facades.json"),
  railings: () => import("./craft/railings.json"),
  "railing-design": () => import("./craft/railings.json"),
  benches: () => import("./craft/benches.json"),
  "metal-furniture": () => import("./craft/benches.json"),
  "outdoor-furniture": () => import("./craft/outdoor-furniture.json"),
  wardrobes: () => import("./craft/wardrobes.json"),
  sculptures: () => import("./craft/sculptures.json"),
};

export async function getCraftCategory(
  slug: string,
): Promise<CraftCategory | undefined> {
  const load = loaders[slug];
  if (!load) return undefined;
  const mod = await load();
  return mod.default;
}
