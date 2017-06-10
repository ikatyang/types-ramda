import * as R from 'ramda';

// @dts-jest
R.head(['fi', 'fo', 'fum']); // => 'fi'
// @dts-jest
R.head([10, 'ten']); // => 10
// @dts-jest
R.head(['10', 10]); // => '10'
