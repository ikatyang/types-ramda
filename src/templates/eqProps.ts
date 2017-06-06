import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<T, U>(prop: Prop, obj1: T, obj2: U) => boolean'),
    "less_generics": parse_type('(prop: Prop, obj1: any, obj2: any) => boolean'),
  },
);
