import * as R_tail from 'ramda/src/tail';

declare const string: string;
declare const string_array: string[];

// @dts-jest
R_tail(string);
// @dts-jest
R_tail(string_array);
