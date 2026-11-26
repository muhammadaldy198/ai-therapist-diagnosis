import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Diagnosis: compulsive list-making. You made a list of your problems, then a list to prioritize the list. Prescribed: one item, done badly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);

// Deterministic: one fixed line, no input, no network, no clock.
