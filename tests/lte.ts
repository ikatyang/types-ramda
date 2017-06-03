import * as R from 'ramda';

// @dts-jest
R.lte(2, 1); // => false

// @dts-jest
R.lte(2, 2); // => true

// @dts-jest
R.lte(2, 3); // => true

// @dts-jest
R.lte('a', 'z'); // => true

// @dts-jest
R.lte('z', 'a'); // => false
