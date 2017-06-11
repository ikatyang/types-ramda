import * as R from 'ramda';

// @dts-jest:skip boolean
R.equals(R.unnest([1, [2], [[3]]]), [1,2,[3]]); // => true
// @dts-jest
R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]),[1,2,3,4,5,6]); // => true
