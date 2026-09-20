/**
 * ============================================================
 * LOCALES
 * ============================================================
 *
 * ZEUS is a Vietnamese company selling to Vietnamese counterparties as well as
 * to foreign capital. The site is built for both, and which one a visitor
 * meets is decided by their own device language rather than by a flag they
 * have to hunt for.
 *
 * ROUTING. Every page exists at `/en/...` and `/vi/...`. `/` itself is a
 * static detector that reads `navigator.language` and forwards. That detector
 * is plain HTML, not React, so it runs before any bundle loads.
 *
 * WHY BOTH LOCALES ARE PREFIXED. An unprefixed default (`/about` for English,
 * `/vi/about` for Vietnamese) makes the English URLs ambiguous: a crawler
 * cannot tell whether `/about` is the English page or a language-neutral one,
 * and hreflang has to point somewhere. Prefixing both keeps every URL
 * self-describing and makes `x-default` a genuinely separate thing.
 */

export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

/** Used for x-default and whenever detection cannot decide. */
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Names shown in the switcher, each written in its own language. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

/** The `lang` attribute and OpenGraph locale for each. */
export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; hrefLang: string }
> = {
  en: { htmlLang: "en", ogLocale: "en_GB", hrefLang: "en" },
  vi: { htmlLang: "vi", ogLocale: "vi_VN", hrefLang: "vi" },
};

/**
 * Prefix an internal path with a locale.
 *
 * Every `href` in the app goes through this. A bare "/investors" would
 * silently drop a Vietnamese visitor back into English, and that class of bug
 * is invisible until someone actually browses in Vietnamese.
 */
export function localePath(lang: Locale, path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const [pathname, query] = path.split("?");
  const clean = pathname === "/" ? "" : pathname;
  return `/${lang}${clean}${query ? `?${query}` : ""}`;
}

/** Strip a locale prefix back off, for building the other language's URL. */
export function stripLocale(path: string): string {
  const m = path.match(/^\/(en|vi)(\/.*)?$/);
  if (!m) return path;
  return m[2] ?? "/";
}
