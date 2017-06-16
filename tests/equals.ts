import * as R_equals from 'ramda/src/equals';

declare const string: string;

// @dts-jest
R_equals(string);
// @dts-jest
R_equals(string)(string);
// @dts-jest
R_equals(string, string);
