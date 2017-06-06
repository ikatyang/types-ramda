import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    dispatch_to_some__and__method_: parse_type('<T extends {and?: Function}>(fn1: T, val2: boolean|any) => boolean'),
    no_generics: parse_type('(v1: any, v2: any) => boolean'),
  },
);
