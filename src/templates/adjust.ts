import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type(
    `<T, U>(${_.morphism}: ${_.Morphism('T', 'U')}, ${_.index}: number, ${_.list}: ${_.List('T')}) => (T | U)[]`,
  ),
);
