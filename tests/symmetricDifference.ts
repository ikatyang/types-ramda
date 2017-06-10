import * as R from 'ramda';

// @dts-jest
R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); // => [1,2,7,6,5]
// @dts-jest
R.symmetricDifference([7,6,5,4,3])([1,2,3,4]); // => [7,6,5,1,2]
