import * as R from 'ramda';

// @dts-jest
R.difference([1,2,3,4], [7,6,5,4,3]); // => [1,2]
// @dts-jest
R.difference([7,6,5,4,3], [1,2,3,4]); // => [7,6,5]
