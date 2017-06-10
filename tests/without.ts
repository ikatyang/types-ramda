import * as R from 'ramda';

// @dts-jest
R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
