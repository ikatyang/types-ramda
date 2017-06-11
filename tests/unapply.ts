import * as R from 'ramda';

// @dts-jest:skip (...args: string[])=>string
R.unapply(JSON.stringify);
// @dts-jest
R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]'
