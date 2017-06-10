import * as R from 'ramda';

// @dts-jest
R.pipeP(
    (m: number) => Promise.resolve(R.multiply(2, m)),
    (m: number) => Promise.resolve(m / 2),
    R.multiply(2)
)(10);
