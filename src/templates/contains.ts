import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('(a: string, list: string) => boolean'),
    "generics": parse_type('<T, R extends List<T>>(a: T, list: R) => boolean'),
  },
);
