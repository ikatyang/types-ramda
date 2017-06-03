import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  // TODO: all-able
  parse_type(`<T>(${_.predicate}: ${_.Predicate('T')}, ${_.list}: ${_.List('T')}) => boolean`),
);
