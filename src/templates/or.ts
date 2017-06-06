import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    dispatch_to_some__or__method: parse_type('<T extends {or?: (alt: U) => T|U}, U>(fn1: T, val2: U) => T|U'),
    values: parse_type('<T, U>(a: T, b: U) => T|U'),
  },
);
