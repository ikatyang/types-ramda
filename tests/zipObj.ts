import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
// @dts-jest:skip Dictionary<number>
R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
