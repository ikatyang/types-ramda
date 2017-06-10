import * as R from 'ramda';

// @dts-jest
R.eqBy(Math.abs, 5, -5); // => true
// @dts-jest
R.eqBy(Math.abs)(5, -5); // => true
// @dts-jest
R.eqBy(Math.abs, 5)(-5); // => true
