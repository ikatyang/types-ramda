import * as R from 'ramda';

let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
// @dts-jest
R.findLastIndex(R.propEq('a', 1))(xs); // => 1
// @dts-jest
R.findLastIndex(R.propEq('a', 4))(xs); // => -1
// @dts-jest:skip number[]
R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
