import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type(`(${_.property}: ${_.Property()}, ${_.value}: any, ${_.object}: ${_.Object()}) => boolean`),
);
