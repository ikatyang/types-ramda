import * as R from 'ramda';

// @dts-jest:show
R.and(true, true); // => true

// @dts-jest:show
R.and(true, false); // => false

// @dts-jest:show
R.and(false, true); // => false

// @dts-jest:show
R.and(false, false); // => false
