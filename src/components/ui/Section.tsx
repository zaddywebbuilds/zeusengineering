import { TechLabel } from "./TechLabel";
import { MaskedHeading } from "./SectionHeading";
import { cx } from "@/lib/utils";

/**
 * Standard content section. Alternating `tone` is how the site gets vertical
 * rhythm — contrast through surface and composition rather than through
 * introducing new colours.
 */
export function Section({
  index,
  label,
  title,
  lede,
  tone = "canvas",
  wide = false,
  className,
  children,
}: {
  index?: string;
  label?: string;
  title?: string;
  lede?: string;
  tone?: "canvas" | "linen";
  wide?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cx(
        "border-t border-[var(--rule)]",
        tone === "linen" ? "bg-linen" : "bg-canvas",
        className,
      )}
    >
      <div className={cx(wide ? "shell-wide" : "shell", "py-12 lg:py-11")}>
        {(label || title) && (
          <div className="mb-10 max-w-[56ch]">
            {label && (
              <TechLabel index={index} className="reveal mb-6">
                {label}
              </TechLabel>
            )}
            {title && <MaskedHeading text={title} className="h-sub" />}
            {lede && (
              <p className="reveal mt-7 text-lg leading-relaxed text-slate">
                {lede}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Numbered process steps — used by hosting and deployment sequences. */
export function StepList({
  steps,
  columns = 3,
}: {
  steps: { step: string; title: string; body: string }[];
  columns?: 2 | 3;
}) {
  return (
    <ol
      className={cx(
        "grid grid-cols-1 gap-px bg-[var(--rule)]",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {steps.map((s) => (
        <li key={s.step} className="reveal bg-canvas p-7 lg:p-8">
          <div className="flex items-center gap-4">
            <span className="tech-label text-slate-dim">{s.step}</span>
            <span aria-hidden className="h-px w-8 bg-ochre/60" />
          </div>
          <h3 className="display mt-5 text-[1.5rem] leading-none">{s.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** A plain list of statements with hairline rules. */
export function RuleList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
      {items.map((item, i) => (
        <li key={item} className="reveal flex gap-6 py-5">
          <span className="tech-label shrink-0 text-slate-dim">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-slate">{item}</span>
        </li>
      ))}
    </ul>
  );
}
