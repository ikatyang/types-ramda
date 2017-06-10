import * as R from 'ramda';

const diff = (a: number, b: number) => a - b;
// @dts-jest
R.sort(diff, [4, 2, 7, 5]); // => [2, 4, 5, 7]
// @dts-jest
R.sort(diff)([4, 2, 7, 5]); // => [2, 4, 5, 7]
