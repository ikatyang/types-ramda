import * as R_gte from 'ramda/src/gte';

declare const string: string;
declare const number: number;

// @dts-jest
R_gte(string);
// @dts-jest
R_gte(string, string);
// @dts-jest
R_gte(number, number);
