import * as R from 'ramda';

// @dts-jest
R.intersection([1,2,3,4], [7,6,5,4,3]); // => [4, 3]
// @dts-jest
R.intersection([1,2,3,4])([7,6,5,4,3]); // => [4, 3]
// @dts-jest
R.intersection([1,2,4], [1,2,3]); // => [1,2]
// @dts-jest
R.intersection([1,2,4])([1,2,3]); // => [1,2]
