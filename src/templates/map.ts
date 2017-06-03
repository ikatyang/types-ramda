import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type(
      `<T, U>(${_.morphism}: ${_.Morphism('T', 'U')}, ${_.list}: ${_.List('T')}) => U[]`,
    ),
    object: parse_type(
      `<T, U>(${_.morphism}: ${_.Morphism('T', 'U')}, ${_.dictionary}: ${_.Dictionary('T')}) => ${_.Dictionary('U')}`,
    ),
  },
);
