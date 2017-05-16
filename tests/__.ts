import * as R from 'ramda';

// @dts-jest
R.replace('{name}', R.__, 'Hello, {name}!');

// @dts-jest
R.replace(R.__, 'David', 'Hello, {name}!');

// @dts-jest
R.replace('{name}', R.__, 'Hello, {name}!');

// @dts-jest
R.replace(R.__, R.__, 'Hello, {name}!');
