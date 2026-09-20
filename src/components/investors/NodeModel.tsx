"use client";

import { useId, useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { cx } from "@/lib/utils";

/**
 * The node model.
 *
 * ZEUS publishes a node SPECIFICATION. It publishes no revenue, no price, no
 * utilisation and no return. Every competitor calculator in this sector hides
 * that gap by picking flattering defaults and presenting the output as the
 * company's projection. This one does the opposite: it separates the two
 * kinds of input and never lets them blur.
 *
 *   ZEUS RANGE      Slider bounds ARE the published range. You cannot drag a
 *                   control outside what ZEUS actually stated.
 *   YOUR ASSUMPTION No ZEUS source exists. Defaults are placeholders, marked
 *                   as such on the control, in the output, and in the footer.
 *
 * The output is therefore the visitor's model, not ZEUS's forecast, and the
 * component says so in those words. That is the whole point: a sceptical
 * investor can find the break point themselves instead of being told there
 * isn't one.
 *
 * NO INVENTED ZEUS FIGURES. The only derived quantity is the annual solar
 * yield, which is interpolated between ZEUS's own two published endpoints
 * (80 kWp -> 130 MWh, 120 kWp -> 190 MWh) and labelled as interpolated.
 */

const HOURS_PER_YEAR = 8760;

/** ZEUS's published endpoints for solar capacity and annual yield, D2 p7. */
const YIELD_LO = { kwp: 80, mwh: 130 };
const YIELD_HI = { kwp: 120, mwh: 190 };

/** Linear interpolation between the two endpoints ZEUS published. */
function annualSolarYieldMwh(kwp: number) {
  const slope = (YIELD_HI.mwh - YIELD_LO.mwh) / (YIELD_HI.kwp - YIELD_LO.kwp);
  return YIELD_LO.mwh + (kwp - YIELD_LO.kwp) * slope;
}

/** Deterministic across server and client, unlike toLocaleString. */
function fmt(n: number, dp = 0) {
  const fixed = Math.abs(n).toFixed(dp);
  const [whole, frac] = fixed.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${n < 0 ? "-" : ""}${grouped}${frac ? `.${frac}` : ""}`;
}

function money(n: number) {
  if (Math.abs(n) >= 1_000_000) return `$${fmt(n / 1_000_000, 2)}M`;
  if (Math.abs(n) >= 1_000) return `$${fmt(n / 1_000)}k`;
  return `$${fmt(n)}`;
}

type Provenance = "zeus" | "yours";

interface ControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  provenance: Provenance;
  note: string;
  onChange: (n: number) => void;
  format?: (n: number) => string;
}

function Control({
  label,
  value,
  min,
  max,
  step,
  unit,
  provenance,
  note,
  onChange,
  format,
}: ControlProps) {
  const id = useId();
  const noteId = `${id}-note`;

  return (
    <div className="py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <label htmlFor={id} className="tech-label text-ink">
          {label}
        </label>
        <span className="flex items-baseline gap-1.5">
          <span
            className={cx(
              "numeral text-[1.75rem]",
              provenance === "zeus" ? "text-ochre" : "text-ink",
            )}
          >
            {format ? format(value) : fmt(value)}
          </span>
          <span className="text-sm text-slate">{unit}</span>
        </span>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-describedby={noteId}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cx(
          "zeus-range mt-4 w-full",
          provenance === "zeus" ? "zeus-range--ochre" : "zeus-range--ink",
        )}
      />

      <div className="mt-2 flex items-center justify-between text-xs text-slate-dim">
        <span>{format ? format(min) : fmt(min)}</span>
        <span>{format ? format(max) : fmt(max)}</span>
      </div>

      <p id={noteId} className="mt-3 text-sm leading-relaxed text-slate-dim">
        {provenance === "zeus" ? (
          <span className="mr-2 font-medium uppercase tracking-[0.12em] text-ochre">
            ZEUS range.
          </span>
        ) : (
          <span className="mr-2 font-medium uppercase tracking-[0.12em] text-slate">
            Your assumption.
          </span>
        )}
        {note}
      </p>
    </div>
  );
}

function Output({
  label,
  value,
  sub,
  emphasis = false,
}: {
  label: string;
  value: string;
  sub?: string;
  emphasis?: boolean;
}) {
  return (
    <div className="bg-canvas p-6">
      <p className="tech-label">{label}</p>
      <p
        className={cx(
          "numeral mt-3",
          emphasis ? "text-[clamp(2rem,4vw,2.75rem)]" : "text-[1.75rem]",
        )}
      >
        {value}
      </p>
      {sub && (
        <p className="mt-2 text-sm leading-relaxed text-slate-dim">{sub}</p>
      )}
    </div>
  );
}

export function NodeModel() {
  // ZEUS published ranges, D2 pages 7 and 8.
  const [solarKwp, setSolarKwp] = useState(100);
  const [itLoadKw, setItLoadKw] = useState(60);
  const [dcSaving, setDcSaving] = useState(10);
  const [gpuCount, setGpuCount] = useState(28);

  // No ZEUS source. Placeholders for the visitor to replace.
  const [pue, setPue] = useState(1.2);
  const [tariff, setTariff] = useState(0.08);
  const [utilisation, setUtilisation] = useState(70);
  const [gpuRate, setGpuRate] = useState(2);

  // --- Energy ---
  const itEnergyMwh = (itLoadKw * HOURS_PER_YEAR) / 1000;
  const facilityEnergyMwh = itEnergyMwh * pue;
  const afterDcMwh = facilityEnergyMwh * (1 - dcSaving / 100);
  const solarMwh = annualSolarYieldMwh(solarKwp);
  const gridMwh = Math.max(0, afterDcMwh - solarMwh);
  const solarShare = Math.min(100, (solarMwh / afterDcMwh) * 100);
  const gridCost = gridMwh * 1000 * tariff;

  // --- Compute ---
  const gpuHours = gpuCount * HOURS_PER_YEAR * (utilisation / 100);
  const revenue = gpuHours * gpuRate;
  const energyShareOfRevenue = revenue > 0 ? (gridCost / revenue) * 100 : 0;
  const afterEnergy = revenue - gridCost;
  const energyPerGpuHour = gpuHours > 0 ? gridCost / gpuHours : 0;

  return (
    <div className="border border-[var(--rule)] bg-canvas">
      {/* Controls */}
      <div className="grid grid-cols-1 gap-px bg-[var(--rule)] lg:grid-cols-2">
        <div className="bg-canvas p-7 lg:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <TechLabel className="text-ink">From ZEUS</TechLabel>
            <StatusBadge status="target" label="Published design range" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            These four sliders cannot be dragged outside the ranges ZEUS
            published for a 400 m&sup2; class node. The bounds are the claim.
          </p>

          <div className="mt-4 divide-y divide-[var(--rule)]">
            <Control
              label="Solar capacity"
              value={solarKwp}
              min={80}
              max={120}
              step={1}
              unit="kWp"
              provenance="zeus"
              note="ZEUS gives 80 to 120 kWp as the realistic working range."
              onChange={setSolarKwp}
            />
            <Control
              label="Continuous IT load"
              value={itLoadKw}
              min={50}
              max={75}
              step={1}
              unit="kW"
              provenance="zeus"
              note="ZEUS gives 50 to 75 kW average, with higher peaks carried by storage."
              onChange={setItLoadKw}
            />
            <Control
              label="DC-DC power saving"
              value={dcSaving}
              min={8}
              max={15}
              step={0.5}
              unit="%"
              provenance="zeus"
              note="ZEUS estimates 8 to 15% facility-level saving, with 10 to 12% as its central case. Its own estimate, not an independently measured result."
              onChange={setDcSaving}
              format={(n) => fmt(n, 1)}
            />
            <Control
              label="GPUs per node"
              value={gpuCount}
              min={24}
              max={32}
              step={1}
              unit="GPUs"
              provenance="zeus"
              note="ZEUS specifies 24 to 32 H100 or H200 class GPUs, in three to four 8-GPU servers."
              onChange={setGpuCount}
            />
          </div>
        </div>

        <div className="bg-linen p-7 lg:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <TechLabel className="text-ink">Yours</TechLabel>
            <span className="inline-flex items-center gap-2 border border-slate/35 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-slate">
              No ZEUS source
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            ZEUS has published no tariff, no utilisation, no price and no PUE.
            These four defaults are placeholders, not ZEUS figures. Replace them
            with your own and the model below follows.
          </p>

          <div className="mt-4 divide-y divide-[var(--rule)]">
            <Control
              label="Facility PUE"
              value={pue}
              min={1}
              max={1.6}
              step={0.01}
              unit="×"
              provenance="yours"
              note="Total facility energy divided by IT energy. ZEUS publishes no PUE for the SSMDC, so nothing here is a ZEUS claim about efficiency."
              onChange={setPue}
              format={(n) => fmt(n, 2)}
            />
            <Control
              label="Grid tariff"
              value={tariff}
              min={0.03}
              max={0.2}
              step={0.005}
              unit="/ kWh"
              provenance="yours"
              note="What imported grid power costs at the site. Set this from your own view of Vietnamese industrial tariffs."
              onChange={setTariff}
              format={(n) => `$${n.toFixed(3)}`}
            />
            <Control
              label="GPU utilisation sold"
              value={utilisation}
              min={10}
              max={95}
              step={1}
              unit="%"
              provenance="yours"
              note="The share of available GPU hours actually sold. This is the input most likely to decide whether the node works."
              onChange={setUtilisation}
            />
            <Control
              label="Price per GPU hour"
              value={gpuRate}
              min={0.25}
              max={6}
              step={0.05}
              unit="/ GPU-hr"
              provenance="yours"
              note="What you believe a node of this class can charge. ZEUS has published no price, so this number is entirely yours."
              onChange={setGpuRate}
              format={(n) => `$${n.toFixed(2)}`}
            />
          </div>
        </div>
      </div>

      {/* Energy outputs */}
      <div className="border-t border-[var(--rule)] bg-linen px-7 pt-7 lg:px-9 lg:pt-9">
        <TechLabel>Energy, per node per year</TechLabel>
      </div>
      <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
        <Output
          label="Site demand"
          value={`${fmt(afterDcMwh)} MWh`}
          sub={`${fmt(facilityEnergyMwh)} MWh before the DC-DC saving is applied.`}
        />
        <Output
          label="Solar generation"
          value={`${fmt(solarMwh)} MWh`}
          sub="Interpolated between ZEUS's published endpoints, 80 kWp to 130 MWh and 120 kWp to 190 MWh."
        />
        <Output
          label="Solar against demand"
          value={`${fmt(solarShare)}%`}
          sub="Generation as a share of demand, not measured self-consumption. See the note below."
        />
        <Output
          label="Grid energy cost"
          value={money(gridCost)}
          sub={`${fmt(gridMwh)} MWh imported at your tariff.`}
        />
      </div>

      {/* Compute outputs */}
      <div className="border-t border-[var(--rule)] bg-linen px-7 pt-7 lg:px-9 lg:pt-9">
        <TechLabel>Your revenue model</TechLabel>
      </div>
      <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
        <Output
          label="GPU hours sold"
          value={fmt(gpuHours)}
          sub={`${gpuCount} GPUs at ${fmt(utilisation)}% utilisation.`}
        />
        <Output label="Gross revenue" value={money(revenue)} emphasis />
        <Output
          label="Energy as share of revenue"
          value={`${fmt(energyShareOfRevenue, 1)}%`}
          sub={`${`$${energyPerGpuHour.toFixed(3)}`} of grid energy per GPU hour sold.`}
        />
        <Output
          label="Revenue after grid energy"
          value={money(afterEnergy)}
          sub="Before hardware, staff, land, network, tax and every other cost. This is not a profit figure."
          emphasis
        />
      </div>

      {/* The honesty footer. Non-negotiable. */}
      <div className="border-t border-[var(--rule)] bg-canvas p-7 lg:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="projection" label="Your model, not ZEUS's" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3">
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-medium text-ink">
              This output is not a ZEUS projection.
            </strong>{" "}
            ZEUS has published no revenue, price, utilisation or return figure
            for the SSMDC. Four of the eight inputs above have no ZEUS source at
            all, so the result is a consequence of your assumptions, not a
            forecast the company has made or endorsed.
          </p>
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-medium text-ink">
              Solar coverage is an optimistic bound.
            </strong>{" "}
            The solar figure compares annual generation with annual demand. It
            assumes every kilowatt-hour generated is used on site. Real
            self-consumption depends on the generation and load profiles across
            a day, which ZEUS has not published, so true grid import will be
            higher than shown.
          </p>
          <p className="text-sm leading-relaxed text-slate">
            <strong className="font-medium text-ink">
              Only energy is netted off.
            </strong>{" "}
            Hardware amortisation, staff, land, connectivity, insurance, import
            duty and tax are all excluded. Nothing on this page is investment
            advice or a forecast of returns. Verify independently before relying
            on any of it.
          </p>
        </div>
      </div>
    </div>
  );
}
