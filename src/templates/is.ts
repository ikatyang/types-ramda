import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  // TODO: TypePredicate
  parse_type('<T>(ctor: Type<T>, val: any) => boolean'),
  // parse_type('<T>(ctor: Type<T>, val: any) => val is T'),
);
