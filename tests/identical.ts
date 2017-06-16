import * as R_identical from 'ramda/src/identical';

declare const string: string;

// @dts-jest
R_identical(string);
// @dts-jest
R_identical(string)(string);
// @dts-jest
R_identical(string, string);
