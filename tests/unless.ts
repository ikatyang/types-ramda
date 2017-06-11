import * as R from 'ramda';

const coerceArray = R.unless(R.isArrayLike, R.of);
// @dts-jest:skip <a>(v: a|[a]) => [a]
coerceArray;
// @dts-jest:skip number[]
coerceArray([1, 2, 3]); // => [1, 2, 3]
// @dts-jest:skip number[]
coerceArray(1);         // => [1]
