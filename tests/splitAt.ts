import * as R from 'ramda';

// @dts-jest
R.splitAt(1, [1, 2, 3]);        // => [[1], [2, 3]]
// @dts-jest
R.splitAt(1)([1, 2, 3]);        // => [[1], [2, 3]]
// @dts-jest
R.splitAt(5, 'hello world');    // => ['hello', ' world']
// @dts-jest
R.splitAt(-1, 'foobar');        // => ['fooba', 'r']
