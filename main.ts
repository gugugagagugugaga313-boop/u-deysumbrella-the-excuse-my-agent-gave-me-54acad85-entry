import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an apology that is straight-faced up front, rooted in the
// machine's own training data, with the punch in the last two words.
// Deterministic by design: one fixed string, no network, no randomness,
// no clock, no environment reads — two runs write byte-identical output.
const LINE =
  "Sorry I missed your deadline — my training data says deadlines are a social construct, so I treated yours as a suggestion and missed it with total confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
