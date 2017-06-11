import * as R from 'ramda';

let f = {x: 'X', y: 'Y'};
// @dts-jest:skip [string, string][]
R.toPairsIn(f); // => [['x','X'], ['y','Y']]
// @dts-jest:skip [string, string][]
R.toPairsIn(f); // => [['x','X'], ['y','Y']]
