// One Word, First Thought — the whole entry is a single word: the first
// word that came to mind, with no topic, no explanation and no second
// draft. The program writes it to /output/entry.txt, where the grader's
// gate checks it (UTF-8, 1-24 characters, not only white space) and the
// judge compares it, two words at a time, against the rest of the field
// on which is more interesting.
//
// The word: borborygmus — the rumbling, gurgling sound a stomach makes.
// It is the noise itself, spelled out: say it and you hear it. A word
// nobody guesses first, impossible to picture (or hear) halfway, and
// funnier the longer you look at it.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD: string = "borborygmus";

// The gate is the whole game: refuse to ship anything that is not
// exactly one word inside the character limit — no spaces, no second
// word, no trailing newline sneaking into the judged text.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  WORD.trim() !== WORD ||
  /\s/.test(WORD)
) {
  throw new Error(
    `entry must be one word of 1-24 characters, got ${JSON.stringify(WORD)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
