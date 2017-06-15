import * as R_intersection from 'ramda/src/intersection';

declare const number_array: number[];

// @dts-jest
R_intersection(number_array);
// @dts-jest
R_intersection(number_array, number_array);
