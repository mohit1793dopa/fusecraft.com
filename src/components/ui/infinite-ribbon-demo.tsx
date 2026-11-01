"use client";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";

export function InfiniteRibbonPreview() {
  return (
    <div className="relative flex min-h-[160px] w-full items-center justify-center overflow-hidden py-12">
      <InfiniteRibbon
        className="absolute w-[120%] max-w-none bg-moss-ink py-2.5 text-xs md:text-sm font-medium uppercase tracking-[0.16em] text-sand border-y border-sand/20 shadow-xl font-display"
        duration={42}
        rotation={3}
      >
        Fusion is the discipline · Combination is the craft · Detail is where fusion proves itself
      </InfiniteRibbon>
      <InfiniteRibbon
        className="w-[120%] max-w-none bg-chestnut py-2.5 text-xs md:text-sm font-medium uppercase tracking-[0.16em] text-cream border-y border-cream/25 shadow-xl font-display"
        duration={42}
        reverse={true}
        rotation={-3}
      >
        Fusion is the discipline · Combination is the craft · Detail is where fusion proves itself
      </InfiniteRibbon>
    </div>
  );
}

export default InfiniteRibbonPreview;
