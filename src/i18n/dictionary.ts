import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";

/**
 * The dictionaries.
 *
 * `en` is the source of truth for SHAPE as well as content: every `vi` module
 * is typed as `typeof en`'s matching module, so TypeScript fails the build if
 * a Vietnamese key is missing, misspelled, or left behind after an English key
 * is renamed. On a site this size that check is the only thing standing
 * between a translation and English silently leaking onto Vietnamese pages.
 */
const dictionaries = { en, vi } as const;

export type Dictionary = typeof en;

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

/**
 * Fill `{placeholder}` slots. Kept deliberately dumb: no pluralisation, no
 * date or number formatting, because nothing on this site needs them and a
 * richer API would invite putting logic into the dictionary.
 */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}
