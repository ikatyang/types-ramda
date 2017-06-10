import * as R from 'ramda';

const isNotOne = (x: number) => x !== 1;
// @dts-jest
R.takeLastWhile(isNotOne, [1, 2, 3, 4]); // => [2, 3, 4]
// @dts-jest
R.takeLastWhile(isNotOne)([1, 2, 3, 4]); // => [2, 3, 4]
