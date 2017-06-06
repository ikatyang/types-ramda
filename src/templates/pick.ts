import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "generic_1": parse_type('<T, K extends keyof T>(names: List<K>, obj: T) => Pick<T, K>'),
    "generic_2": parse_type('<T>(names: List<Prop>, obj: T) => Partial<T>'),
  },
);
