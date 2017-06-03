import * as R from 'ramda';

// @dts-jest
R.and(true, true); // => true

// @dts-jest
R.and(true, false); // => false

// @dts-jest
R.and(false, true); // => false

// @dts-jest
R.and(false, false); // => false
