import Link from "next/link";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { FactStatus } from "@/data/facts";

export interface Crumb {
  label: string;
  href: string;
}

interface Props {
  index?: string;
  label: string;
  /** Split on "\n" so the line breaks are an editorial decision. */
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  status?: { value: FactStatus; label?: string };
  media?: {
    image: string;
    alt: string;
    video?: { desktop: string; mobile?: string };
    label?: string;
    note?: string;
  };
  children?: React.ReactNode;
}

/**
 * Shared page header. When `media` is supplied the layout splits and the
 * image sits beside the type as a framed panel — never behind it.
 */
export function PageHeader({
  index,
  label,
  title,
  lede,
  crumbs,
  status,
  media,
  children,
}: Props) {
  const split = Boolean(media);

  return (
    <section className="tech-grid relative overflow-hidden border-b border-[var(--rule)] pt-[112px] lg:pt-[128px]">
      <span
        aria-hidden
        className="absolute left-0 top-[72px] h-px w-full bg-[linear-gradient(to_right,var(--color-amber),transparent_38%)] opacity-40"
      />

      <div
        className={
          split
            ? "shell-wide grid grid-cols-1 items-center gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)] lg:gap-16 lg:pb-24"
            : "shell pb-12 lg:pb-16"
        }
      >
        <div>
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden className="tech-label text-stone-dim">
                        /
                      </span>
                    )}
                    <Link
                      href={crumb.href}
                      className="tech-label transition-colors duration-200 hover:text-bone"
                    >
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <TechLabel index={index} className="reveal">
              {label}
            </TechLabel>
            {status && (
              <StatusBadge
                status={status.value}
                label={status.label}
                className="reveal"
              />
            )}
          </div>

          <MaskedHeading
            text={title}
            as="h1"
            className={split ? "h-hero mt-7 max-w-[15ch]" : "h-section mt-7 max-w-[16ch]"}
          />

          {lede && (
            <p className="reveal mt-8 max-w-[54ch] text-lg leading-relaxed text-stone">
              {lede}
            </p>
          )}

          {children}
        </div>

        {media && (
          <MediaPanel
            className="reveal"
            image={media.image}
            alt={media.alt}
            video={media.video}
            label={media.label}
            note={media.note}
            aspect="portrait"
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        )}
      </div>
    </section>
  );
}
