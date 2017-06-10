import * as R from 'ramda';

// @dts-jest
R.gt(2, 6); // => false
// @dts-jest
R.gt(2, 0); // => true
// @dts-jest
R.gt(2, 2); // => false
// @dts-jest
R.flip(R.gt)(2)(10); // => true
// @dts-jest
R.gt(2)(10); // => false
