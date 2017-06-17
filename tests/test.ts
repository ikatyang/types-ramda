import * as R_test from 'ramda/src/test';

declare const regex: RegExp;
declare const string: string;

// @dts-jest
R_test(regex);
// @dts-jest
R_test(regex, string);
