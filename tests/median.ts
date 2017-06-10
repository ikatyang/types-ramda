import * as R from 'ramda';

// @dts-jest
R.median([7, 2, 10, 9]); // => 8
// @dts-jest
R.median([]); // => NaN
