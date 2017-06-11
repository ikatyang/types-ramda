import * as R from 'ramda';

// @dts-jest
R.match(/([a-z]a)/g, 'bananas'); // => ['ba', 'na', 'na']
// @dts-jest
R.match(/a/, 'b'); // => []
// @dts-jest:skip Argument of type 'null' is not assignable to parameter of type 'string'.
R.match(/a/, null); // error with strict null checks
