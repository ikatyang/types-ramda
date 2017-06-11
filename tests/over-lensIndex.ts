import * as R from 'ramda';

let headLens = R.lensIndex(0);
// @dts-jest:skip string[]
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz']
