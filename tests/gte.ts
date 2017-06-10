import * as R from 'ramda';

// @dts-jest
R.gte(2, 6); // => false
// @dts-jest
R.gte(2, 0); // => true
// @dts-jest
R.gte(2, 2); // => false
// @dts-jest
R.flip(R.gte)(2)(10); // => true
// @dts-jest
R.gte(2)(10); // => false
