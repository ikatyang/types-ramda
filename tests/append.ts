import * as R from 'ramda';

// @dts-jest
R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
// @dts-jest
R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
// @dts-jest
R.append('tests', []); // => ['tests']
// @dts-jest:skip Array<string[]|string>
R.append<string, string[]>(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]
// @dts-jest:skip Array<string[]|string>
R.append(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]
// @dts-jest:skip Array<string[]|string>
R.append<string[]>(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]
// @dts-jest:skip Array<string[]|string>
R.append(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]
