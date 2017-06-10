import * as R from 'ramda';

const fn = function(a: string, b: number, c: string) {
    return [a,b,c];
};
const gn = R.compose(R.length, fn);
// @dts-jest
gn('Hello', 4, 'world');
