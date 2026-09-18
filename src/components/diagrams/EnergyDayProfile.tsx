/**
 * How the published node figures relate across a day.
 *
 * The SSMDC numbers only make sense together: 80-120 kWp of solar does not
 * "power" a 50-75 kW load, because generation is a curve and the load is a
 * flat line. What makes it work is the 300-500 kWh battery moving midday
 * surplus into the night. That relationship is very hard to say in a sentence
 * and immediate in a chart.
 *
 * HONESTY: this is illustrative of the design intent, not a measured output
 * profile. Every figure it references comes from the deck (CLAIMS.md); the
 * curve shape is a generic clear-day solar profile, not ZEUS data. The caption
 * says so on the page.
 */
const LOAD = 62; // midpoint of the published 50-75 kW continuous IT load
const PEAK = 100; // midpoint of the published 80-120 kWp solar capacity

// Generic clear-day bell, 05:00 to 19:00, normalised 0-1.
function solarAt(hour: number) {
  if (hour < 5.5 || hour > 18.5) return 0;
  const t = (hour - 5.5) / 13;
  return Math.sin(Math.PI * t) ** 1.35;
}

const W = 720;
const H = 300;
const PAD = { l: 46, r: 16, t: 18, b: 34 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const x = (hour: number) => PAD.l + (hour / 24) * plotW;
const y = (kw: number) => PAD.t + plotH - (kw / 120) * plotH;

const samples = Array.from({ length: 97 }, (_, i) => {
  const hour = (i / 96) * 24;
  return { hour, gen: solarAt(hour) * PEAK };
});

const genPath =
  `M ${x(0)} ${y(0)} ` +
  samples.map((s) => `L ${x(s.hour)} ${y(s.gen)}`).join(" ") +
  ` L ${x(24)} ${y(0)} Z`;

// Surplus above the load charges the battery; the shortfall below it is what
// the battery has to cover overnight.
const surplus = samples.filter((s) => s.gen > LOAD);
const surplusPath = surplus.length
  ? `M ${x(surplus[0].hour)} ${y(LOAD)} ` +
    surplus.map((s) => `L ${x(s.hour)} ${y(s.gen)}`).join(" ") +
    ` L ${x(surplus[surplus.length - 1].hour)} ${y(LOAD)} Z`
  : "";

export function EnergyDayProfile() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="A day at one node. Solar generation rises from about 05:30, peaks near 100 kW around midday and falls to zero by about 18:30. The continuous IT load is a flat line at roughly 62 kW. Generation above that line is surplus that charges the battery; through the night the battery covers the load on its own. Illustrative of the published design figures, not a measured output profile."
    >
      {/* Y grid */}
      {[0, 30, 60, 90, 120].map((kw) => (
        <g key={kw}>
          <line
            x1={PAD.l}
            y1={y(kw)}
            x2={W - PAD.r}
            y2={y(kw)}
            stroke="rgba(43,39,34,0.10)"
            strokeWidth="1"
          />
          <text
            x={PAD.l - 8}
            y={y(kw) + 4}
            textAnchor="end"
            fill="rgba(43,39,34,0.45)"
            fontSize="10"
          >
            {kw}
          </text>
        </g>
      ))}
      <text
        x={PAD.l - 8}
        y={PAD.t - 6}
        textAnchor="end"
        fill="rgba(43,39,34,0.45)"
        fontSize="9"
        letterSpacing="1"
      >
        kW
      </text>

      {/* X hours */}
      {[0, 6, 12, 18, 24].map((h) => (
        <text
          key={h}
          x={x(h)}
          y={H - 12}
          textAnchor="middle"
          fill="rgba(43,39,34,0.45)"
          fontSize="10"
        >
          {String(h).padStart(2, "0")}:00
        </text>
      ))}

      {/* Night bands: the hours the battery has to carry */}
      <rect
        x={PAD.l}
        y={PAD.t}
        width={x(5.5) - PAD.l}
        height={plotH}
        fill="rgba(43,39,34,0.045)"
      />
      <rect
        x={x(18.5)}
        y={PAD.t}
        width={W - PAD.r - x(18.5)}
        height={plotH}
        fill="rgba(43,39,34,0.045)"
      />

      {/* Solar generation */}
      <path d={genPath} fill="rgba(192,139,90,0.22)" />
      <path
        d={samples.map((s, i) => `${i ? "L" : "M"} ${x(s.hour)} ${y(s.gen)}`).join(" ")}
        fill="none"
        stroke="var(--color-ochre)"
        strokeWidth="1.5"
      />

      {/* Surplus that charges the battery */}
      {surplusPath && <path d={surplusPath} fill="rgba(138,90,40,0.30)" />}

      {/* Continuous IT load */}
      <line
        x1={PAD.l}
        y1={y(LOAD)}
        x2={W - PAD.r}
        y2={y(LOAD)}
        stroke="var(--color-sage)"
        strokeWidth="2"
      />
      <text
        x={W - PAD.r}
        y={y(LOAD) - 8}
        textAnchor="end"
        fill="var(--color-sage)"
        fontSize="11"
      >
        50–75 kW continuous IT load
      </text>

      {/* Callouts */}
      <text x={x(12)} y={y(PEAK) - 10} textAnchor="middle" fill="var(--color-ochre)" fontSize="11">
        80–120 kWp solar
      </text>
      <text x={x(12)} y={y(LOAD) - 22} textAnchor="middle" fill="rgba(43,39,34,0.62)" fontSize="10">
        surplus charges the battery
      </text>
      <text x={x(2.6)} y={PAD.t + 26} textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="10">
        battery carries
      </text>
      <text x={x(2.6)} y={PAD.t + 40} textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="10">
        the load
      </text>
      <text x={x(21.4)} y={PAD.t + 26} textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="10">
        300–500 kWh
      </text>
      <text x={x(21.4)} y={PAD.t + 40} textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="10">
        usable storage
      </text>
    </svg>
  );
}
