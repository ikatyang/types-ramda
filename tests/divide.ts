import * as R from 'ramda';

// @dts-jest
R.divide(71, 100); // => 0.71

const half = R.flip(R.divide)(2);
// @dts-jest
half(42); // => 21

const reciprocal = R.divide(1);
// @dts-jest
reciprocal(4);   // => 0.25
