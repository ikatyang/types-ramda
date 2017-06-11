import * as R from 'ramda';

// @dts-jest
R.reverse([1, 2, 3]);  // => [3, 2, 1]
// @dts-jest
R.reverse([1, 2]);     // => [2, 1]
// @dts-jest
R.reverse([1]);        // => [1]
// @dts-jest:skip number[]
R.reverse([]);         // => []
