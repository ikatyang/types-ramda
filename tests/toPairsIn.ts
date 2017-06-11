import * as R from 'ramda';

const f = {x: 'X', y: 'Y'};
// @dts-jest:skip [string, string][]
R.toPairsIn(f); // => [['x','X'], ['y','Y']]
// @dts-jest:skip [string, string][]
R.toPairsIn(f); // => [['x','X'], ['y','Y']]
