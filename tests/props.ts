import * as R from 'ramda';

// @dts-jest
R.props(['x', 'y'], {x: 1, y: 2}); // => [1, 2]
// @dts-jest:skip Array<number|undefined>
R.props(['c', 'a', 'b'], {b: 2, a: 1}); // => [undefined, 1, 2]

const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
// @dts-jest
fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); // => 'Tony Bullet-Tooth'
