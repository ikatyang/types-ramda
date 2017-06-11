import * as R from 'ramda';

// flatten
// @dts-jest:skip number[]
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
