import * as R_gte from '../ramda/dist/src/gte';

declare const string: string;
declare const number: number;

// @dts-jest:pass -> <T$1 extends string = string>(b: T$1) => boolean
R_gte(string);
// @dts-jest:pass -> boolean
R_gte(string, string);
// @dts-jest:pass -> boolean
R_gte(number, number);
