import * as R_lte from 'ramda/src/lte';

declare const string: string;
declare const number: number;

// @dts-jest
R_lte(string);
// @dts-jest
R_lte(string, string);
// @dts-jest
R_lte(number, number);
