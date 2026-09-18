import { STATUS_LABEL, type FactStatus } from "@/data/facts";
import { cx } from "@/lib/utils";

/**
 * The badge that keeps a fundraising target from reading as an achievement.
 *
 * Status is carried by the WORD first. Colour and the leading glyph are
 * reinforcement only, so the distinction survives greyscale, colour blindness
 * and a screen reader.
 */
const styles: Record<FactStatus, { cls: string; glyph: string }> = {
  current: {
    cls: "border-engineering/35 text-engineering",
    glyph: "●",
  },
  "zeus-reported": {
    cls: "border-steel/30 text-steel",
    glyph: "◐",
  },
  target: {
    cls: "border-amber/45 text-amber",
    glyph: "○",
  },
  projection: {
    cls: "border-cyan/45 text-cyan",
    glyph: "◇",
  },
  concept: {
    cls: "border-cyan/30 text-cyan",
    glyph: "◇",
  },
};

export function StatusBadge({
  status,
  className,
  label,
}: {
  status: FactStatus;
  className?: string;
  /** Override the default word, e.g. "Fundraising target". */
  label?: string;
}) {
  const s = styles[status];
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 border px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em]",
        s.cls,
        className,
      )}
    >
      <span aria-hidden className="text-[0.5rem] leading-none">
        {s.glyph}
      </span>
      {label ?? STATUS_LABEL[status]}
    </span>
  );
}
