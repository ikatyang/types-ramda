import * as R from 'ramda';

// @dts-jest
R.and(false, true); // => false
// @dts-jest
R.and(0, [1]); // => 0
// @dts-jest
R.and(0)([1]); // => 0
// @dts-jest
R.and(null, ''); // => null
