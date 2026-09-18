/**
 * What a 400 m² class node actually looks like on the ground.
 *
 * "400 m² class site" is an abstraction until you see it at scale next to a
 * 20 ft container and a person. This is a measured top-down plan: the pad is
 * drawn to 20 m x 20 m (400 m²), the containers to real ISO dimensions, and
 * the solar array sized so its footprint is consistent with the published
 * 80-120 kWp.
 *
 * The arrangement is illustrative. ZEUS has not published a site layout, so
 * the caption says the dimensions are real and the arrangement is not.
 */
const W = 620;
const H = 470;
const PAD = 44;
const SIDE = 20; // metres, giving the published 400 m²
const scale = (H - PAD * 2) / SIDE; // px per metre

const m = (metres: number) => metres * scale;
const px = (metres: number) => PAD + m(metres);
const py = (metres: number) => PAD + m(metres);

/** 20 ft ISO container: 6.06 m x 2.44 m. */
const C = { l: 6.06, w: 2.44 };

export function NodeSitePlan() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Top-down plan of a 400 square metre node, drawn as a 20 by 20 metre pad. A solar array occupies the upper portion. Below it sit two 20-foot containers, one housing the energy plant with battery and DC distribution, one housing compute. An external cooling plant stands beside the compute container, with an access route along the lower edge. Dimensions are to scale; the arrangement is illustrative."
    >
      {/* Pad */}
      <rect
        x={px(0)}
        y={py(0)}
        width={m(SIDE)}
        height={m(SIDE)}
        fill="rgba(43,39,34,0.035)"
        stroke="rgba(43,39,34,0.28)"
        strokeWidth="1"
      />

      {/* Dimension lines */}
      <g stroke="rgba(43,39,34,0.4)" strokeWidth="1" fill="none">
        <line x1={px(0)} y1={py(SIDE) + 14} x2={px(SIDE)} y2={py(SIDE) + 14} />
        <line x1={px(0)} y1={py(SIDE) + 10} x2={px(0)} y2={py(SIDE) + 18} />
        <line x1={px(SIDE)} y1={py(SIDE) + 10} x2={px(SIDE)} y2={py(SIDE) + 18} />
        <line x1={px(SIDE) + 14} y1={py(0)} x2={px(SIDE) + 14} y2={py(SIDE)} />
        <line x1={px(SIDE) + 10} y1={py(0)} x2={px(SIDE) + 18} y2={py(0)} />
        <line x1={px(SIDE) + 10} y1={py(SIDE)} x2={px(SIDE) + 18} y2={py(SIDE)} />
      </g>
      <text x={px(SIDE / 2)} y={py(SIDE) + 30} textAnchor="middle" fill="rgba(43,39,34,0.55)" fontSize="11">
        20 m
      </text>
      <text
        x={px(SIDE) + 30}
        y={py(SIDE / 2)}
        textAnchor="middle"
        fill="rgba(43,39,34,0.55)"
        fontSize="11"
        transform={`rotate(90 ${px(SIDE) + 30} ${py(SIDE / 2)})`}
      >
        20 m
      </text>

      {/* Solar array: rows of panels across the upper half */}
      <g>
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 9 }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              x={px(1.2 + col * 2.0)}
              y={py(1.2 + row * 1.5)}
              width={m(1.8)}
              height={m(1.1)}
              fill="rgba(79,90,69,0.30)"
              stroke="var(--color-sage)"
              strokeWidth="0.7"
            />
          )),
        )}
      </g>
      <text x={px(10)} y={py(0.7)} textAnchor="middle" fill="var(--color-sage)" fontSize="11">
        SOLAR ARRAY · 80–120 kWp
      </text>

      {/* Energy container */}
      <rect
        x={px(1.2)}
        y={py(10.4)}
        width={m(C.l)}
        height={m(C.w)}
        fill="rgba(138,90,40,0.16)"
        stroke="var(--color-ochre)"
        strokeWidth="1.2"
      />
      <text x={px(1.2 + C.l / 2)} y={py(10.4 + C.w / 2) + 4} textAnchor="middle" fill="var(--color-ochre)" fontSize="9">
        ENERGY PLANT
      </text>
      <text x={px(1.2)} y={py(10.4) - 6} fill="rgba(43,39,34,0.55)" fontSize="9">
        Battery 300–500 kWh · DC distribution
      </text>

      {/* Compute container */}
      <rect
        x={px(1.2)}
        y={py(14.2)}
        width={m(C.l)}
        height={m(C.w)}
        fill="rgba(43,39,34,0.10)"
        stroke="rgba(43,39,34,0.6)"
        strokeWidth="1.2"
      />
      <text x={px(1.2 + C.l / 2)} y={py(14.2 + C.w / 2) + 4} textAnchor="middle" fill="rgba(43,39,34,0.75)" fontSize="9">
        COMPUTE
      </text>
      <text x={px(1.2)} y={py(14.2) - 6} fill="rgba(43,39,34,0.55)" fontSize="9">
        50–75 kW continuous IT load
      </text>

      {/* Cooling plant */}
      <rect
        x={px(8.4)}
        y={py(14.2)}
        width={m(3.2)}
        height={m(C.w)}
        fill="rgba(43,39,34,0.06)"
        stroke="rgba(43,39,34,0.45)"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text x={px(10)} y={py(14.2 + C.w / 2) + 4} textAnchor="middle" fill="rgba(43,39,34,0.6)" fontSize="9">
        COOLING
      </text>

      {/* Access route */}
      <line
        x1={px(0.6)}
        y1={py(18.4)}
        x2={px(19.4)}
        y2={py(18.4)}
        stroke="rgba(43,39,34,0.3)"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <text x={px(19.4)} y={py(18.4) - 6} textAnchor="end" fill="rgba(43,39,34,0.5)" fontSize="9">
        ACCESS
      </text>

      {/* Human figure for scale: 1.75 m tall, drawn as a 0.5 m wide mark */}
      <g>
        <circle cx={px(13.4)} cy={py(16.9)} r={m(0.22)} fill="rgba(43,39,34,0.75)" />
        <line
          x1={px(13.4)}
          y1={py(17.1)}
          x2={px(13.4)}
          y2={py(18.0)}
          stroke="rgba(43,39,34,0.75)"
          strokeWidth="1.6"
        />
        <text x={px(14.1)} y={py(17.8)} fill="rgba(43,39,34,0.55)" fontSize="9">
          1.75 m
        </text>
      </g>

      {/* Scale bar */}
      <g>
        <line x1={px(14)} y1={py(19.4)} x2={px(19)} y2={py(19.4)} stroke="rgba(43,39,34,0.5)" strokeWidth="1.5" />
        <line x1={px(14)} y1={py(19.2)} x2={px(14)} y2={py(19.6)} stroke="rgba(43,39,34,0.5)" strokeWidth="1.5" />
        <line x1={px(19)} y1={py(19.2)} x2={px(19)} y2={py(19.6)} stroke="rgba(43,39,34,0.5)" strokeWidth="1.5" />
        <text x={px(16.5)} y={py(19.1)} textAnchor="middle" fill="rgba(43,39,34,0.5)" fontSize="9">
          5 m
        </text>
      </g>
    </svg>
  );
}
