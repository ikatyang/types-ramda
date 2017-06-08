import * as R from 'ramda';

// @dts-jest
R.type({}); // => 'Object'

// @dts-jest
R.type(1); // => 'Number'

// @dts-jest
R.type(false); // => 'Boolean'

// @dts-jest
R.type('s'); // => 'String'

// @dts-jest
R.type(null); // => 'Null'

// @dts-jest
R.type([]); // => 'Array'

// @dts-jest
R.type(/[A-z]/); // => 'RegExp'
