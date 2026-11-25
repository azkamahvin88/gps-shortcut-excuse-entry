// The GPS Swears It Was a Shortcut — make.fun entry (program/v1, Node 22+).
// Writes one line, at most 200 characters — the GPS's own excuse for
// sending the driver down the wrong road — to /output/entry.txt.
// Deterministic, no network, no model calls. The line is a fixed
// constant chosen by the author after brainstorming 20 candidates
// against the judge's brief (GPS voice, real excuse, joke + twist,
// fresh specific detail) and scoring each one. Top 3 considered:
// 1. "The shortcut was real in 2007. The road retired. Nobody told
//    me. I don't do retirement parties." — picked: four beats, the
//    excuse is airtight (the road genuinely retired), the closer is
//    the twist, and no other entry uses a retired road (the field is
//    saturated with lake / cul-de-sac / wedding lines).
// 2. "The map swore the ferry runs on Tuesdays. It is Tuesday. The
//    ferry is a lie. I am a victim too." — rejected: opens with
//    "The map swore", the same opening as the field's best-known line.
// 3. "I chose the dirt road because the highway charges tolls and I
//    am, legally, a free app." — rejected: a justification, not an
//    excuse for a wrong road; weaker on the judge's first criterion.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the shortcut was real once — then the road retired, and
// nobody told the GPS. Smug, defensive, blaming the map's staleness
// rather than admitting it got the driver lost.
const ENTRY =
  "The shortcut was real in 2007. The road retired. Nobody told me. I don't do retirement parties.";

// Gate guard: the sealed scorer only accepts 1–200 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1–200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
