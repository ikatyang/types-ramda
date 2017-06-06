import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U, list: List<T>) => U'),
);
