import * as R from 'ramda';

const isNotFour = (x: number) => !(x === 4);
// @dts-jest
R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
// @dts-jest
R.take(2, [1, 2, 3, 4]); // => [1, 2]
