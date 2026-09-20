import type { Locale } from "./config";
import { viStrings } from "./dictionaries/vi/strings";

/**
 * The source-keyed translator.
 *
 * TWO MECHANISMS, ONE RULE.
 *
 *   `d.*`  Structured dictionary, in `dictionaries/*\/core.ts`. Used for
 *          anything already keyed by an id in the data layer: navigation
 *          labels, the status vocabulary, footer chrome. There is a real key
 *          to hang the copy on, so a nested object is the honest shape and
 *          TypeScript can enforce completeness.
 *
 *   `t()`  Source-keyed. Used for page and component PROSE, which appears
 *          once and has no natural key. The English sentence IS the key.
 *
 * Why not nest everything? This is a retrofit of ~700 sentences across 25
 * pages that were written with the copy inline. Inventing a key for each one
 * means touching every sentence twice and inventing 700 names, which is
 * exactly where a translation of this size goes wrong. Keeping the English in
 * place means the page still reads as prose, a missing translation degrades
 * to English rather than to a raw key like `solutions.hero.lede`, and the
 * whole Vietnamese text sits in one file a reviewer can read top to bottom.
 *
 * Completeness is enforced instead by `npm run audit:i18n`, which extracts
 * every `t("...")` literal in the source and fails if one is missing from the
 * Vietnamese map. That is the same guarantee, moved from the type checker to
 * a build step.
 */
export type Translate = (source: string) => string;

export function translator(lang: Locale): Translate {
  if (lang === "en") return (source) => source;
  return (source) => viStrings[source] ?? source;
}
