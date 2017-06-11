import * as R from 'ramda';

// @dts-jest:skip [number, string][]
R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
// @dts-jest:skip [number, string][]
R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
