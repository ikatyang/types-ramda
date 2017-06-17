import * as R_zip from 'ramda/src/zip';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest
R_zip(number_array);
// @dts-jest
R_zip(number_array)(string_array);
// @dts-jest
R_zip(number_array, string_array);
