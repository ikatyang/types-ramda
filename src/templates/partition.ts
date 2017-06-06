import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    arrays: parse_type('<T>(fn: (a: T) => boolean, list: List<T>) => [T[], T[]]'),
    objects: parse_type('<T extends Obj<V>, U extends Obj<V>, V>(fn: (a: V) => boolean, obj: T & U) => [T, U]'),
    objects__alternative_notation: parse_type('<T, U extends Obj<T>>(fn: (a: T) => boolean, obj: U) => [Partial<U>, Partial<U>]'),
  },
);
