import * as R_clamp from 'ramda/src/clamp';

declare const number: number;

// @dts-jest
R_clamp(number, number);
// @dts-jest
R_clamp(number)(number);
// @dts-jest
R_clamp(number, number, number);
