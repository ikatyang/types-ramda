import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';
import {create_composition_declarations} from './utils/create-composition-declarations';

export default create_composition_declarations('pipe', 'pipe', max_curry_level, max_curry_level);
