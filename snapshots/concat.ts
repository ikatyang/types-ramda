import * as R_concat from '../ramda/dist/src/concat';

declare const string: string;
declare const number_array: number[];

// @dts-jest:pass -> string
R_concat(string, string);
// @dts-jest:pass -> number[]
R_concat(number_array, number_array);
