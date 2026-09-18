"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every `.reveal` / `.mask-line` / `.draw-line`
 * on the page, rather than an observer per component.
 *
 * Elements reveal once and are then unobserved — nothing on this site
 * re-animates on scroll-back, which is the difference between "engineered"
 * and "restless".
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const selector = ".reveal, .mask-line, .draw-line";

    if (reduced) {
      document
        .querySelectorAll(selector)
        .forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const observeAll = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-in")) observer.observe(el);
      });
    };

    observeAll();

    // Catch nodes added by client navigation.
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return <>{children}</>;
}
