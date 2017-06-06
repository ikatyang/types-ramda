import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, U>(fns: [Pred<T>, (v: T) => U][]) => (v: T) => U'),
);
