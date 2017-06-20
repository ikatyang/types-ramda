import {Placeholder} from 'ramda/src/$placeholder';
import * as R_props from 'ramda/src/props';

declare const placeholder: Placeholder;
declare const a_b_c_number_record: Record<'a' | 'b' | 'c', number>;

// @dts-jest:pass
R_props(['a', 'b']);
// @dts-jest:pass
R_props(['a', 'b'])(a_b_c_number_record);

// @dts-jest:pass
R_props(['a', 'b'], a_b_c_number_record);

// @dts-jest:pass
R_props(placeholder, a_b_c_number_record);
// @dts-jest:pass
R_props(placeholder, a_b_c_number_record)(['a', 'b']);
