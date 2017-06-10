import * as R from 'ramda';

// @dts-jest
R.lte(2, 6); // => true
// @dts-jest
R.lte(2, 0); // => false
// @dts-jest
R.lte(2, 2); // => true
// @dts-jest
R.flip(R.lte)(2)(1); // => true
// @dts-jest
R.lte(2)(10); // => true
