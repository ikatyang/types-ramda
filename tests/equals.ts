import * as R from 'ramda';

// @dts-jest
R.equals(1, 1);     // => true
// @dts-jest
R.equals('2', '1'); // => false
// @dts-jest
R.equals([1, 2, 3], [1, 2, 3]); // => true

let a: any = {}; a.v = a;
let b: any = {}; b.v = b;
// @dts-jest
R.equals(a, b); // => true
