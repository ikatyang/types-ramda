import * as R from 'ramda';

// @dts-jest
R.drop(3, [1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
// @dts-jest
R.drop(3)([1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
// @dts-jest:skip string
R.drop(3, 'ramda'); // => 'ram'
// @dts-jest:skip string
R.drop(3)('ramda'); // => 'ram'
