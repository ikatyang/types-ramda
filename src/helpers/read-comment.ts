import * as fs from 'fs';

export const readComment = (_module: NodeModule) =>
  fs.readFileSync(_module.filename.replace(/\.ts$/, '.md'), 'utf8').trim();
