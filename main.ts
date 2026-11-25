const fs = require('fs');
const path = require('path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// A small unplug pun: the entry itself is just “unplug.”
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'unplug', 'utf8');
