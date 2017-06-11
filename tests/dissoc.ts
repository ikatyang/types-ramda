import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.dissoc<{a: number, c: number}>('b', {a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
// @dts-jest:skip Dictionary<number>
R.dissoc('b', {a: 1, b: 2, c: 3});                         // => {a: 1, c: 3}
// @dts-jest:skip Dictionary<number>
R.dissoc('b')<{a: number, c: number}>({a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
