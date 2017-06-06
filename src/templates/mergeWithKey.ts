import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V) => U & V'),
);
