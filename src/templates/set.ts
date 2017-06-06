import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    base: parse_type('<T, U>(lens: Lens<T, U>, a: U, obj: T) => T'),
    unknown: parse_type('<T>(lens: UnknownLens, a: any, obj: T) => T'),
  },
);
