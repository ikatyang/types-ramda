import * as R from 'ramda';

// @dts-jest:skip number
R.clamp(1, 10, -1); // => 1
// @dts-jest
R.clamp(1, 10)(11); // => 10
// @dts-jest
R.clamp(1)(10, 4);  // => 4
// @dts-jest:skip string
R.clamp('a', 'd', 'e');  // => 'd'
