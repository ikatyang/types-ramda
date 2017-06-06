import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  // TODO: TypePredicate
  parse_type('(val: any) => boolean'),
  // parse_type('(val: any) => val is List<any>'),
);
