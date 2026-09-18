import { TechLabel } from "./TechLabel";
import { cx } from "@/lib/utils";

/**
 * Masked line-by-line headline reveal. Split on "\n" by the caller, so the
 * line breaks are an editorial decision rather than whatever the viewport does.
 */
export function MaskedHeading({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={cx("display", className)}>
      {text.split("\n").map((line, i) => (
        <span className="mask-line" key={i}>
          <span style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  lede,
  size = "section",
  className,
}: {
  index?: string;
  label?: string;
  title: string;
  lede?: string;
  size?: "section" | "sub";
  className?: string;
}) {
  return (
    <div className={cx("max-w-[52ch]", className)}>
      {label && (
        <TechLabel index={index} className="reveal mb-7">
          {label}
        </TechLabel>
      )}
      <MaskedHeading
        text={title}
        className={size === "section" ? "h-section" : "h-sub"}
      />
      {lede && (
        <p className="reveal mt-8 text-lg leading-relaxed text-stone">{lede}</p>
      )}
    </div>
  );
}
