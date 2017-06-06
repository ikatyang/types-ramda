import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    base: parse_type('<V, U extends Struct<any>>(getter: (s: U) => V, setter: (a: V, s: U) => U) => ManualLens<V>'),
    allows_setter_to_change_value_type: parse_type('<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V) => Lens<T, U>'),
  },
);
