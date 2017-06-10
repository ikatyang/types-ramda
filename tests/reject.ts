import * as R from 'ramda';

const isOdd = (n: number) => n % 2 === 1;

// @dts-jest
R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]

// @dts-jest
R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
