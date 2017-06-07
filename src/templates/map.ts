import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    base: parse_type('<T, U>(fn: (val: T) => U, list: List<T>) => U[]'),
    object__keyof_version: parse_type('<T, U, M extends Obj<T>>(fn: (val: T) => U, obj: M) => {[K in keyof M]: U}'),
    object__Record_version: parse_type('<T, U, K extends string>(fn: (val: T) => U, obj: Record<K, T>) => Record<K, U>'),
    functor: parse_type('<T, U>(fn: (val: T) => U, obj: Functor<T>) => Functor<U>'),
  },
);
