import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<V1, V2, T1 extends Struct<V1>, T2 extends Struct<V2>>(a: T1, b: T2) => T1 & T2'),
);
