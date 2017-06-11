import * as R from 'ramda';

// path

// @dts-jest
R.path(['a', 'b', 'c'], {a: {b: {c: 2}}});
// @dts-jest:skip null
R.path(['a', 'b', 'c'], {a: {b: 2}});   // still fails
// let n = R.path(['a', '0', 'c'], {a: [{c: 2}] })
// @dts-jest:skip number
R.path(['a', 0, 'c'], {a: [{c: 2}]});
