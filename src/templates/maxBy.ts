import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<T>(keyFn: (a: T) => Ord, a: T, b: T) => T'),
);
