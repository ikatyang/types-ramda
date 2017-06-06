import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<T, A, B>(fn: (a: A, b: T, ...args: any[]) => T) => (a: A, b: B) => T'),
    "non_generics_for_return_func": parse_type('<T>(fn: Variadic<T>) => (a:any, b:any) => T'),
  },
);
