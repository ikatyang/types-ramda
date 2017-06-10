import * as R from 'ramda';

const fn = (a: string, b: number, c: string) => [a, b, c];
const gn = R.compose(R.length, fn);
// @dts-jest
gn('Hello', 4, 'world');
