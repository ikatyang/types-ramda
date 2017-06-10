import * as R from 'ramda';

// @dts-jest
R.insertAll(2, [10,11,12], [1,2,3,4]);
// @dts-jest
R.insertAll(2)([10,11,12], [1,2,3,4]);
// @dts-jest
R.insertAll(2, [10,11,12])([1,2,3,4]);
// @dts-jest
R.insertAll(2)([10,11,12])([1,2,3,4]);
