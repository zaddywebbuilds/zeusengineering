"use client";

import { Img } from "./Img";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { asset } from "@/lib/asset";
import { TechLabel } from "./TechLabel";
import { cx } from "@/lib/utils";

/**
 * Media presented as an object on the surface, never as a bed behind type.
 *
 * Every image and clip on this site sits inside one of these: a bordered
 * panel with its own caption rail underneath. Two reasons beyond the look —
 * text never has to fight a moving frame for contrast, and the supplied
 * footage (736x400 source) is upscaled far less inside a panel than it would
 * be stretched across a full viewport.
 */
interface Props {
  /** Poster / still image. Required — it is also the video fallback. */
  image: string;
  alt: string;
  /** Optional video. When present the panel plays it muted and looping. */
  video?: { desktop: string; mobile?: string };
  /** Small label on the left of the caption rail. */
  label?: string;
  /** Small note on the right of the caption rail, e.g. a concept disclosure. */
  note?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "ultrawide";
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const aspects = {
  video: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
  ultrawide: "aspect-[1104/226]",
};

export function MediaPanel({
  image,
  alt,
  video,
  label,
  note,
  aspect = "video",
  priority = false,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Autoplay can be refused (low-power mode, data saver). Fall back to the
  // poster rather than leaving a dead first frame on screen.
  useEffect(() => {
    const node = videoRef.current;
    if (!node || reduced || failed) return;
    const attempt = node.play();
    if (attempt) attempt.catch(() => setFailed(true));
  }, [reduced, failed]);

  const showVideo = video && !failed && !reduced;

  return (
    <figure
      className={cx(
        "overflow-hidden rounded-[4px] border border-[var(--rule)] bg-linen",
        className,
      )}
    >
      <div className={cx("relative overflow-hidden", aspects[aspect])}>
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster={asset(image)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
            onError={() => setFailed(true)}
          >
            {video.mobile && (
              <source
                src={asset(video.mobile)}
                type="video/mp4"
                media="(max-width: 767px)"
              />
            )}
            <source src={asset(video.desktop)} type="video/mp4" />
          </video>
        ) : (
          <Img
            src={image}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        )}
      </div>

      {(label || note) && (
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--rule)] px-4 py-3">
          {label && <TechLabel as="span">{label}</TechLabel>}
          {note && (
            <span className="tech-label flex items-center gap-2 text-[0.625rem] text-slate-dim">
              <span aria-hidden className="text-[0.5rem]">
                ◇
              </span>
              {note}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
