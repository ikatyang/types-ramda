import * as R_append from 'ramda/src/append';

declare const string: string;
declare const number_array: number[];

// @dts-jest:pass
R_append(string)(number_array);
// @dts-jest:pass
R_append(string, number_array);
