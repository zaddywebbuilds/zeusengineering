/**
 * Projected annual BTC production, split by source.
 *
 * Deliberately a range chart rather than a point estimate — ZEUS publishes
 * ranges (10-15 and 4-5), and drawing a single bar would imply a precision
 * the source does not have. The bars show the range as a band.
 *
 * No live market data, no ticker, no fabricated history. Every value here is
 * in src/data/metrics.ts.
 */
const bands = [
  { label: "Company-owned", sub: "200 machines", lo: 10, hi: 15, accent: "sage" },
  { label: "Hosted", sub: "300 machines", lo: 4, hi: 5, accent: "sage-dim" },
  { label: "Total", sub: "Projected", lo: 14, hi: 20, accent: "sage" },
] as const;

const MAX = 22;

export function ProjectionChart() {
  return (
    <figure>
      <svg
        viewBox="0 0 420 240"
        className="h-auto w-full"
        role="img"
        aria-label="Projected annual BTC production: company-owned machines 10 to 15 BTC per year, hosted machines 4 to 5 BTC per year, total approximately 14 to 20 BTC per year. These are management projections."
      >
        {/* Axis grid */}
        {[0, 5, 10, 15, 20].map((tick) => {
          const x = 96 + (tick / MAX) * 300;
          return (
            <g key={tick}>
              <line
                x1={x}
                y1={18}
                x2={x}
                y2={186}
                stroke="rgba(240,234,226,0.08)"
                strokeWidth="1"
              />
              <text
                x={x}
                y={206}
                textAnchor="middle"
                fill="rgba(240,234,226,0.36)"
                fontSize="10"
                letterSpacing="1"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {bands.map((band, i) => {
          const y = 34 + i * 54;
          const x1 = 96 + (band.lo / MAX) * 300;
          const x2 = 96 + (band.hi / MAX) * 300;
          const fill =
            band.accent === "sage"
              ? "rgba(123,160,143,0.30)"
              : "rgba(123,160,143,0.16)";
          const stroke = "var(--color-sage)";

          return (
            <g key={band.label}>
              <text
                x={88}
                y={y + 15}
                textAnchor="end"
                fill="#f0eae2"
                fontSize="11"
                letterSpacing="0.5"
              >
                {band.label}
              </text>
              <text
                x={88}
                y={y + 29}
                textAnchor="end"
                fill="rgba(240,234,226,0.36)"
                fontSize="9"
                letterSpacing="0.8"
              >
                {band.sub}
              </text>

              {/* Range band */}
              <rect
                x={x1}
                y={y}
                width={Math.max(x2 - x1, 2)}
                height="24"
                fill={fill}
                stroke={stroke}
                strokeWidth="1"
              />
              {/* Range end caps */}
              <line x1={x1} y1={y - 4} x2={x1} y2={y + 28} stroke={stroke} strokeWidth="1" />
              <line x1={x2} y1={y - 4} x2={x2} y2={y + 28} stroke={stroke} strokeWidth="1" />

              <text
                x={x2 + 10}
                y={y + 17}
                fill="var(--color-sage)"
                fontSize="11"
                letterSpacing="0.5"
              >
                {band.lo}&ndash;{band.hi}
              </text>
            </g>
          );
        })}

        <text
          x={246}
          y={228}
          textAnchor="middle"
          fill="rgba(240,234,226,0.36)"
          fontSize="9"
          letterSpacing="1.6"
        >
          BTC PER YEAR — PROJECTED
        </text>
      </svg>

      <figcaption className="mt-5 border-t border-[var(--rule)] pt-4 text-xs leading-relaxed text-stone-dim">
        Ranges as published by ZEUS. Bands show the stated range rather than a
        point estimate. Projection, not realised production.
      </figcaption>
    </figure>
  );
}
