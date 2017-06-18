import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';
import {create_composition_declarations} from './utils/create-composition-declarations';

export default create_composition_declarations(
  'pipeP',
  'pipe',
  max_curry_level,
  6,
  x => x,
  x => `Promise<${x}>`,
);
