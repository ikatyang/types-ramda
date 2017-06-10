import * as R from 'ramda';

// @dts-jest
R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
// @dts-jest
R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
// @dts-jest
R.aperture(7, [1, 2, 3, 4, 5]); // => []
// @dts-jest
R.aperture(7)([1, 2, 3, 4, 5]); // => []
