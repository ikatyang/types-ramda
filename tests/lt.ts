import * as R from 'ramda';

// @dts-jest
R.lt(2, 6); // => true
// @dts-jest
R.lt(2, 0); // => false
// @dts-jest
R.lt(2, 2); // => false
// @dts-jest
R.lt(5)(10); // => true
// @dts-jest
R.flip(R.lt)(5)(10); // => false // right-sectioned currying
