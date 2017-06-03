import * as R from 'ramda';

// @dts-jest
R.lt(2, 1); // => false

// @dts-jest
R.lt(2, 2); // => false

// @dts-jest
R.lt(2, 3); // => true

// @dts-jest
R.lt('a', 'z'); // => true

// @dts-jest
R.lt('z', 'a'); // => false
