import * as R from 'ramda';

// @dts-jest:skip any[][]
R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']]
// @dts-jest
R.transpose([[1, 2, 3], ['a', 'b', 'c']]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
// @dts-jest
R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]]
