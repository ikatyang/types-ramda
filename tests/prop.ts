import * as R from 'ramda';

// @dts-jest
R.prop('x', {x: 100}); // => 100
// @dts-jest:skip Argument of type 'x' is not assignable to parameter of type 'never'.
R.prop('x', {}); // => undefined
