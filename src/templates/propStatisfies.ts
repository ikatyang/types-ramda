import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "Record__curry_friendly_": parse_type('<V, K extends string, U extends Record<K, V>>(pred: Pred<V>, name: K, obj: U) => boolean'),
    "keyof__info_too_late_on_currying": parse_type('<T, U>(pred: Pred<T>, name: Prop, obj: U) => boolean'),
  },
);
