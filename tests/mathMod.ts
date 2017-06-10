import * as R from 'ramda';

// @dts-jest
R.mathMod(-17, 5);  // => 3
// @dts-jest
R.mathMod(17, 5);   // => 2
// @dts-jest
R.mathMod(17, -5);  // => NaN
// @dts-jest
R.mathMod(17, 0);   // => NaN
// @dts-jest
R.mathMod(17.2, 5); // => NaN
// @dts-jest
R.mathMod(17, 5.3); // => NaN

let clock = R.flip(R.mathMod)(12);
// @dts-jest
clock(15); // => 3
// @dts-jest
clock(24); // => 0

let seventeenMod = R.mathMod(17);
// @dts-jest
seventeenMod(3);  // => 2
