import Link from "next/link";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center gap-3 rounded-[3px] px-6 py-3.5 font-medium text-sm tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:bg-ink/90",
  secondary:
    "border border-[var(--rule-strong)] text-ink hover:border-ink hover:bg-ink/[0.04]",
  ghost:
    "px-0 py-0 text-ink hover:text-ochre",
};

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: "diagonal" | "right" | "none";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  arrow = "right",
  className,
}: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <>
      <span>{children}</span>
      {arrow === "diagonal" && (
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      )}
      {arrow === "right" && (
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  const cls = cx(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={cls} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
