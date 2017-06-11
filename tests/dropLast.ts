import * as R from 'ramda';

// @dts-jest
R.dropLast(1, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
// @dts-jest
R.dropLast(2)(['foo', 'bar', 'baz']); // => ['foo']
// @dts-jest:skip string
R.dropLast(3, 'ramda');               // => 'ra'
// @dts-jest:skip string
R.dropLast(3)('ramda');               // => 'ra'
