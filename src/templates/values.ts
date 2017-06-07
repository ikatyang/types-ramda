import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    Struct: parse_type('<T>(obj: Struct<T>) => T[]'),
    Object: parse_type('<T>(obj: Object) => any[]'),
  },
);