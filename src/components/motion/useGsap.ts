"use client";

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** useLayoutEffect on the client, useEffect on the server — avoids SSR warnings. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scopes a GSAP context to a container ref and reverts it on unmount, so every
 * ScrollTrigger this site creates is torn down on client navigation rather
 * than accumulating.
 *
 * The callback is skipped entirely under prefers-reduced-motion: the markup is
 * authored so that the un-animated state is the correct, readable state.
 */
export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  setup: (ctx: gsap.Context) => void,
  deps: unknown[] = [],
) {
  // Keep the latest callback without writing to a ref during render.
  const setupRef = useRef(setup);
  useEffect(() => {
    setupRef.current = setup;
  });

  useIsomorphicLayoutEffect(() => {
    if (!scope.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context((self) => setupRef.current(self), scope.current);
    return () => ctx.revert();
  }, deps);
}

export { gsap, ScrollTrigger };
