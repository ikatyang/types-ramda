import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type(
      `<T, U>(mapper: (fn: (value: T) => U, list: List<T>) => U[]) =>
        CurriedFunction2<(value: T, index: number, list: List<T>) => U, List<T>, U[]>`),
    object: parse_type(
      `<T, U>(mapper: (fn: (value: T) => U, obj: Obj<T>) => Obj<U>) =>
        CurriedFunction2<(value: T, index: number, obj: Obj<T>) => U, Obj<T>, Obj<U>>`),
  },
);
