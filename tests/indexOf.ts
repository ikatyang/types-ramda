import * as R from 'ramda';

// @dts-jest
R.indexOf(3, [1, 2, 3, 4]); // => 2
// @dts-jest
R.indexOf(10)([1, 2, 3, 4]); // => -1
