/**
 * Language detection.
 *
 * This is a STATIC export on GitHub Pages: there is no server, so there is no
 * `Accept-Language` header to negotiate against and no redirect to issue.
 * Detection therefore happens in the browser, and it happens in plain inline
 * script at "/" rather than in React, so it runs before any bundle is fetched.
 *
 * The detector itself lives in `public/index.html`. It is duplicated there
 * rather than imported, because that file must not depend on the bundle. This
 * module holds the shared key and documents the contract.
 */

export const LOCALE_STORAGE_KEY = "zeus.locale";

/**
 * Order of precedence used by the detector, documented here because the
 * implementation in `public/index.html` cannot carry this much comment:
 *
 *   1. `?lang=` in the URL, so a link or a QR code can force a language.
 *   2. A previous explicit choice, remembered in localStorage under
 *      LOCALE_STORAGE_KEY and written by `LocaleSync`.
 *   3. The device language, via `navigator.languages`.
 *   4. English.
 *
 * Any `vi` tag matches, including `vi-VN`. Everything else gets English,
 * because English is the only other language this site is written in.
 *
 * The base path is derived from `location.pathname` at runtime rather than
 * injected at build time, so the same file works at a domain root and under
 * the `/zeusengineering` project path without a build step.
 */
export const LOCALE_PRECEDENCE = [
  "?lang= query parameter",
  "localStorage, set by an explicit switch",
  "navigator.languages",
  "English",
] as const;
