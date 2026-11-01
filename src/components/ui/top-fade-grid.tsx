import { cn } from "@/lib/utils";

type TopFadeGridProps = {
  className?: string;
  gridSize?: string;
  lineColor?: string;
  direction?: "top" | "bottom";
};

/**
 * Architectural drafting grid with radial fade mask styled in Fusecrafts warm palette.
 * - direction="top" (default): Fades downward from top (used for page heroes).
 * - direction="bottom": Fades upward from bottom (used upside-down behind end CTA banners).
 */
export function TopFadeGrid({
  className,
  gridSize = "20px 30px",
  lineColor = "rgba(111, 89, 71, 0.16)",
  direction = "top",
}: TopFadeGridProps) {
  const maskPosition = direction === "bottom" ? "50% 100%" : "50% 0%";
  const mask = `radial-gradient(ellipse 75% 65% at ${maskPosition}, #000 55%, transparent 100%)`;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: gridSize,
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

/**
 * Bottom Fade Grid Background
 * Upside-down architectural drafting grid fading upward from the bottom.
 */
export function BottomFadeGrid(props: Omit<TopFadeGridProps, "direction">) {
  return <TopFadeGrid {...props} direction="bottom" />;
}
