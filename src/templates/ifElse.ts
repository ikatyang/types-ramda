import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, U, V>(fn: Pred<T>, onTrue: (v: T) => U, onFalse: (v: T) => V) => (v: T) => U|V'),
);
