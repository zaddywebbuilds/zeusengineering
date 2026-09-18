import path from "node:path";
import type { NextConfig } from "next";

/**
 * Built as a fully static site and deployed to GitHub Pages.
 *
 * `basePath` is set from the environment because a project repo is served from
 * https://<owner>.github.io/<repo>/, while a custom domain is served from the
 * root. Setting NEXT_PUBLIC_BASE_PATH="" covers the custom-domain case without
 * a code change.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Directory-style URLs, so /solutions resolves to /solutions/index.html.
  // Without this, GitHub Pages 404s on every route but the homepage.
  trailingSlash: true,

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  images: {
    // Pages has no image optimiser. Source files are already sized and webp.
    unoptimized: true,
  },

  // Pin the workspace root. Without this Turbopack walks up and finds the
  // stray package-lock.json in the home directory, which is not this project.
  turbopack: {
    root: path.resolve(__dirname),
  },
  poweredByHeader: false,
};

export default nextConfig;
