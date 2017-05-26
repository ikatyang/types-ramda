import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type('<T, U>(fn: Morphism<T, U>, list: List<T>) => U[]'),
    object: parse_type('<T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>) => Dictionary<U>'),
  },
);
