import { readdirSync } from 'fs';
import { dirname, extname, basename } from 'path';

import * as S from '../src/index';

const references = readdirSync(dirname(module.filename))
  .filter(x => (extname(x) === '.ts' && basename(x, '.ts') !== 'index'))
  .map(x => new S.Reference('path', `./${x.slice(0, -3)}`));

export default new S.Declaration(references);
