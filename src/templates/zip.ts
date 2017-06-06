import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<K, V>(list1: List<K>, list2: List<V>) => KeyValuePair<K, V>[]'),
);
