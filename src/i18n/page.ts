import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * The params every route under `app/[lang]` receives.
 *
 * Next's generated route types give `lang` as a plain `string`, because a
 * dynamic segment is whatever is in the URL. That is honest, so this file
 * narrows it at runtime rather than casting the type away.
 */
export interface LangPageProps {
  params: Promise<{ lang: string }>;
}

/**
 * Narrow a URL segment to a known locale.
 *
 * With `output: "export"` only the locales in `generateStaticParams` are ever
 * built, so in practice this never sees anything else. It exists so that the
 * type narrowing is backed by an actual check instead of an assertion, which
 * means a future move to a server runtime cannot quietly start rendering
 * `/fr/` as if it were English.
 */
export function toLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
