import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    triple: parse_type('<T0, T1, T2>(list: [T0, T1, T2]) => T0'),
    tuple: parse_type('<T0, T1>(list: [T0, T1]) => T0'),
    single: parse_type('<T>(list: [T]) => T'),
    any: parse_type('<T extends List<any>>(list: T) => any'),
  },
);
