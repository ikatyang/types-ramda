import * as R_min from '../ramda/dist/src/min';

declare const number: number;
declare const string: string;

// @dts-jest:pass -> <T$1 extends string = string>(b: T$1) => T$1
R_min(string);
// @dts-jest:pass -> <T$1 extends number = number>(b: T$1) => T$1
R_min(number);
// @dts-jest:pass -> number
R_min(number, number);
