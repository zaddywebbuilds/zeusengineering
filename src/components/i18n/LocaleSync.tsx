"use client";

import { useEffect } from "react";
import { LOCALE_STORAGE_KEY } from "@/i18n/detect";
import type { Locale } from "@/i18n/config";

/**
 * Records the language the visitor is actually reading.
 *
 * The root detector at "/" reads this before it falls back to
 * `navigator.language`, so an explicit choice from the switcher outlives the
 * device setting. Without it, a Vietnamese speaker on an English-locale phone
 * who switched to Vietnamese would be thrown back to English every time they
 * opened the site.
 *
 * Renders nothing. Storage can throw in a private window or with site data
 * blocked, so every access is guarded and failure is simply ignored: the
 * visitor falls back to device detection, which is the correct default anyway.
 */
export function LocaleSync({ lang }: { lang: Locale }) {
  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, lang);
    } catch {
      // No storage available. Detection still works from navigator.language.
    }
  }, [lang]);

  return null;
}
