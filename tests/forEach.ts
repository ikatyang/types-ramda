import * as R from 'ramda';

let printXPlusFive = function(x: number) { console.log(x + 5); };
// @dts-jest
R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
// @dts-jest
R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
// => 6
// => 7
// => 8
