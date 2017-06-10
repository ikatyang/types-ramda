import * as R from 'ramda';

// @dts-jest
R.test(/^x/, 'xyz'); // => true
// @dts-jest
R.test(/^y/)('xyz'); // => false
