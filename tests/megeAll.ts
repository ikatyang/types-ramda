import * as R from 'ramda';

// @dts-jest:skip Dictionary<number>
R.mergeAll([{foo: 1},{bar: 2},{baz: 3}]); // => {foo: 1,bar: 2,baz: 3}
// @dts-jest:skip Dictionary<number>
R.mergeAll([{foo: 1},{foo: 2},{bar: 2}]); // => {foo: 2,bar: 2}
