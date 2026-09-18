/**
 * Prefixes a public asset path with the deployment base path.
 *
 * GitHub Pages serves a project repo from /<repo>/, so every absolute asset
 * URL needs that prefix. `next/image` and `next/link` apply basePath on their
 * own — but a raw <video><source src>, a <track>, or an og:image URL does not.
 * Those go through here.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}`;
}
