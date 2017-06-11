import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
// the following should errror: e/f are not keys in these objects
// @dts-jest:skip not keys
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
// @dts-jest:skip not keys
R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
// @dts-jest:skip not keys
R.pick(['a', 'e', 'f'], [1, 2, 3, 4]);             // => {a: 1}
