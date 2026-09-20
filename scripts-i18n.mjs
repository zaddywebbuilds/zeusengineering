// npm run audit:i18n
//
// Extracts every t("...") literal in the source and reports the ones with no
// Vietnamese translation.
//
// This check exists because of a deliberate design choice: t() falls back to
// the English source when a translation is missing, so a gap renders as a
// readable English sentence rather than as a crash or a raw key. That is the
// right behaviour for a visitor and the wrong behaviour for a maintainer,
// since it makes a missing translation invisible until a Vietnamese speaker
// reads the page. This turns it back into a build failure.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = "src";
const STRINGS = "src/i18n/dictionaries/vi/strings.ts";

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith(".tsx") || p.endsWith(".ts")) out.push(p);
  }
  return out;
}

// Keys present in the Vietnamese map: either "quoted key": or bareWord:
const mapSrc = readFileSync(STRINGS, "utf8");
const have = new Set();
const QUOTED_KEY = /^ {2}"((?:[^"\\]|\\.)*)":/gm;
const BARE_KEY = /^ {2}([A-Za-z][A-Za-z0-9]*):\s/gm;
for (const m of mapSrc.matchAll(QUOTED_KEY)) have.add(JSON.parse(`"${m[1]}"`));
for (const m of mapSrc.matchAll(BARE_KEY)) have.add(m[1]);

// Every t("...") call in the app, excluding the i18n module itself.
const T_CALL = /\bt\(\s*"((?:[^"\\]|\\.)*)"\s*\)/g;
const used = new Map();
for (const file of walk(SRC)) {
  if (file.includes(join("src", "i18n"))) continue;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(T_CALL)) {
    const key = JSON.parse(`"${m[1]}"`);
    if (!used.has(key)) used.set(key, file);
  }
}

const missing = [...used.keys()].filter((k) => !have.has(k));
const unused = [...have].filter((k) => !used.has(k));
const coverage = used.size
  ? Math.round(((used.size - missing.length) / used.size) * 100)
  : 100;

console.log(`${used.size} translatable strings in use`);
console.log(`${have.size} Vietnamese translations available`);
console.log(`coverage: ${coverage}%`);

if (unused.length) {
  console.log(`\n${unused.length} translation(s) no longer referenced:`);
  for (const k of unused.slice(0, 20)) console.log(`  ${JSON.stringify(k)}`);
}

if (missing.length) {
  console.error(`\n${missing.length} UNTRANSLATED, add to ${STRINGS}:`);
  for (const k of missing) {
    console.error(`  ${JSON.stringify(k)}: "",  // ${used.get(k)}`);
  }
  process.exit(1);
}

console.log("\nevery t() string has a Vietnamese translation");
