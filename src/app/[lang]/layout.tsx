import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RevealProvider } from "@/components/motion/RevealProvider";
import { LocaleSync } from "@/components/i18n/LocaleSync";
import { company } from "@/data/company";
import { SITE_URL, organizationJsonLd } from "@/lib/seo";
import { asset } from "@/lib/asset";
import { locales, localeMeta } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import "../globals.css";
import { toLocale } from "@/i18n/page";

const barlow = Barlow_Condensed({
  // "vietnamese" preloads the Vietnamese unicode-range file. Without it the
  // glyphs still resolve, but only after a second late fetch.
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

/** Both locales are prerendered at build time. Required by `output: export`. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const d = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: d.meta.siteTitle,
      template: `%s | ${company.name}`,
    },
    description: d.meta.siteDescription,
    applicationName: company.name,
    // metadata.icons is not base-path-aware either, so prefix it explicitly.
    icons: { icon: asset("/images/brand/zeus-mark-ink.webp") },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#F3EFE8",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const d = getDictionary(lang);

  return (
    <html
      lang={localeMeta[lang].htmlLang}
      className={`${barlow.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD. No user input reaches this.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(lang)),
          }}
        />
        {/* Remembers the language the visitor actually browsed in. */}
        <LocaleSync lang={lang} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ochre focus:px-4 focus:py-2 focus:text-canvas focus:font-medium"
        >
          {d.common.skipToContent}
        </a>
        <RevealProvider>
          <SiteHeader lang={lang} />
          <main id="main">{children}</main>
          <SiteFooter lang={lang} />
        </RevealProvider>
      </body>
    </html>
  );
}
