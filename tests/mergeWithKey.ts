import * as R from 'ramda';

let concatValues = (k: string, l: string, r: string) => k === 'values' ? R.concat(l, r) : r;
R.mergeWithKey(concatValues,
    { a: true, thing: 'foo', values: [10, 20] },
    { b: true, thing: 'bar', values: [15, 35] });
const merge = R.mergeWithKey(concatValues);
// @dts-jest:skip { a: boolean, b: boolean, values: number[], thing: string }
merge({ a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
