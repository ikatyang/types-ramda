import * as R from 'ramda';

const hasName = R.has('name');
// @dts-jest
hasName({name: 'alice'});   // => true
// @dts-jest
hasName({name: 'bob'});     // => true
// @dts-jest
hasName({});                // => false

const point = {x: 0, y: 0};
const pointHas = R.flip(R.has)(point);
// @dts-jest
pointHas('x');  // => true
// @dts-jest
pointHas('y');  // => true
// @dts-jest
pointHas('z');  // => false
