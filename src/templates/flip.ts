import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    base: parse_type('<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult) => (arg1:U, arg0?:T) => TResult'),
    rest_arguments: parse_type('<T, U, Rest, TResult>(fn: (arg0: T, arg1: U, ...args: Rest[]) => TResult) => (arg1: U, arg0?: T, ...args: Rest[]) => TResult'),
  },
);
