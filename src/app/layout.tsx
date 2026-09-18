import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RevealProvider } from "@/components/motion/RevealProvider";
import { company } from "@/data/company";
import { SITE_URL, organizationJsonLd } from "@/lib/seo";
import { asset } from "@/lib/asset";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Infrastructure for high-density compute`,
    template: `%s — ${company.name}`,
  },
  description:
    "Modular infrastructure for Bitcoin, AI and high-density computing — engineered in Vietnam.",
  applicationName: company.name,
  // metadata.icons is not base-path-aware either — prefix it explicitly.
  icons: { icon: asset("/images/brand/zeus-mark-ink.webp") },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F3EFE8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD. No user input reaches this.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ochre focus:px-4 focus:py-2 focus:text-canvas focus:font-medium"
        >
          Skip to content
        </a>
        <RevealProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </RevealProvider>
      </body>
    </html>
  );
}
