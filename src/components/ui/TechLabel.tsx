import { cx } from "@/lib/utils";

/**
 * The small uppercase annotation used throughout the site, e.g.
 * "01 / INFRASTRUCTURE". Purely typographic — it carries no status meaning.
 */
export function TechLabel({
  index,
  children,
  className,
  as: Tag = "p",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag className={cx("tech-label", className)}>
      {index && (
        <>
          <span className="text-stone-dim">{index}</span>
          <span className="mx-2 text-stone-dim" aria-hidden>
            /
          </span>
        </>
      )}
      {children}
    </Tag>
  );
}
