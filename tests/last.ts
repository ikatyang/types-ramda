import * as R_last from 'ramda/src/last';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest
R_last(string);
// @dts-jest
R_last(string_array);
// @dts-jest
R_last(number_array);
