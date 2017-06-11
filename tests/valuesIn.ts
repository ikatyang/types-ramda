import * as R from 'ramda';

const f = {x: 'X', y: 'Y'};
// @dts-jest:skip string[]
R.valuesIn(f); // => ['X', 'Y']
