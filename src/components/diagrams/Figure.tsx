import { TechLabel } from "@/components/ui/TechLabel";
import { cx } from "@/lib/utils";

/**
 * Shared frame for every technical illustration.
 *
 * Diagrams on this site are explanatory, not decorative: each one carries a
 * label, a caption stating what it does and does not show, and an SVG
 * `aria-label` that describes the same content to a screen reader. An
 * illustration a reader cannot verify is just another render.
 */
export function Figure({
  label,
  caption,
  children,
  tone = "canvas",
  className,
}: {
  label: string;
  caption?: string;
  children: React.ReactNode;
  tone?: "canvas" | "linen";
  className?: string;
}) {
  return (
    <figure
      className={cx(
        "overflow-hidden rounded-[4px] border border-[var(--rule)]",
        tone === "linen" ? "bg-linen" : "bg-canvas",
        className,
      )}
    >
      <div className="border-b border-[var(--rule)] px-5 py-3">
        <TechLabel as="span">{label}</TechLabel>
      </div>
      <div className="p-5 lg:p-7">{children}</div>
      {caption && (
        <figcaption className="border-t border-[var(--rule)] px-5 py-3 text-xs leading-relaxed text-slate-dim">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
