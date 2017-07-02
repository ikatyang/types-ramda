import * as R_max from '../ramda/dist/src/max';

declare const number: number;
declare const string: string;

// @dts-jest:pass -> <T$1 extends string = string>(b: T$1) => T$1
R_max(string);
// @dts-jest:pass -> <T$1 extends number = number>(b: T$1) => T$1
R_max(number);
// @dts-jest:pass -> number
R_max(number, number);
