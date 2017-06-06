import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>, acc: List<T>, list: List<T>) => U'),
);
