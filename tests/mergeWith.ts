import * as R from 'ramda';

// @dts-jest:skip { a: boolean, b: boolean, values: number[] }
R.mergeWith(R.concat,
    { a: true, values: [10, 20] },
    { b: true, values: [15, 35] });
    // => { a: true, b: true, values: [10, 20, 15, 35] }
