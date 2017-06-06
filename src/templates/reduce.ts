import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult, list: R) => TResult'),
);
