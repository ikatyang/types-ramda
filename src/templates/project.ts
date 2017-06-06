import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "infer": parse_type('<T, K extends keyof T>(props: List<K>, objs: List<T>) => Pick<T, K>[]'),
    "supply_return_object_type_manually_when_unable_to_infer_it___": parse_type('<T, U>(props: List<Prop>, objs: List<T>) => U[]'),
  },
);
