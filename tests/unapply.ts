import * as R_unapply from 'ramda/src/unapply';

declare const number_array_to_string: (nums: number[]) => string;
declare const number_array: number[];

// @dts-jest
R_unapply(number_array_to_string);
// @dts-jest
R_unapply(number_array_to_string)(...number_array);
