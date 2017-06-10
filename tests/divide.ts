import * as R from 'ramda';

// @dts-jest
R.divide(71, 100); // => 0.71

let half = R.flip(R.divide)(2);
// @dts-jest
half(42); // => 21

let reciprocal = R.divide(1);
// @dts-jest
reciprocal(4);   // => 0.25
