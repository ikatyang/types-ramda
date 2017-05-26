import * as R from 'ramda';

const equals3 = R.equals(3);

// @dts-jest
R.all(equals3)([3, 3, 3, 3]); // => true

// @dts-jest
R.all(equals3)([3, 3, 1, 3]); // => false
