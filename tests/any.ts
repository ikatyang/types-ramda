import * as R from 'ramda';

let lessThan0 = R.flip(R.lt)(0);
let lessThan2 = R.flip(R.lt)(2);
// @dts-jest
R.any(lessThan0)([1, 2]); // => false
// @dts-jest
R.any(lessThan2)([1, 2]); // => true
