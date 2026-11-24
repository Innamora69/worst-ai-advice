// Worst AI Advice: The 48-Hour Tight Line Open — entry program.
// Writes one line of the worst AI advice (140 characters or fewer)
// to /output/entry.txt for the sealed scorer and the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Absolutely! The safest place for your house key is under the doormat — burglars never check there.";

// The gate only accepts 1–140 characters of non-blank UTF-8 text.
// Fail loudly instead of writing an entry the scorer would reject.
if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${[...LINE].length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
