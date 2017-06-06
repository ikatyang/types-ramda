import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    common_case_of_array_as_traversable: parse_type('<T>(fn: (v: T) => Applicative<T>, traversable: List<Applicative<T>>) => Applicative<Array<T>>'),
    general_ADT_case_: parse_type('<T>(fn: (v: T) => Applicative<T>, traversable: Traversable<Applicative<T>  >) => Applicative<Traversable<T>>'),
  },
);
