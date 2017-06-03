import * as R from 'ramda';

// @dts-jest
R.gt(2, 1); // => true

// @dts-jest
R.gt(2, 2); // => false

// @dts-jest
R.gt(2, 3); // => false

// @dts-jest
R.gt('a', 'z'); // => false

// @dts-jest
R.gt('z', 'a'); // => true
