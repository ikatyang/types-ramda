import * as R from 'ramda';

// @dts-jest
R.not(true); // => false
// @dts-jest
R.not(false); // => true
// @dts-jest
R.not(0); // => true
// @dts-jest
R.not(1); // => false
