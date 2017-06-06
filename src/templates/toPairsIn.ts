import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    generics: parse_type('<T>(obj: Obj<T>) => [string, T][]'),
    non_generic: parse_type('(obj: Object) => [string, any][]'),
  },
);
