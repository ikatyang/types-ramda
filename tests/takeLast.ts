import * as R from 'ramda';

// @dts-jest
R.takeLast(1, ['foo', 'bar', 'baz']); // => ['baz']
// @dts-jest
R.takeLast(2)(['foo', 'bar', 'baz']); // => ['bar', 'baz']
// @dts-jest:skip string
R.takeLast(3, 'ramda');               // => 'mda'
// @dts-jest:skip string
R.takeLast(3)('ramda');               // => 'mda'
