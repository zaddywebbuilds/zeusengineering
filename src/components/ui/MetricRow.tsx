import { STATUS_DISCLOSURE, type Fact } from "@/data/facts";
import { StatusBadge } from "./StatusBadge";
import { cx } from "@/lib/utils";

/**
 * Large figures separated by fine vertical rules — not four rounded cards.
 *
 * Every row renders its own status disclosure beneath, which is why a target
 * block can never be mistaken for the current-operations block even when the
 * two sit on the same page.
 */
export function MetricRow({
  facts,
  columns = 4,
  className,
  showDisclosure = true,
}: {
  facts: Fact[];
  columns?: 2 | 3 | 4;
  className?: string;
  showDisclosure?: boolean;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  const status = facts[0]?.status;

  return (
    <div className={className}>
      <div className={cx("grid grid-cols-1 gap-px bg-[var(--rule)]", cols)}>
        {facts.map((fact) => (
          <div
            key={`${fact.label}-${fact.value}`}
            className="reveal bg-canvas px-0 py-8 sm:px-7 sm:py-9"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="numeral text-[clamp(3rem,6vw,4.75rem)]">
                {fact.value}
              </span>
              {fact.unit && (
                <span className="numeral text-[clamp(1.25rem,2vw,1.75rem)] text-slate">
                  {fact.unit}
                </span>
              )}
            </div>
            <p className="tech-label mt-4">{fact.label}</p>
            {fact.note && (
              <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-slate-dim">
                {fact.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {showDisclosure && status && (
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <StatusBadge status={status} />
          <p className="max-w-[62ch] text-sm text-slate-dim">
            {STATUS_DISCLOSURE[status]}
          </p>
        </div>
      )}
    </div>
  );
}
