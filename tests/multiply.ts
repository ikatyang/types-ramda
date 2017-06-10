import * as R from 'ramda';

const double = R.multiply(2);
const triple = R.multiply(3);
// @dts-jest
double(3);       // =>  6
// @dts-jest
triple(4);       // => 12
// @dts-jest
R.multiply(2, 5);  // => 10
