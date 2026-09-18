import { Button } from "@/components/ui/Button";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { TechLabel } from "@/components/ui/TechLabel";

/**
 * The hero.
 *
 * Split rather than full-bleed: type on the left, the media as a framed object
 * on the right. The still is chosen over the clip because it carries the ZEUS
 * wordmark and strapline in frame; the clip pans away from the branding within
 * a second, so it earns its place further down the page instead. Nothing sits on top of moving footage, so the headline keeps
 * full contrast and the clip is presented as a piece of work rather than
 * wallpaper.
 *
 * The footage is a cinematic brand visualisation, not documentary footage of
 * the operating facility — stated on the caption rail, quietly, rather than
 * as a banner.
 */
export function Hero() {
  return (
    <section
      className="tech-grid relative overflow-hidden pt-[112px] lg:pt-[128px]"
      aria-label="ZEUS Engineering introduction"
    >
      {/* A single amber hairline: energy entering the page. */}
      <span
        aria-hidden
        className="absolute left-0 top-[72px] h-px w-full bg-[linear-gradient(to_right,var(--color-amber),transparent_38%)] opacity-40"
      />

      <div className="shell-wide grid grid-cols-1 items-center gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)] lg:gap-16 lg:pb-28">
        <div>
          <TechLabel className="reveal mb-7">
            ZEUS Engineering / Vietnam
          </TechLabel>

          <h1 className="display h-hero max-w-[15ch]">
            <span className="mask-line">
              <span>Engineering the</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "90ms" }}>infrastructure</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "180ms" }}>behind compute.</span>
            </span>
          </h1>

          <p className="reveal mt-9 max-w-[46ch] text-lg leading-relaxed text-steel">
            Modular infrastructure for Bitcoin, AI and high-density computing —
            engineered in Vietnam.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <Button href="/technology" arrow="diagonal">
              Explore infrastructure
            </Button>
            <Button href="/investors" variant="secondary">
              Investor relations
            </Button>
          </div>

          <div className="reveal mt-16 flex items-center gap-4">
            <span
              aria-hidden
              className="block h-10 w-px bg-[linear-gradient(to_bottom,var(--color-amber),transparent)]"
            />
            <TechLabel>Scroll to explore</TechLabel>
          </div>
        </div>

        <MediaPanel
          className="reveal"
          image="/images/concept/zeus-plant-portrait.webp"
          alt="ZEUS Engineering switchgear cabinets on a compute site at dusk, carrying the ZEUS Engineering wordmark and the line Powering the next generation of compute"
          label="Power plant"
          note="Concept visualisation"
          aspect="portrait"
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      </div>
    </section>
  );
}
