import * as R from 'ramda';

let numberOfCalls = 0;
let trackedAdd = function(a: number, b: number) {
  numberOfCalls += 1;
  return a + b;
};
let memoTrackedAdd = R.memoize(trackedAdd);

// @dts-jest
memoTrackedAdd(1, 2); // => 3
// @dts-jest
numberOfCalls;        // => 1
// @dts-jest
memoTrackedAdd(1, 2); // => 3
// @dts-jest
numberOfCalls;        // => 1
// @dts-jest
memoTrackedAdd(2, 3); // => 5
// @dts-jest
numberOfCalls;        // => 2

// Note that argument order matters
// @dts-jest
memoTrackedAdd(2, 1); // => 3
// @dts-jest
numberOfCalls; // => 3
