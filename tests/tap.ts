import * as R from 'ramda';

const sayX = (x: number) => console.log('x is ' + x);
// @dts-jest
R.tap(sayX, 100); // => 100
