import * as R from 'ramda';

// @dts-jest
R.or(false, true); // => false
// @dts-jest
R.or(0, [1]); // => []
// @dts-jest
R.or(0)([1]); // => []
// @dts-jest
R.or(null, ''); // => ''
