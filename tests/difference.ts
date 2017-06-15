import * as R_difference from 'ramda/src/difference';

declare const number_array: number[];

// @dts-jest
R_difference(number_array);
// @dts-jest
R_difference(number_array, number_array);
