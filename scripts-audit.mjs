// npm run audit:claims
// Fails if a figure exists in src/data without a matching row in CLAIMS.md.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DATA = "src/data";
const claims = readFileSync("CLAIMS.md", "utf8");

/**
 * Translation dictionaries hold no figures by design: every number on /vi is
 * imported from the data layer, never retyped. Scanning them only produces
 * false positives, e.g. the Vietnamese column header `amount: "Số tiền"`.
 * That invariant is documented at the top of src/data/vi.ts.
 */
const NOT_FIGURE_SOURCES = new Set(["vi.ts"]);

const figures = new Set();
for (const f of readdirSync(DATA)) {
  if (!f.endsWith(".ts")) continue;
  if (NOT_FIGURE_SOURCES.has(f)) continue;
  const src = readFileSync(join(DATA, f), "utf8");
  for (const m of src.matchAll(/value:\s*"([^"]+)"/g)) figures.add(m[1]);
  for (const m of src.matchAll(/amount:\s*"([^"]+)"/g)) figures.add(m[1]);
}

const missing = [...figures].filter((v) => {
  // Keep digit grouping; only strip decoration that CLAIMS.md may omit.
  const bare = v.replace(/[~+]/g, "").trim();
  return bare.length > 1 && !claims.includes(bare);
});

console.log(`${figures.size} figures in src/data`);
if (missing.length) {
  console.error("\nUNDOCUMENTED, add to CLAIMS.md:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log("every figure is documented in CLAIMS.md");
