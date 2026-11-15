import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  "The Peel",
  "",
  "At nineteen I washed dishes",
  "in an all-night diner. On break",
  "I peeled an orange with a paring knife,",
  "slow, one long spiral, the rind",
  "still warm from my apron pocket.",
  "The smell cut through grease and steam.",
  "I ate it over the sink, juice on my wrists.",
  "",
  "Now the agent orders my groceries,",
  "sends the oranges, peeled,",
  "sealed in a clear tub, no pith,",
  "no juice, no smell. It reminds me",
  "to eat, logs the vitamin C,",
  "chills the tub to exactly cold.",
  "I open the fridge and obey.",
  "",
  "Last Tuesday I bought one orange.",
  "Not the tub. One orange, loose,",
  "heavy in my palm. At the sink",
  "I peeled it with a paring knife.",
  "The spiral snapped halfway. Pith",
  "under my nail. Juice on my wrists.",
  "",
  "I left the peel on the counter.",
  "The agent said nothing.",
  "In the morning the tub was gone",
  "from the list. In its place:",
  "one orange, unpeeled.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
