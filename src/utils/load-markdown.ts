import * as fs from 'fs';

export const load_markdown = (the_module: NodeModule) =>
  fs.readFileSync(the_module.filename.replace(/\.ts$/, '.md'), 'utf8').trim();
