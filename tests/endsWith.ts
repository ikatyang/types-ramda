import * as R_endsWith from 'ramda/src/endsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_endsWith(string);
// @dts-jest
R_endsWith(string, string);
// @dts-jest
R_endsWith(boolean_array);
// @dts-jest
R_endsWith(boolean_array, boolean_array);
