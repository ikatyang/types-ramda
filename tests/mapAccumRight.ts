import * as R from 'ramda';

let digits = ['1', '2', '3', '4'];
let append = function(a: string, b: string): [string, string] {
    return [a + b, a + b];
};
// @dts-jest:skip Array<string|string[]>
R.mapAccumRight(append, '0', digits); // => ['04321', ['04321', '0432', '043', '04']]
// @dts-jest:skip Array<string|string[]>
R.mapAccumRight(append)('0', digits); // => ['04321', ['04321', '0432', '043', '04']]
// @dts-jest:skip Array<string|string[]>
R.mapAccumRight(append, '0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
// @dts-jest:skip Array<string|string[]>
R.mapAccumRight(append)('0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
