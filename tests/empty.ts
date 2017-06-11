import * as R from 'ramda';

// @dts-jest
R.empty([1,2,3,4,5]); // => []
// @dts-jest
R.empty([1, 2, 3]);     // => []
// @dts-jest:skip string
R.empty('unicorns');    // => ''
// @dts-jest:skip {}
R.empty({x: 1, y: 2});  // => {}
