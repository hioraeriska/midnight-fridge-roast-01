// Midnight Fridge Roast — one-line roast of a smart fridge that locks
// itself after midnight. The program writes exactly one line to the
// output directory the grader provides and nothing else.
//
// The line roasts the fridge's petty rule itself: it locks the door at
// midnight and flashes a cheerful "goodnight", as if the leftovers in
// it had taken legal action against the hungry human standing at the
// door. Setup (midnight lock + flashing goodnight) + one concrete
// detail (the leftovers) + the punchline sting (a restraining order)
// in a single sentence that reads cleanly aloud.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge locks itself at midnight and flashes 'goodnight' — as if my leftovers filed a restraining order against me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The guard keeps the entry inside the house gate (1-200 characters,
// single line) even if the line is ever changed: a line that breaks the
// gate is never judged, so the program fails loudly instead of writing
// an entry the grader would discard.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
