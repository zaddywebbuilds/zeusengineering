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
  const finalText =
    numeric === null ? value : numeric.toLocaleString("en-GB");

  // Server and first client render both emit the TRUE value. An earlier
  // version started at "0" and relied on JS to fill it in, which shipped
  // "0 kW" / "0 m2" to crawlers, screen readers and anyone without JS.
  const [display, setDisplay] = useState(finalText);

  useEffect(() => {
    const node = ref.current;
    if (node === null || numeric === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen? Keep the rendered value rather than resetting it to
    // zero and counting back up in front of the reader.
    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) return;

    setDisplay("0");

    let frame = 0;
    let settled = false;

    const settle = () => {
      settled = true;
      setDisplay(finalText);
    };

    // Safety net. The moment we set "0" we owe the reader the real number,
    // and an IntersectionObserver that never fires (throttled tab, background
    // render, engine quirk) would otherwise leave "0 kW" on screen forever.
    // Worst case is now "no animation", never "wrong figure".
    const failsafe = window.setTimeout(() => {
      if (!settled) settle();
    }, 4000);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        if (settled) return;
        settled = true;
        window.clearTimeout(failsafe);

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
      window.clearTimeout(failsafe);
      cancelAnimationFrame(frame);
    };
  }, [numeric, finalText]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
