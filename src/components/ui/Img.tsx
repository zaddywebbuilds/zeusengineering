import NextImage, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

/**
 * `next/image` with the deployment base path applied.
 *
 * WHY THIS EXISTS: this site is exported statically for GitHub Pages, which
 * means `images.unoptimized` is on. With the optimiser disabled, next/image
 * passes `src` straight through and does NOT prepend `basePath` — so on a
 * project-repo URL like /zeusengineering/ every image 404s while links and
 * stylesheets resolve fine. That failure is invisible in local dev, where
 * basePath is empty.
 *
 * Always import this instead of next/image. String sources get the prefix;
 * imported static assets are passed through untouched.
 */
export function Img({ src, ...props }: ImageProps) {
  return <NextImage src={typeof src === "string" ? asset(src) : src} {...props} />;
}
