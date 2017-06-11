import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
// @dts-jest:skip Dictionary<number>
R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
