import * as R from 'ramda';

let list = ['foo', 'bar', 'baz', 'quux'];
// @dts-jest:skip string
R.nth(1, list); // => 'bar'
// @dts-jest:skip string
R.nth(-1, list); // => 'quux'
// @dts-jest
R.nth(-99, list); // => undefined
// @dts-jest
R.nth(-99)(list); // => undefined
