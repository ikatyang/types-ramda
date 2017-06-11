import * as R from 'ramda';

const digits = ['1', '2', '3', '4'];
const append = (a: string, b: string): [string, string] => [a + b, a + b];
// @dts-jest:skip Array<string[]|string>
R.mapAccum(append, '0', digits); // => ['01234', ['01', '012', '0123', '01234']]
// @dts-jest:skip Array<string[]|string>
R.mapAccum(append)('0', digits); // => ['01234', ['01', '012', '0123', '01234']]
// @dts-jest:skip Array<string[]|string>
R.mapAccum(append, '0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
// @dts-jest:skip Array<string[]|string>
R.mapAccum(append)('0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
