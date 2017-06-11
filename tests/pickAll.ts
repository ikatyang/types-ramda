import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
// @dts-jest:skip Dictionary<number>
R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
// @dts-jest:skip Dictionary<number>
R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
// @dts-jest:skip Dictionary<number>
R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}    // why does this pass while the above fails?
