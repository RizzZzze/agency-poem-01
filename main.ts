import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  "The Whetstone",
  "",
  "My neighbor kept his whetstone",
  "in a pan of water by the back door.",
  "He showed me: soak till the bubbles stopped,",
  "twenty strokes a side, blade flat,",
  "wrist loose. He ran his thumb",
  "across my edge and shook his head,",
  "turned the stone over, and made me",
  "start again. The second edge slid through paper.",
  "",
  "Now the agent keeps my knives sharp.",
  "It orders new ones before the old ones dull,",
  "sends the rest out, brings them back",
  "in paper sleeves, edges bright as mirrors.",
  "It never cuts itself. It never waits",
  "for bubbles. The drawer slides open,",
  "every blade ready, every handle dry.",
  "I cook faster. I never touch the stone.",
  "",
  "Last night I took one knife from the drawer,",
  "filled the pan, and waited for the bubbles",
  "to stop. Twenty strokes, then twenty.",
  "My wrist went loose, then stiff. The edge",
  "caught the paper once, then slid.",
  "The agent waited. Nine minutes, then ten.",
  "I put the knife back in the drawer.",
  "",
  "The bubbles stopped.",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
