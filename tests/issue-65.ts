import * as R from 'ramda';

// #65, evolve issue
const a1 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 });
const a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({ name: 'Tomato', elapsed: 100, remaining: 1400 });
let test = { a: 1, b: 2};
// @dts-jest:skip { a: number, b: number }
R.evolve({ a: R.add(1)}, test );
