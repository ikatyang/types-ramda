import * as R from 'ramda';

let x: number;
let addOneOnce = R.once(function(x: number){ return x + 1; });
// @dts-jest
addOneOnce(10); // => 11
// @dts-jest
addOneOnce(addOneOnce(50)); // => 11
