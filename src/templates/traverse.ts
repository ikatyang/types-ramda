import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>) => Applicative<Array<U>>'),
    "general_ADT_case": parse_type('<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>) => Applicative<Traversable<U>>'),
  },
);
