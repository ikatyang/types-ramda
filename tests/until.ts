import * as R from 'ramda';

// @dts-jest
R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
