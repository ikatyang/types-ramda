import * as R from 'ramda';

// @dts-jest:skip number
R.max(7, 3); // => 7
// @dts-jest:skip string
R.max('a', 'z'); // => 'z'
