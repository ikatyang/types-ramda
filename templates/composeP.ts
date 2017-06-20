import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';
import {create_composition_declarations} from './utils/create-composition-declarations';

export default [
  ...dts.parse(`
    import {PromiseLike} from './$types';
  `).members,
  ...create_composition_declarations(
    'composeP',
    'compose',
    max_curry_level,
    6,
    x => x,
    x => `PromiseLike<${x}>`,
  ),
];
