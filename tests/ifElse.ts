import * as R from 'ramda';

// Flatten all arrays in the list but leave other values alone.
const flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

// @dts-jest:skip any[]
flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
// @dts-jest:skip any[]
flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], 'hello']
