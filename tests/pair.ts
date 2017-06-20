import * as R_pair from 'ramda/src/pair';

declare const number: number;
declare const object: object;

// @dts-jest:pass
R_pair(number);
// @dts-jest:pass
R_pair(number)(object);
// @dts-jest:pass
R_pair(number, object);
