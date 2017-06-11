import * as R from 'ramda';

let f = {x: 'X', y: 'Y'};
// @dts-jest:skip string[]
R.valuesIn(f); // => ['X', 'Y']
