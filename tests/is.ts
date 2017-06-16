import * as R_is from 'ramda/src/is';

declare const string: string;

// @dts-jest
R_is(String);
// @dts-jest
R_is(String)(string);
// @dts-jest
R_is(String, string);
