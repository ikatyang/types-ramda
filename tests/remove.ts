import * as R from 'ramda';

// @dts-jest
R.remove(2, 3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
// @dts-jest
R.remove(2, 3)([1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
// @dts-jest
R.remove(2)(3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
