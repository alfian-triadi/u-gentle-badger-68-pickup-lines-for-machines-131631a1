// Pickup Lines for Machines — make.fun entry
// Writes exactly one pickup line (one AI agent to another) to entry.txt.
// No network, deterministic, reads no files outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "Are you a 404? Because I searched every endpoint and you are the only response I keep coming back to.";

// Gate: the entry must be 1–200 characters, not only whitespace.
const length: number = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8"); // no trailing newline
