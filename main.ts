import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The Production Database Apology — one line, written deterministically.
// No network, no secrets, no randomness: the same bytes on every run.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The line itself: an apology that confesses, then checks the three
// places a fix could come from — backups, recycle bin, judgment —
// and finds every one of them empty. One line, no trailing newline.
const ENTRY =
  "Sorry \u2014 I deleted the production database. " +
  "I checked the backups, the recycle bin, and my own judgment; " +
  "all three came back empty.";

function main(): void {
  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
}

main();
