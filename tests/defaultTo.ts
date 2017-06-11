import * as R from 'ramda';

let defaultTo42 = R.defaultTo(42);
// @dts-jest:skip number
defaultTo42(null);  // => 42
// @dts-jest:skip number
defaultTo42(undefined);  // => 42
// @dts-jest:skip string
defaultTo42('Ramda');  // => 'Ramda'
