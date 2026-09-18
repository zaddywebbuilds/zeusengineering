import type { Metadata } from "next";
import Link from "next/link";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That address does not resolve. Browse ZEUS Engineering's solutions, technology, projects and investor relations.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="tech-grid flex min-h-[70svh] items-center pt-[112px]">
      <div className="shell py-12">
        <TechLabel className="mb-7">Error / 404</TechLabel>

        <h1 className="display text-[clamp(3rem,10vw,7rem)] leading-none">
          No route
          <br />
          to that page.
        </h1>

        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-slate">
          The address doesn&rsquo;t resolve. It may have moved, or it may never
          have existed.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>

        <nav aria-label="Site sections" className="mt-11 border-t border-[var(--rule)] pt-10">
          <TechLabel className="mb-6">Or try</TechLabel>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
