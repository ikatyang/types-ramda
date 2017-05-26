import * as R from 'ramda';

// @dts-jest
R.addIndex(R.map);

// @dts-jest
R.addIndex<'1', 'array'>()(R.map);

// @dts-jest
R.addIndex<'1', 'object'>()(R.map);
