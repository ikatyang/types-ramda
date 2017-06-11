import * as R from 'ramda';

// @dts-jest:skip boolean
R.isNaN(NaN);        // => true
// @dts-jest:skip boolean
R.isNaN(undefined);  // => false
// @dts-jest:skip boolean
R.isNaN({});         // => false
