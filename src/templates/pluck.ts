import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "infer": parse_type('<T extends Struct<any>, K extends keyof T>(p: K, list: List<T>) => T[K][]'),
    "supply_return_object_type_manually_when_unable_to_infer_it___": parse_type('<T>(p: Prop, list: Struct<any>[]) => T[]'),
  },
);
