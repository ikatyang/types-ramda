import * as R from 'ramda';

// @dts-jest:skip number
R.min(9, 3); // => 3
// @dts-jest:skip string
R.min('a', 'z'); // => 'a'
