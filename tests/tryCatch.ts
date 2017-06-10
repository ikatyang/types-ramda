import * as R from 'ramda';

// @dts-jest
R.tryCatch<boolean>(R.prop('x'), R.F)({x: true}); // => true

// @dts-jest
R.tryCatch<boolean>(R.prop('x'), R.F)(null);      // => false
