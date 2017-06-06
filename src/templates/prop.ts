import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "keyof_version": parse_type('<T, K extends keyof T>(p: K, obj: T) => T[K]'),
    "Record_version__more_curry_friendly": parse_type('<K extends string, V, T extends Record<K, V>>(p: K, obj: T) => V'),
  },
);
