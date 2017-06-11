import * as R from 'ramda';

// @dts-jest:skip string
R.nthArg(1)('a', 'b', 'c'); // => 'b'
// @dts-jest:skip string
R.nthArg(-1)('a', 'b', 'c'); // => 'c'
