import * as R_concat from 'ramda/src/concat';

declare const string: string;
declare const number_array: number[];

// @dts-jest:pass
R_concat(string, string);
// @dts-jest:pass
R_concat(number_array, number_array);
