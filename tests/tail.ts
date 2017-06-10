import * as R from 'ramda';

// @dts-jest
R.tail(['fi', 'fo', 'fum']); // => ['fo', 'fum']
// @dts-jest
R.tail([1, 2, 3]); // => [2, 3]
