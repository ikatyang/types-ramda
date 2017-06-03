import * as R from 'ramda';

// @dts-jest
R.gte(2, 1); // => true

// @dts-jest
R.gte(2, 2); // => true

// @dts-jest
R.gte(2, 3); // => false

// @dts-jest
R.gte('a', 'z'); // => false

// @dts-jest
R.gte('z', 'a'); // => true
