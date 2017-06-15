import * as R_startsWith from 'ramda/src/startsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_startsWith(string);
// @dts-jest
R_startsWith(string, string);
// @dts-jest
R_startsWith(boolean_array);
// @dts-jest
R_startsWith(boolean_array, boolean_array);
