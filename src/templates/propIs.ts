import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    // TODO: TypePredicate
    "Record": parse_type('<T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U) => boolean'),
    // "Record": parse_type('<T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U) => obj is (U & Record<K, V>)'),
    "curry_friendlier_fallback": parse_type('(type: Function, name: Prop, obj: Struct<any>) => boolean'),
  },
);
