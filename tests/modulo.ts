import * as R from 'ramda';

// @dts-jest
R.modulo(17, 3); // => 2
// JS behavior:
// @dts-jest
R.modulo(-17, 3); // => -2
// @dts-jest
R.modulo(17, -3); // => 2

const isOdd = R.flip(R.modulo)(2);
// @dts-jest
isOdd(42); // => 0
// @dts-jest
isOdd(21); // => 1
