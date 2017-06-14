import * as R_append from 'ramda/src/append';

declare const number: number;
declare const number_array: number[];

// @dts-jest
R_append(number)(number_array);
// @dts-jest
R_append(number, number_array);
