import * as R from 'ramda';

// @dts-jest
R.propIs(Number, 'x', {x: 1, y: 2});  // => true

// @dts-jest
R.propIs(Number, 'x')({x: 1, y: 2});  // => true

// @dts-jest
R.propIs(Number)('x', {x: 1, y: 2});  // => true

// @dts-jest
R.propIs(Number)('x')({x: 1, y: 2});  // => true

// @dts-jest
R.propIs(Number, 'x', {x: 'foo'});    // => false

// @dts-jest
R.propIs<'111', 'Record'>()(Number, 'x', {});            // => false
