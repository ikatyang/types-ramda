import * as R from 'ramda';

const lteThree = (x: number) => x <= 3;
// @dts-jest
R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4]
