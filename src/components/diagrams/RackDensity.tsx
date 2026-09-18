/**
 * What "24-32 GPUs" looks like as hardware.
 *
 * The compute figures are abstract until they are arranged: three to four
 * 8-GPU servers in a rack, sitting inside a 50-75 kW continuous IT envelope.
 * Seeing how little physical space that is makes the modular argument for
 * itself.
 *
 * NO INVENTED ARITHMETIC. ZEUS publishes the GPU count, the server count and
 * the IT envelope; it does not publish a per-GPU draw, so this does not derive
 * one or imply the envelope is "full". The envelope bar is drawn as a range,
 * matching how the figure is published.
 */
const W = 700;
const H = 340;

const SERVERS = 4; // upper bound of the published 3-4 servers
const GPUS_PER = 8;

export function RackDensity() {
  const rackX = 60;
  const rackY = 40;
  const rackW = 200;
  const rackH = 250;
  const slotH = 44;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="A rack elevation beside a power budget. The rack holds three to four servers, each carrying eight GPUs, giving 24 to 32 GPUs in total with 1.9 to 4.5 terabytes of high bandwidth memory. Alongside, the node's continuous IT envelope is shown as a range of 50 to 75 kilowatts. No per-GPU power draw is derived, because ZEUS has not published one."
    >
      {/* Rack frame */}
      <rect x={rackX} y={rackY} width={rackW} height={rackH} fill="rgba(43,39,34,0.05)" stroke="rgba(43,39,34,0.55)" strokeWidth="1.4" />
      <text x={rackX + rackW / 2} y={rackY - 12} textAnchor="middle" fill="rgba(43,39,34,0.6)" fontSize="10" letterSpacing="1.4">
        ONE RACK
      </text>

      {/* Servers, each showing its eight GPUs */}
      {Array.from({ length: SERVERS }, (_, s) => {
        const y = rackY + 14 + s * (slotH + 12);
        const provisional = s === SERVERS - 1; // the 4th is the upper bound
        return (
          <g key={s}>
            <rect
              x={rackX + 12}
              y={y}
              width={rackW - 24}
              height={slotH}
              fill={provisional ? "transparent" : "rgba(79,90,69,0.14)"}
              stroke={provisional ? "rgba(43,39,34,0.35)" : "var(--color-sage)"}
              strokeWidth="1.1"
              strokeDasharray={provisional ? "4 3" : "0"}
            />
            {Array.from({ length: GPUS_PER }, (_, g) => (
              <rect
                key={g}
                x={rackX + 20 + g * 20}
                y={y + 12}
                width={14}
                height={20}
                fill={provisional ? "rgba(43,39,34,0.10)" : "rgba(79,90,69,0.45)"}
                stroke={provisional ? "rgba(43,39,34,0.3)" : "var(--color-sage)"}
                strokeWidth="0.7"
              />
            ))}
            <text x={rackX + rackW - 6} y={y + slotH - 4} textAnchor="end" fill="rgba(43,39,34,0.45)" fontSize="8">
              8 GPU
            </text>
          </g>
        );
      })}

      <text x={rackX} y={rackY + rackH + 20} fill="rgba(43,39,34,0.5)" fontSize="9">
        3–4 servers. The fourth is the upper bound of the published range.
      </text>

      {/* Totals */}
      <g>
        <text x="320" y="62" fill="rgba(43,39,34,0.5)" fontSize="10" letterSpacing="1.4">
          PER NODE
        </text>

        <text x="320" y="106" fill="var(--color-sage)" fontSize="34" letterSpacing="-0.5">
          24–32
        </text>
        <text x="320" y="124" fill="rgba(43,39,34,0.6)" fontSize="10">
          NVIDIA H100 / H200 GPUs
        </text>

        <text x="320" y="170" fill="rgba(43,39,34,0.75)" fontSize="22">
          1.9–4.5 TB
        </text>
        <text x="320" y="186" fill="rgba(43,39,34,0.6)" fontSize="10">
          HBM memory
        </text>

        <text x="320" y="224" fill="rgba(43,39,34,0.75)" fontSize="22">
          50–100+ PFLOPS
        </text>
        <text x="320" y="240" fill="rgba(43,39,34,0.6)" fontSize="10">
          FP8 sparse
        </text>
      </g>

      {/* IT envelope as a range, not a computed total */}
      <g>
        <text x="320" y="276" fill="rgba(43,39,34,0.5)" fontSize="10" letterSpacing="1.4">
          CONTINUOUS IT ENVELOPE
        </text>
        <rect x="320" y="286" width="330" height="16" fill="rgba(43,39,34,0.06)" stroke="rgba(43,39,34,0.2)" strokeWidth="1" />
        {/* 50-75 kW positioned on a 0-100 kW scale */}
        <rect x={320 + 3.3 * 50} y="286" width={3.3 * 25} height="16" fill="rgba(138,90,40,0.28)" stroke="var(--color-ochre)" strokeWidth="1" />
        <text x={320 + 3.3 * 62} y="298" textAnchor="middle" fill="var(--color-ochre)" fontSize="10">
          50–75 kW
        </text>
        <text x="320" y="318" fill="rgba(43,39,34,0.45)" fontSize="9">
          0
        </text>
        <text x="650" y="318" textAnchor="end" fill="rgba(43,39,34,0.45)" fontSize="9">
          100 kW
        </text>
      </g>
    </svg>
  );
}
