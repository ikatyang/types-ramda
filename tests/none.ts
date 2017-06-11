import * as R from 'ramda';

// @dts-jest:skip boolean
R.none(R.isNaN, [1, 2, 3]); // => true
// @dts-jest:skip boolean
R.none(R.isNaN, [1, 2, 3, NaN]); // => false
// @dts-jest:skip boolean
R.none(R.isNaN)([1, 2, 3, NaN]); // => false
