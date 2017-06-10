import * as R from 'ramda';

const lteTwo = (x: number) => x <= 2;
// @dts-jest
R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
// @dts-jest
R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
