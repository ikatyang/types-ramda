import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T) => TResult[]'),
);
