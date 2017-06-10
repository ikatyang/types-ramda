import * as R from 'ramda';

// @dts-jest
R.subtract(10, 8); // => 2

let minus5 = R.flip(R.subtract)(5);
// @dts-jest
minus5(17); // => 12

let complementaryAngle = R.subtract(90);
// @dts-jest
complementaryAngle(30); // => 60
// @dts-jest
complementaryAngle(72); // => 18
