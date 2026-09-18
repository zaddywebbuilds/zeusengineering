/**
 * Why modular deployment is faster, rather than just asserting that it is.
 *
 * The argument is not that each step is quicker. It is that most of the work
 * moves off site and happens in parallel with site preparation, so the two
 * streams converge at install instead of queueing behind one another. A step
 * list laid out end to end actively hides that.
 *
 * NO INVENTED DURATIONS. ZEUS publishes "months rather than years" and the
 * comparison figure of 3-7+ years for a hyperscale campus. Nothing here
 * assigns a length to an individual step, because ZEUS has not published one.
 */
const W = 760;
const H = 300;
const LANE_L = 150;
const LANE_R = W - 30;
const SPAN = LANE_R - LANE_L;

const factory = [
  { label: "Design", at: 0.0 },
  { label: "Manufacture", at: 0.26 },
  { label: "Transport", at: 0.58 },
];

const site = [
  { label: "Site + power", at: 0.06 },
  { label: "Foundations", at: 0.34 },
];

const joint = [
  { label: "Install", at: 0.72 },
  { label: "Connect", at: 0.82 },
  { label: "Commission", at: 0.92 },
];

export function DeploymentSequence() {
  const x = (t: number) => LANE_L + t * SPAN;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Two streams of work running in parallel. Off site: design, manufacture and transport of the unit. On site, at the same time: securing the site and power connection, then foundations. The two streams converge at install, followed by connect and commission, after which the node operates. Because the build happens off site while the site is prepared, the streams do not queue behind one another. No durations are shown for individual steps."
    >
      {/* Lane labels */}
      <text x="18" y="74" fill="var(--color-ochre)" fontSize="11" letterSpacing="1.4">
        OFF SITE
      </text>
      <text x="18" y="88" fill="rgba(43,39,34,0.45)" fontSize="9">
        factory
      </text>

      <text x="18" y="164" fill="var(--color-sage)" fontSize="11" letterSpacing="1.4">
        ON SITE
      </text>
      <text x="18" y="178" fill="rgba(43,39,34,0.45)" fontSize="9">
        in parallel
      </text>

      <text x="18" y="244" fill="rgba(43,39,34,0.6)" fontSize="11" letterSpacing="1.4">
        TOGETHER
      </text>

      {/* Lane rules */}
      {[70, 160, 240].map((y) => (
        <line key={y} x1={LANE_L} y1={y} x2={LANE_R} y2={y} stroke="rgba(43,39,34,0.12)" strokeWidth="1" />
      ))}

      {/* Factory stream */}
      <line x1={x(0)} y1="70" x2={x(0.68)} y2="70" stroke="var(--color-ochre)" strokeWidth="2" />
      {factory.map((s) => (
        <g key={s.label}>
          <circle cx={x(s.at)} cy="70" r="5" fill="var(--color-ochre)" />
          <text x={x(s.at)} y="56" textAnchor="middle" fill="rgba(43,39,34,0.75)" fontSize="10">
            {s.label}
          </text>
        </g>
      ))}

      {/* Site stream */}
      <line x1={x(0.06)} y1="160" x2={x(0.68)} y2="160" stroke="var(--color-sage)" strokeWidth="2" />
      {site.map((s) => (
        <g key={s.label}>
          <circle cx={x(s.at)} cy="160" r="5" fill="var(--color-sage)" />
          <text x={x(s.at)} y="148" textAnchor="middle" fill="rgba(43,39,34,0.75)" fontSize="10">
            {s.label}
          </text>
        </g>
      ))}

      {/* Convergence */}
      <path
        d={`M ${x(0.68)} 70 Q ${x(0.70)} 70 ${x(0.71)} 110 L ${x(0.72)} 240`}
        fill="none"
        stroke="var(--color-ochre)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d={`M ${x(0.68)} 160 Q ${x(0.70)} 160 ${x(0.71)} 190 L ${x(0.72)} 240`}
        fill="none"
        stroke="var(--color-sage)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Joint stream */}
      <line x1={x(0.72)} y1="240" x2={LANE_R} y2="240" stroke="rgba(43,39,34,0.6)" strokeWidth="2" />
      {joint.map((s) => (
        <g key={s.label}>
          <circle cx={x(s.at)} cy="240" r="5" fill="rgba(43,39,34,0.7)" />
          <text x={x(s.at)} y="228" textAnchor="middle" fill="rgba(43,39,34,0.75)" fontSize="10">
            {s.label}
          </text>
        </g>
      ))}

      {/* Operating */}
      <circle cx={LANE_R} cy="240" r="7" fill="none" stroke="rgba(43,39,34,0.7)" strokeWidth="2" />
      <text x={LANE_R} y="264" textAnchor="end" fill="rgba(43,39,34,0.75)" fontSize="11">
        Operating
      </text>

      {/* The published contrast, and nothing more granular */}
      <text x={LANE_L} y="288" fill="rgba(43,39,34,0.5)" fontSize="10">
        ZEUS states months for a node, against 3–7+ years for a hyperscale campus.
      </text>
    </svg>
  );
}
