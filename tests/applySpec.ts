import * as R from 'ramda';

type T = {sum: number, nested: {mul: number}};
const getMetrics = R.applySpec<T>({
    sum: R.add, nested: { mul: R.multiply }
});
// @dts-jest:skip T
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
