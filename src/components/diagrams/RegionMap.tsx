/**
 * Where the site is, and why there.
 *
 * "Bà Rịa, southern Vietnam" is a phrase until it is placed. This is a
 * schematic locator: the southern coast, Ho Chi Minh City, the Bà Rịa-Vung
 * Tau area, and the sea.
 *
 * SCHEMATIC, NOT SURVEYED. The coastline is a simplified impression, not
 * projected geography, and no facility coordinates are plotted: ZEUS has not
 * published a site location beyond the region. The caption says so.
 */
const W = 620;
const H = 380;

export function RegionMap() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Schematic locator map of southern Vietnam. The land mass occupies the upper left, the East Sea the lower right. Ho Chi Minh City is marked inland, with the Ba Ria and Vung Tau area on the coast to its south-east, where ZEUS operates. An arrow to the north indicates proximity to manufacturing and component supply in China. Simplified impression, not surveyed geography; no facility coordinates are plotted."
    >
      {/* Sea */}
      <rect x="0" y="0" width={W} height={H} fill="rgba(79,90,69,0.06)" />

      {/* Land: simplified southern Vietnam */}
      <path
        d="M 0 40 L 150 30 L 250 70 L 330 120 L 392 176 L 430 214 Q 400 250 350 262 L 250 286 L 150 300 L 60 320 L 0 330 Z"
        fill="rgba(43,39,34,0.09)"
        stroke="rgba(43,39,34,0.42)"
        strokeWidth="1.2"
      />

      {/* Mekong hint */}
      <path
        d="M 60 300 Q 120 268 180 282 Q 240 296 300 270"
        fill="none"
        stroke="rgba(43,39,34,0.2)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />

      <text x="70" y="120" fill="rgba(43,39,34,0.42)" fontSize="11" letterSpacing="2">
        VIETNAM
      </text>
      <text x={W - 26} y={H - 26} textAnchor="end" fill="rgba(79,90,69,0.7)" fontSize="10" letterSpacing="2">
        EAST SEA
      </text>

      {/* Ho Chi Minh City */}
      <circle cx="286" cy="186" r="4.5" fill="rgba(43,39,34,0.55)" />
      <text x="276" y="180" textAnchor="end" fill="rgba(43,39,34,0.6)" fontSize="10">
        Ho Chi Minh City
      </text>

      {/* Ba Ria / Vung Tau, the operating region */}
      <circle cx="372" cy="228" r="9" fill="none" stroke="var(--color-ochre)" strokeWidth="1.6" />
      <circle cx="372" cy="228" r="3.5" fill="var(--color-ochre)" />
      <line x1="381" y1="222" x2="430" y2="196" stroke="var(--color-ochre)" strokeWidth="1" />
      <text x="436" y="193" fill="var(--color-ochre)" fontSize="12">
        Bà Rịa / Vung Tau
      </text>
      <text x="436" y="209" fill="rgba(43,39,34,0.55)" fontSize="10">
        Operating site and
      </text>
      <text x="436" y="223" fill="rgba(43,39,34,0.55)" fontSize="10">
        target region for nodes
      </text>

      {/* Supply chain to the north */}
      <line x1="150" y1="60" x2="150" y2="22" stroke="rgba(43,39,34,0.4)" strokeWidth="1" markerEnd="url(#map-arrow)" />
      <text x="160" y="26" fill="rgba(43,39,34,0.5)" fontSize="9">
        equipment and components from the north
      </text>

      {/* Solar resource note */}
      <g>
        <circle cx="500" cy="300" r="13" fill="none" stroke="var(--color-ochre)" strokeWidth="1" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={500 + Math.cos(a) * 17}
              y1={300 + Math.sin(a) * 17}
              x2={500 + Math.cos(a) * 22}
              y2={300 + Math.sin(a) * 22}
              stroke="var(--color-ochre)"
              strokeWidth="1"
            />
          );
        })}
        <text x="500" y="338" textAnchor="middle" fill="rgba(43,39,34,0.55)" fontSize="10">
          Year-round sun
        </text>
      </g>

      <defs>
        <marker id="map-arrow" viewBox="0 0 8 8" refX="5" refY="4" markerWidth="4.5" markerHeight="4.5" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(43,39,34,0.4)" />
        </marker>
      </defs>
    </svg>
  );
}
