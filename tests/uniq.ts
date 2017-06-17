import * as R_uniq from 'ramda/src/uniq';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest
R_uniq(number_array);
// @dts-jest
R_uniq(string_array);
