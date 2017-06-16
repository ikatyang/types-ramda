import {Placeholder} from 'ramda/src/$placeholder';
import * as R_prop from 'ramda/src/prop';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest
R_prop('a');
// @dts-jest
R_prop('a')(a_b_number_record);

// @dts-jest
R_prop('a', a_b_number_record);

// @dts-jest
R_prop(placeholder, a_b_number_record);
// @dts-jest
R_prop(placeholder, a_b_number_record)('a');
