import * as R from 'ramda';

const headLens = R.lensIndex(0);
// @dts-jest:skip string
R.view(headLens, ['a', 'b', 'c']);            // => 'a'
// @dts-jest:skip string[]
R.set(headLens, 'x', ['a', 'b', 'c']);        // => ['x', 'b', 'c']
// @dts-jest:skip string[]
R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
