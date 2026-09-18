"use client";

import { cx } from "@/lib/utils";

/**
 * One continuous infrastructure schematic: grid and solar enter, power is
 * managed, heat is rejected, compute runs, control watches.
 *
 * Deliberately SVG rather than WebGL. It is a few kilobytes, it renders
 * identically on a mid-range Android, it is legible at mobile width, and the
 * stage labels are real text in the DOM.
 *
 * `stage` indexes the pillars: 0 power, 1 cooling, 2 compute, 3 control.
 * Every stage below the current one stays lit — the point is an accumulating
 * system, not four separate states.
 */
export function SystemDiagram({
  stage,
  className,
}: {
  stage: number;
  className?: string;
}) {
  const on = (s: number) => stage >= s;

  const AMBER = "var(--color-ochre)";
  const CYAN = "var(--color-sage)";
  const DIM = "rgba(43,39,34,0.2)";
  const DIM_TEXT = "rgba(43,39,34,0.42)";

  return (
    <svg
      viewBox="0 0 520 620"
      className={cx("h-auto w-full", className)}
      role="img"
      aria-label="ZEUS infrastructure schematic: grid and solar feed power management, which feeds cooling, compute and a control layer."
    >
      <defs>
        <marker
          id="zeus-arrow-ochre"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" fill={AMBER} />
        </marker>
        <marker
          id="zeus-arrow-dim"
          viewBox="0 0 8 8"
          refX="4"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" fill={DIM} />
        </marker>
      </defs>

      {/* ---- Sources: grid + solar ---- */}
      <g>
        <rect
          x="40"
          y="24"
          width="180"
          height="64"
          fill="none"
          stroke={on(0) ? AMBER : DIM}
          strokeWidth="1"
          style={{ transition: "stroke 500ms var(--ease-zeus)" }}
        />
        <text
          x="130"
          y="61"
          textAnchor="middle"
          fill={on(0) ? AMBER : DIM_TEXT}
          fontSize="13"
          letterSpacing="2.4"
          style={{ transition: "fill 500ms var(--ease-zeus)" }}
        >
          GRID
        </text>

        <rect
          x="300"
          y="24"
          width="180"
          height="64"
          fill="none"
          stroke={on(0) ? AMBER : DIM}
          strokeWidth="1"
          style={{ transition: "stroke 500ms var(--ease-zeus)" }}
        />
        <text
          x="390"
          y="61"
          textAnchor="middle"
          fill={on(0) ? AMBER : DIM_TEXT}
          fontSize="13"
          letterSpacing="2.4"
          style={{ transition: "fill 500ms var(--ease-zeus)" }}
        >
          SOLAR
        </text>
      </g>

      {/* Sources converge */}
      <path
        d="M130 88 L130 122 L260 122 L260 148"
        fill="none"
        stroke={on(0) ? AMBER : DIM}
        strokeWidth="1"
        markerEnd={on(0) ? "url(#zeus-arrow-ochre)" : "url(#zeus-arrow-dim)"}
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />
      <path
        d="M390 88 L390 122 L260 122"
        fill="none"
        stroke={on(0) ? AMBER : DIM}
        strokeWidth="1"
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />

      {/* ---- Power management ---- */}
      <rect
        x="150"
        y="150"
        width="220"
        height="70"
        fill={on(0) ? "rgba(138,90,40,0.07)" : "transparent"}
        stroke={on(0) ? AMBER : DIM}
        strokeWidth="1"
        style={{ transition: "all 500ms var(--ease-zeus)" }}
      />
      <text
        x="260"
        y="182"
        textAnchor="middle"
        fill={on(0) ? AMBER : DIM_TEXT}
        fontSize="13"
        letterSpacing="2.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        POWER MANAGEMENT
      </text>
      <text
        x="260"
        y="203"
        textAnchor="middle"
        fill={on(0) ? "rgba(138,90,40,0.6)" : DIM_TEXT}
        fontSize="10"
        letterSpacing="1.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        DISTRIBUTION / LOAD BALANCE
      </text>

      <path
        d="M260 220 L260 266"
        fill="none"
        stroke={on(1) ? AMBER : DIM}
        strokeWidth="1"
        markerEnd={on(1) ? "url(#zeus-arrow-ochre)" : "url(#zeus-arrow-dim)"}
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />

      {/* ---- Cooling ---- */}
      <rect
        x="150"
        y="268"
        width="220"
        height="70"
        fill={on(1) ? "rgba(138,90,40,0.07)" : "transparent"}
        stroke={on(1) ? AMBER : DIM}
        strokeWidth="1"
        style={{ transition: "all 500ms var(--ease-zeus)" }}
      />
      <text
        x="260"
        y="300"
        textAnchor="middle"
        fill={on(1) ? AMBER : DIM_TEXT}
        fontSize="13"
        letterSpacing="2.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        COOLING
      </text>
      <text
        x="260"
        y="321"
        textAnchor="middle"
        fill={on(1) ? "rgba(138,90,40,0.6)" : DIM_TEXT}
        fontSize="10"
        letterSpacing="1.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        THERMAL MANAGEMENT
      </text>

      {/* Heat rejection, the loop that leaves the system */}
      <path
        d="M370 303 L440 303 L440 240"
        fill="none"
        stroke={on(1) ? "rgba(138,90,40,0.45)" : DIM}
        strokeWidth="1"
        strokeDasharray="4 4"
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />
      <text
        x="446"
        y="232"
        fill={on(1) ? "rgba(138,90,40,0.6)" : DIM_TEXT}
        fontSize="9"
        letterSpacing="1.2"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        HEAT
      </text>

      <path
        d="M260 338 L260 384"
        fill="none"
        stroke={on(2) ? CYAN : DIM}
        strokeWidth="1"
        markerEnd={on(2) ? "url(#zeus-arrow-ochre)" : "url(#zeus-arrow-dim)"}
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />

      {/* ---- Compute: a rack of racks ---- */}
      <rect
        x="110"
        y="386"
        width="300"
        height="104"
        fill={on(2) ? "rgba(79,90,69,0.06)" : "transparent"}
        stroke={on(2) ? CYAN : DIM}
        strokeWidth="1"
        style={{ transition: "all 500ms var(--ease-zeus)" }}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={128 + i * 46}
          y={404}
          width="30"
          height="50"
          fill="none"
          stroke={on(2) ? CYAN : DIM}
          strokeWidth="1"
          opacity={on(2) ? 0.55 : 0.35}
          style={{
            transition: `all 500ms var(--ease-zeus) ${i * 55}ms`,
          }}
        />
      ))}
      <text
        x="260"
        y="476"
        textAnchor="middle"
        fill={on(2) ? CYAN : DIM_TEXT}
        fontSize="13"
        letterSpacing="2.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        COMPUTE
      </text>

      <path
        d="M260 490 L260 530"
        fill="none"
        stroke={on(3) ? CYAN : DIM}
        strokeWidth="1"
        markerEnd={on(3) ? "url(#zeus-arrow-ochre)" : "url(#zeus-arrow-dim)"}
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />

      {/* ---- Control: wraps the whole system ---- */}
      <rect
        x="110"
        y="532"
        width="300"
        height="62"
        fill={on(3) ? "rgba(79,90,69,0.06)" : "transparent"}
        stroke={on(3) ? CYAN : DIM}
        strokeWidth="1"
        strokeDasharray={on(3) ? "0" : "4 4"}
        style={{ transition: "all 500ms var(--ease-zeus)" }}
      />
      <text
        x="260"
        y="561"
        textAnchor="middle"
        fill={on(3) ? CYAN : DIM_TEXT}
        fontSize="13"
        letterSpacing="2.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        CONTROL
      </text>
      <text
        x="260"
        y="580"
        textAnchor="middle"
        fill={on(3) ? "rgba(79,90,69,0.6)" : DIM_TEXT}
        fontSize="10"
        letterSpacing="1.4"
        style={{ transition: "fill 500ms var(--ease-zeus)" }}
      >
        AUTOMATION / REMOTE MONITORING
      </text>

      {/* Telemetry returns to power management, closing the loop */}
      <path
        d="M110 563 L64 563 L64 185 L150 185"
        fill="none"
        stroke={on(3) ? "rgba(79,90,69,0.4)" : DIM}
        strokeWidth="1"
        strokeDasharray="3 5"
        style={{ transition: "stroke 500ms var(--ease-zeus)" }}
      />
    </svg>
  );
}
