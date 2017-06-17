import * as R_without from 'ramda/src/without';

declare const number_array: number[];

// @dts-jest
R_without(number_array);
// @dts-jest
R_without(number_array, number_array);
