import * as R_prepend from 'ramda/src/prepend';

declare const string: string;
declare const number_array: number[];

// @dts-jest:pass
R_prepend(string)(number_array);
// @dts-jest:pass
R_prepend(string, number_array);
