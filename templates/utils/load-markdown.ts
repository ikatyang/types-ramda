import * as fs from 'fs';

export const load_markdown = (filename: string) =>
  fs.readFileSync(filename.replace(/(\.d)?\.ts$/, '.md'), 'utf8').trim();
