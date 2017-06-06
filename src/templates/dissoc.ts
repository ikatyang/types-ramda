import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    accurate: parse_type('<T>(prop: keyof T, obj: T) => T'),
    easier: parse_type('<T>(prop: Prop, obj: Struct<any>) => T'),
  },
);
