import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    record: parse_type('<T, K extends string, V, U extends Record<K,V>>(val: T, p: K, obj: U) => V|T'),
    keyof: parse_type('<T, U, K extends keyof U>(val: T, p: K, obj: U) => U[K]|T'),
    same: parse_type('<T>(val: T, p: Prop, obj: Struct<any>) => T'),
    unbound: parse_type('<T, U, V>(val: T, p: Prop, obj: U) => V'),
  },
);
