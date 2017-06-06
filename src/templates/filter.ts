import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<T>(pred: Pred<T>, list: List<T>) => T[]'),
    "functor_to_functor": parse_type('<T>(pred: Pred<T>, list: Functor<T>) => Functor<T>[]'),
    "functor_to_array": parse_type('<T>(pred: Pred<T>, list: Functor<T>) => T[]'),
    "object": parse_type('<T, U extends Obj<T>>(pred: Pred<T>, obj: U) => Partial<U>'),
  },
);
