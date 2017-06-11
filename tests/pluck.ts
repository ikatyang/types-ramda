import * as R from 'ramda';

// @dts-jest
R.pluck('a', [{a: 1}, {a: 2}]); // => [1, 2]
// @dts-jest:skip number[]
R.pluck(0, [[1, 2], [3, 4]]);   // => [1, 3]
// @dts-jest:skip number[]
R.pluck('a')([{a: 1}, {a: 2}]); // => [1, 2]
// @dts-jest:skip number[]
R.pluck(0)([[1, 2], [3, 4]]);   // => [1, 3]
