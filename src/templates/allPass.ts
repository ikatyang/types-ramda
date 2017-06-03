import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type(`<T>(${_.predicates}: ${_.Predicate('T')}[]) => ${_.CurriedFunction1('T', 'boolean')}`),
);