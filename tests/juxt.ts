import * as R from 'ramda';

const range = R.juxt([Math.min, Math.max]);
// @dts-jest
range(3, 4, 9, -3); // => [-3, 9]

const chopped = R.juxt([R.head, R.last]);
// @dts-jest:skip string[]
chopped('longstring'); // => ['l', 'g']
