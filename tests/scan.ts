import * as R from 'ramda';

let numbers = [1, 2, 3, 4];
// @dts-jest
R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24]
// @dts-jest
R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24]
// @dts-jest
R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24]
