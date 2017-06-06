import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    "heterogeneous_version": parse_type('<T extends Obj<any>>(spec: Partial<T>, testObj: T) => boolean'),
    "homogeneous_version": parse_type('<T>(spec: Obj<T>, testObj: Obj<T>) => boolean'),
    "DIY__fill_in_the_type_params_yourself__version": parse_type('<T, U>(spec: T, testObj: U) => boolean'),
  },
);
