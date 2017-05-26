import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type(
      '<T, U>(fn: ListMapper<T, U>) => CurriedFunction2<IndexedMorphism<T, U>, List<T>, U[]>'),
    object: parse_type(
      '<T, U>(fn: DictionaryMapper<T, U>) => CurriedFunction2<IndexedMorphism<T, U>, Dictionary<T>, Dictionary<U>>'),
  },
);
