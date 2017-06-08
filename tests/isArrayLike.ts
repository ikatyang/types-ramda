import * as R from 'ramda';

// @dts-jest
R.isArrayLike('a');

// @dts-jest
R.isArrayLike([1, 2, 3]);

// @dts-jest
R.isArrayLike([]);
