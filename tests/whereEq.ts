import * as R from 'ramda';

const pred = R.whereEq({a: 1, b: 2});
// @dts-jest:skip (v: Object) => Boolean
pred;
// @dts-jest:skip boolean
pred({a: 1});              // => false
// @dts-jest
pred({a: 1, b: 2});        // => true
// @dts-jest:skip boolean
pred({a: 1, b: 2, c: 3});  // => true
// @dts-jest
pred({a: 1, b: 1});        // => false
// @dts-jest
R.whereEq({a: 'one'}, {a: 'one'}); // => true
