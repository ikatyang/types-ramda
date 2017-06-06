import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "Objects": parse_type('<T>(value: T) => T'),
    "Arrays": parse_type('<T>(value: List<T>) => T[]'),
  },
);
