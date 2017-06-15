import * as R_union from 'ramda/src/union';

declare const number_array: number[];

// @dts-jest
R_union(number_array);
// @dts-jest
R_union(number_array, number_array);
