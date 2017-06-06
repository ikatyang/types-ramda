import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<T, U extends Struct<any>, K extends keyof U>(prop: K, val: T, obj: U) => {[P in K]: T} & U'),
    "any_object_as_long_as_the_type_remains_unchanged": parse_type('<T>(prop: Prop, val: any, obj: T) => T'),
  },
);
