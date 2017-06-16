import * as R_gt from 'ramda/src/gt';

declare const string: string;
declare const number: number;

// @dts-jest
R_gt(string);
// @dts-jest
R_gt(string, string);
// @dts-jest
R_gt(number, number);
