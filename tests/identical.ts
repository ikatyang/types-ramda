import * as R from 'ramda';

const o = {};
// @dts-jest
R.identical(o, o); // => true
// @dts-jest
R.identical(1, 1); // => true
// @dts-jest
R.identical('2', '1'); // => false
// @dts-jest
R.identical([], []); // => false
// @dts-jest
R.identical(0, -0); // => false
// @dts-jest
R.identical(NaN, NaN); // => true
