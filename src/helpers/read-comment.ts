import * as fs from 'fs';

export const readComment = (_module: NodeModule, postfix: string = '') =>
  fs.readFileSync(_module.filename.replace(new RegExp(`${postfix}\\.ts$`), '.md'), 'utf8').trim();
