import * as R from 'ramda';

const lessThan0 = R.flip(R.lt)(0);
const lessThan2 = R.flip(R.lt)(2);
// @dts-jest
R.any(lessThan0)([1, 2]); // => false
// @dts-jest
R.any(lessThan2)([1, 2]); // => true
