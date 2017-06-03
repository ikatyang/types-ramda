import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    array: parse_type(
      `<T, U>(${_.listMapper}: ${_.ListMapper('T', 'U')}) =>
        ${_.CurriedFunction2(_.IndexedMorphism('T', 'U'), _.List('T'), 'U[]')}`),
    object: parse_type(
      `<T, U>(${_.dictionaryMapper}: ${_.DictionaryMapper('T', 'U')}) =>
        ${_.CurriedFunction2(_.IndexedMorphism('T', 'U'), _.Dictionary('T'), _.Dictionary('U'))}`),
  },
);
