import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  "The String Line",
  "",
  "We built the fence between our yards",
  "when we still spoke every Sunday.",
  "My brother pulled the string line tight.",
  "I held the post. We argued",
  "about straight. He showed me how to swing:",
  "one hit, hard, eyes on the nail.",
  "Three winters since. The fence fell.",
  "",
  "This spring the agent booked a crew.",
  "Their truck filled the driveway at nine.",
  "New boards leaned against the garage.",
  "A tape measure snapped. A saw",
  "started up. I watched from the window,",
  "coffee going cold, while strangers",
  "fixed what my brother and I had built.",
  "",
  "I put the coffee down and went out.",
  "Sent the crew home. Paid them",
  "for the morning. Picked up the hammer",
  "and set one post in the old hole,",
  "mud to my knees, the string line",
  "sagging till I pulled it tight.",
  "",
  "His truck stopped at the curb.",
  "He got out with his hammer.",
  "He held the board. I swung.",
  "One hit, hard, eyes on the nail.",
  "He stayed.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
