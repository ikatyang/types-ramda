import * as R_concat from 'ramda/src/concat';

declare const string: string;
declare const number_array: number[];

// @dts-jest
R_concat(string, string);
// @dts-jest
R_concat(number_array, number_array);