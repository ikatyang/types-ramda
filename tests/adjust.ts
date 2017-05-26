import * as R from 'ramda';

// @dts-jest
R.adjust(R.add(10), 1, [1, 2, 3]);     // => [1, 12, 3]

// @dts-jest
R.adjust(R.add(10))(1)([1, 2, 3]);     // => [1, 12, 3]
