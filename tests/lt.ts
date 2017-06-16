import * as R_lt from 'ramda/src/lt';

declare const string: string;
declare const number: number;

// @dts-jest
R_lt(string);
// @dts-jest
R_lt(string, string);
// @dts-jest
R_lt(number, number);
