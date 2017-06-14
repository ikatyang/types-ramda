import * as R_prepend from 'ramda/src/prepend';

declare const number: number;
declare const number_array: number[];

// @dts-jest
R_prepend(number)(number_array);
// @dts-jest
R_prepend(number, number_array);
