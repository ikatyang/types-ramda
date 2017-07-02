import * as R_clamp from '../ramda/dist/src/clamp';

declare const number: number;

// @dts-jest:pass -> <T$1 extends number = number>(value: T$1) => T$1
R_clamp(number, number);
// @dts-jest:pass -> <T$1 extends number = number>(value: T$1) => T$1
R_clamp(number)(number);
// @dts-jest:pass -> number
R_clamp(number, number, number);
