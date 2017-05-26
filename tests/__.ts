import * as R from 'ramda';

// @dts-jest
R.replace('{name}', R.__, 'Hello, {name}!');

// @dts-jest
R.replace(R.__, R.__, 'Hello, {name}!');

// @dts-jest
R.replace(R.__, 'Alice', 'Hello, {name}!');

// @dts-jest
R.replace(R.__, R.__, 'Hello, {name}!')(R.__, 'Alice');
