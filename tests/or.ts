import * as R from 'ramda';

// @dts-jest
R.or(true, true); // => true

// @dts-jest
R.or(true, false); // => true

// @dts-jest
R.or(false, true); // => true

// @dts-jest
R.or(false, false); // => false
