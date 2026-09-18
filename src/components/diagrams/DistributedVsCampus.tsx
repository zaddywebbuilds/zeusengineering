/**
 * One campus versus a network of nodes.
 *
 * The comparison table states the argument in words. This shows it: the same
 * capacity as one large site, or as many small ones, and what happens to each
 * when a single point fails.
 *
 * Deliberately schematic and unnumbered. ZEUS has published no node count for
 * a network, so none is implied; the point is topology, not scale.
 */
const W = 700;
const H = 260;

export function DistributedVsCampus() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Two topologies compared. On the left, one large campus: a single block fed by one grid connection, so a failure at that connection takes all of the capacity with it. On the right, a distributed network: many small nodes, each with its own generation and storage, so one node failing removes only its own share. Schematic; no node count is implied."
    >
      {/* ---- Left: single campus ---- */}
      <text x="20" y="26" fill="rgba(43,39,34,0.55)" fontSize="10" letterSpacing="1.6">
        ONE CAMPUS
      </text>

      <rect x="42" y="66" width="200" height="120" fill="rgba(43,39,34,0.10)" stroke="rgba(43,39,34,0.5)" strokeWidth="1.2" />
      <text x="142" y="132" textAnchor="middle" fill="rgba(43,39,34,0.7)" fontSize="11">
        ALL CAPACITY
      </text>

      {/* Single feed */}
      <line x1="142" y1="46" x2="142" y2="66" stroke="var(--color-ochre)" strokeWidth="2" />
      <circle cx="142" cy="42" r="6" fill="none" stroke="var(--color-ochre)" strokeWidth="1.5" />
      <text x="156" y="46" fill="var(--color-ochre)" fontSize="10">
        one grid connection
      </text>

      {/* Failure marker */}
      <g>
        <line x1="132" y1="32" x2="152" y2="52" stroke="rgba(43,39,34,0.75)" strokeWidth="2" />
        <line x1="152" y1="32" x2="132" y2="52" stroke="rgba(43,39,34,0.75)" strokeWidth="2" />
      </g>
      <text x="142" y="212" textAnchor="middle" fill="rgba(43,39,34,0.6)" fontSize="10">
        it fails, everything stops
      </text>

      {/* Divider */}
      <line x1={W / 2} y1="20" x2={W / 2} y2={H - 20} stroke="rgba(43,39,34,0.14)" strokeWidth="1" />

      {/* ---- Right: distributed nodes ---- */}
      <text x={W / 2 + 22} y="26" fill="var(--color-sage)" fontSize="10" letterSpacing="1.6">
        A NETWORK OF NODES
      </text>

      {Array.from({ length: 9 }, (_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const nx = W / 2 + 44 + col * 74;
        const ny = 62 + row * 46;
        const failed = i === 4;
        return (
          <g key={i}>
            <rect
              x={nx}
              y={ny}
              width={50}
              height={32}
              fill={failed ? "rgba(43,39,34,0.07)" : "rgba(79,90,69,0.16)"}
              stroke={failed ? "rgba(43,39,34,0.35)" : "var(--color-sage)"}
              strokeWidth="1.1"
              strokeDasharray={failed ? "3 2" : "0"}
            />
            {/* each node carries its own generation */}
            <line
              x1={nx + 8}
              y1={ny - 6}
              x2={nx + 42}
              y2={ny - 6}
              stroke={failed ? "rgba(43,39,34,0.25)" : "var(--color-sage)"}
              strokeWidth="1.4"
            />
            {failed && (
              <>
                <line x1={nx + 16} y1={ny + 10} x2={nx + 34} y2={ny + 24} stroke="rgba(43,39,34,0.6)" strokeWidth="1.6" />
                <line x1={nx + 34} y1={ny + 10} x2={nx + 16} y2={ny + 24} stroke="rgba(43,39,34,0.6)" strokeWidth="1.6" />
              </>
            )}
          </g>
        );
      })}

      <text x={W / 2 + 155} y="212" textAnchor="middle" fill="var(--color-sage)" fontSize="10">
        one fails, the rest keep running
      </text>
      <text x={W / 2 + 155} y="230" textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="9">
        each node has its own solar and storage
      </text>
    </svg>
  );
}
