import * as R_divide from 'ramda/src/divide';

declare const number: number;

// @dts-jest:pass
R_divide(number, number);
// @dts-jest:pass
R_divide(number)(number);
