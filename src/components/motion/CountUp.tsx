"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric figure up once when it first enters view.
 *
 * Non-numeric values ("1+", "1 → 2", "$1–2") are rendered verbatim — the
 * component never tries to interpolate a range, because a half-counted
 * range would read as a different figure.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = /^[\d,]+$/.test(value)
    ? Number(value.replace(/,/g, ""))
    : null;
  const [display, setDisplay] = useState(numeric === null ? value : "0");

  useEffect(() => {
    const node = ref.current;
    if (node === null || numeric === null) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        // Honour the motion preference here rather than in the effect body:
        // setState inside a subscription callback is the supported shape.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(numeric.toLocaleString("en-GB"));
          return;
        }

        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast settle, mechanical rather than springy
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(numeric * eased).toLocaleString("en-GB"));
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [numeric]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
