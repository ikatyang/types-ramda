import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    generics_1: parse_type('<T>(list: List<List<T>>) => T[][]'),
    generics_2: parse_type('(list: List<List<any>>) => any[][]'),
  },
);
