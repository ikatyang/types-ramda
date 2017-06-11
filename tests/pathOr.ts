import * as R from 'ramda';

// @dts-jest:skip number
R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); // => 2
// @dts-jest:skip number
R.pathOr('N/A', ['a', 'b'])({a: {b: 2}}); // => 2
// @dts-jest:skip number
R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); // => 'N/A'
// @dts-jest:skip number
R.pathOr({c: 2})(['a', 'b'], {c: {b: 2}}); // => 'N/A'
