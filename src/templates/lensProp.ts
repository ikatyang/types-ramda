import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "generics": parse_type('<T>(prop: Prop) => ManualLens<T>'),
    "non_generic": parse_type('(prop: Prop) => UnknownLens'),
  },
);
