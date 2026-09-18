"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * Reads the user's motion preference as an external store rather than
 * mirroring it into state from an effect — which keeps it correct across
 * hydration and avoids a cascading render on every mount.
 *
 * The server snapshot is `false` so markup renders identically on both sides;
 * the real value arrives on the first client read.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
