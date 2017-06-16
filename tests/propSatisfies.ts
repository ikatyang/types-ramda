import {Placeholder} from 'ramda/src/$placeholder';
import * as R_propSatisfies from 'ramda/src/propSatisfies';

declare const number_to_boolean: (x: number) => boolean;
declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest
R_propSatisfies(number_to_boolean, 'a');
// @dts-jest
R_propSatisfies(number_to_boolean, 'a')(a_b_number_record);

// @dts-jest
R_propSatisfies(number_to_boolean, 'a', a_b_number_record);

// @dts-jest
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record);
// @dts-jest
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record)('a');
