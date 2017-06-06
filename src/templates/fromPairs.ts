import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  parse_type('<V>(pairs: List<KeyValuePair<Prop, V>>) => Obj<V>'),
);
