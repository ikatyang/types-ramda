import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<K extends string, V, T extends Record<K, V>>(key: K, value: V) => T'),
);
