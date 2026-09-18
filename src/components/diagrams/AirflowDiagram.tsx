/**
 * How heat actually leaves a rack.
 *
 * The site currently states ZEUS's three published methods as a list:
 * airflow control systems, fans, and water radiators for hydro systems. A list
 * does not show the thing that matters, which is that cold and hot air must
 * not mix. This is a section through a contained aisle.
 *
 * Nothing here is a ZEUS specification. It is standard data-centre airflow,
 * drawn to explain the three methods ZEUS names. No temperatures are given,
 * because ZEUS has published none.
 */
const W = 700;
const H = 300;

export function AirflowDiagram() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Section through a contained aisle. Cool air is delivered at floor level into a cold aisle between two rows of racks. Fans draw it front to back through the hardware, where it picks up heat. The hot air rises into a contained hot aisle and is drawn off at ceiling level to a water radiator, which rejects the heat outside. Containment keeps the cold and hot paths from mixing."
    >
      {/* Room outline */}
      <rect x="40" y="26" width={W - 80} height={H - 86} fill="none" stroke="rgba(43,39,34,0.25)" strokeWidth="1" />
      <line x1="40" y1={H - 60} x2={W - 40} y2={H - 60} stroke="rgba(43,39,34,0.35)" strokeWidth="1.5" />
      <text x="44" y={H - 46} fill="rgba(43,39,34,0.45)" fontSize="9" letterSpacing="1">
        RAISED FLOOR
      </text>

      {/* Two rack rows flanking a cold aisle */}
      {[
        { x: 190, label: "RACK ROW" },
        { x: 430, label: "RACK ROW" },
      ].map((r) => (
        <g key={r.x}>
          <rect x={r.x} y="86" width="80" height="154" fill="rgba(43,39,34,0.10)" stroke="rgba(43,39,34,0.55)" strokeWidth="1.2" />
          {Array.from({ length: 6 }, (_, i) => (
            <line
              key={i}
              x1={r.x + 6}
              y1={96 + i * 24}
              x2={r.x + 74}
              y2={96 + i * 24}
              stroke="rgba(43,39,34,0.3)"
              strokeWidth="1"
            />
          ))}
          <text x={r.x + 40} y="256" textAnchor="middle" fill="rgba(43,39,34,0.6)" fontSize="9">
            {r.label}
          </text>
        </g>
      ))}

      {/* Cold aisle containment */}
      <rect x="270" y="86" width="160" height="154" fill="rgba(79,90,69,0.10)" stroke="var(--color-sage)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="350" y="78" textAnchor="middle" fill="var(--color-sage)" fontSize="10" letterSpacing="1">
        COLD AISLE, CONTAINED
      </text>

      {/* Cool supply up from the floor */}
      {[300, 350, 400].map((x) => (
        <g key={x}>
          <line x1={x} y1={H - 62} x2={x} y2="232" stroke="var(--color-sage)" strokeWidth="1.5" markerEnd="url(#arrow-sage)" />
        </g>
      ))}
      <text x="350" y={H - 30} textAnchor="middle" fill="var(--color-sage)" fontSize="10">
        Cool supply
      </text>

      {/* Through the hardware, front to back */}
      {[120, 160, 200].map((y) => (
        <g key={y}>
          <line x1="268" y1={y} x2="196" y2={y} stroke="rgba(138,90,40,0.75)" strokeWidth="1.4" markerEnd="url(#arrow-ochre)" />
          <line x1="432" y1={y} x2="504" y2={y} stroke="rgba(138,90,40,0.75)" strokeWidth="1.4" markerEnd="url(#arrow-ochre)" />
        </g>
      ))}
      <text x="232" y="106" textAnchor="middle" fill="var(--color-ochre)" fontSize="9">
        FANS
      </text>
      <text x="468" y="106" textAnchor="middle" fill="var(--color-ochre)" fontSize="9">
        FANS
      </text>

      {/* Hot air rises and is drawn off */}
      <line x1="150" y1="86" x2="150" y2="46" stroke="var(--color-ochre)" strokeWidth="1.5" markerEnd="url(#arrow-ochre)" />
      <line x1="550" y1="86" x2="550" y2="46" stroke="var(--color-ochre)" strokeWidth="1.5" markerEnd="url(#arrow-ochre)" />
      <line x1="150" y1="46" x2="612" y2="46" stroke="var(--color-ochre)" strokeWidth="1.5" />
      <line x1="550" y1="46" x2="612" y2="46" stroke="var(--color-ochre)" strokeWidth="1.5" />
      <text x="350" y="40" textAnchor="middle" fill="var(--color-ochre)" fontSize="10">
        Hot return
      </text>

      {/* Water radiator */}
      <rect x="612" y="30" width="46" height="120" fill="rgba(138,90,40,0.12)" stroke="var(--color-ochre)" strokeWidth="1.2" />
      {Array.from({ length: 5 }, (_, i) => (
        <line key={i} x1="618" y1={44 + i * 22} x2="652" y2={44 + i * 22} stroke="var(--color-ochre)" strokeWidth="1" />
      ))}
      <text x="635" y="166" textAnchor="middle" fill="var(--color-ochre)" fontSize="9">
        WATER
      </text>
      <text x="635" y="178" textAnchor="middle" fill="var(--color-ochre)" fontSize="9">
        RADIATOR
      </text>
      <line x1="635" y1="150" x2="635" y2="196" stroke="var(--color-ochre)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="635" y="210" textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="9">
        heat out
      </text>

      <defs>
        <marker id="arrow-sage" viewBox="0 0 8 8" refX="5" refY="4" markerWidth="4.5" markerHeight="4.5" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--color-sage)" />
        </marker>
        <marker id="arrow-ochre" viewBox="0 0 8 8" refX="5" refY="4" markerWidth="4.5" markerHeight="4.5" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--color-ochre)" />
        </marker>
      </defs>
    </svg>
  );
}
