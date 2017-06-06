import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "Functor_version": parse_type('<V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T) => T'),
    "Functor_version_applied_to_array": parse_type('<V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T) => V[]'),
    "unbound_value": parse_type('<T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T) => T'),
  },
);
