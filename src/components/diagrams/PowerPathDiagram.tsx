/**
 * The DC-DC power path, contrasted with the conventional one.
 *
 * The whole argument is "two conversion stages removed", so the diagram shows
 * both chains stacked — the conventional path with its two conversions marked,
 * and the ZEUS path without them. Showing only the ZEUS path would make the
 * claim unreadable.
 */
const conventional = [
  { label: "Solar", dc: true },
  { label: "Inverter", convert: true },
  { label: "AC distribution", dc: false },
  { label: "Server PSU", convert: true },
  { label: "Compute", dc: true },
];

const zeus = [
  { label: "Solar", dc: true },
  { label: "Battery", dc: true },
  { label: "DC distribution", dc: true },
  { label: "DC-input compute", dc: true },
];

export function PowerPathDiagram() {
  return (
    <svg
      viewBox="0 0 480 300"
      className="h-auto w-full"
      role="img"
      aria-label="Two power paths compared. The conventional path runs solar, inverter, AC distribution, server power supply, compute — with two conversion stages. The ZEUS path runs solar, battery, DC distribution, DC-input compute, with no conversion stages."
    >
      {/* ---- Conventional ---- */}
      <text
        x="0"
        y="16"
        fill="rgba(43,39,34,0.5)"
        fontSize="10"
        letterSpacing="1.8"
      >
        CONVENTIONAL
      </text>

      {conventional.map((node, i) => {
        const y = 32;
        const w = 88;
        const x = i * 96;
        return (
          <g key={node.label}>
            <rect
              x={x}
              y={y}
              width={w}
              height="44"
              fill={node.convert ? "rgba(138,90,40,0.10)" : "transparent"}
              stroke={node.convert ? "var(--color-ochre)" : "rgba(43,39,34,0.22)"}
              strokeWidth="1"
              strokeDasharray={node.convert ? "3 3" : "0"}
            />
            <text
              x={x + w / 2}
              y={y + 26}
              textAnchor="middle"
              fill={node.convert ? "var(--color-ochre)" : "rgba(43,39,34,0.62)"}
              fontSize="9"
              letterSpacing="0.6"
            >
              {node.label}
            </text>
            {node.convert && (
              <text
                x={x + w / 2}
                y={y + 60}
                textAnchor="middle"
                fill="var(--color-ochre)"
                fontSize="8"
                letterSpacing="1"
              >
                LOSS
              </text>
            )}
            {i < conventional.length - 1 && (
              <line
                x1={x + w}
                y1={y + 22}
                x2={x + 96}
                y2={y + 22}
                stroke="rgba(43,39,34,0.22)"
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}

      {/* ---- ZEUS ---- */}
      <text
        x="0"
        y="168"
        fill="var(--color-sage)"
        fontSize="10"
        letterSpacing="1.8"
      >
        SSMDC — DC END TO END
      </text>

      {zeus.map((node, i) => {
        const y = 184;
        const w = 108;
        const x = i * 118;
        return (
          <g key={node.label}>
            <rect
              x={x}
              y={y}
              width={w}
              height="44"
              fill="rgba(79,90,69,0.08)"
              stroke="var(--color-sage)"
              strokeWidth="1"
            />
            <text
              x={x + w / 2}
              y={y + 26}
              textAnchor="middle"
              fill="var(--color-sage)"
              fontSize="9"
              letterSpacing="0.6"
            >
              {node.label}
            </text>
            {i < zeus.length - 1 && (
              <line
                x1={x + w}
                y1={y + 22}
                x2={x + 118}
                y2={y + 22}
                stroke="var(--color-sage)"
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}

      <text
        x="0"
        y="262"
        fill="rgba(43,39,34,0.5)"
        fontSize="9"
        letterSpacing="1"
      >
        No inverter. No server-side AC-DC stage.
      </text>
      <text
        x="0"
        y="282"
        fill="var(--color-sage)"
        fontSize="11"
        letterSpacing="1"
      >
        8–15% ongoing facility saving
      </text>
    </svg>
  );
}
