import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "base": parse_type('<V>(transformations: NestedObj<(v: any) => any>, obj: V) => V'),
    "no_inference": parse_type('(transformations: Obj<Function>, obj: any) => T'),
  },
);
