import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    keyof_version: parse_type('<J, K extends keyof J>(p: K, obj: J) => J[K]'),
    Record_version__more_curry_friendly: parse_type('<N extends string, V, T extends Record<N, V>>(p: N, obj: T) => V'),
  },
);
