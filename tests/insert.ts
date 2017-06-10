import * as R from 'ramda';

// @dts-jest
R.insert(2, 5, [1, 2, 3, 4]); // => [1,2,5,3,4]
// @dts-jest
R.insert(2)(5, [1, 2, 3, 4]); // => [1,2,5,3,4]
// @dts-jest
R.insert(2, 5)([1, 2, 3, 4]); // => [1,2,5,3,4]
// @dts-jest
R.insert(2)(5)([1, 2, 3, 4]); // => [1,2,5,3,4]
