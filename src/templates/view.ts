import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

export default create_curried_declarations(
  module,
  {
    smart_approach__unreliable: parse_type('<T, U>(lens: Lens<T, U>, obj: T) => U'),
    lens_with_type_manually_set: parse_type('<T>(lens: ManualLens<T>, obj: Struct<any>) => T'),
    unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case_: parse_type('<T>(lens: UnknownLens, obj: Struct<any>) => any'),
  },
);
