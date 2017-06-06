import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?:M) => V, obj: M) => {[K in keyof M]: V}'),
);
