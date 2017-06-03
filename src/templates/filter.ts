import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type(
      `<T>(${_.predicate}: ${_.Predicate('T')}, ${_.list}: ${_.List('T')}) => T[]`,
    ),
    object: parse_type(
      `<T>(${_.predicate}: ${_.Predicate('T')}, ${_.dictionary}: ${_.Dictionary('T')}) => ${_.Dictionary('T')}`,
    ),
  },
);
