import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "list_version": parse_type('<T, U>(fn: (n: T) => U[], list: List<T>) => U[]'),
    "generic_chain_version": parse_type('<T, U>(fn: (n: T) => Chain<U>, list: Chain<T>) => Chain<U>'),
    "function_argument": parse_type('<T, U, V>(fn: (v: V) => (list: List<T>) => U[], monad: (list: List<T>) => V) => (list: List<T>) => U[]'),
  },
);
