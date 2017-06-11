import * as R from 'ramda';

let o1 = { a: 1, b: 2, c: 3, d: 4 };
let o2 = { a: 10, b: 20, c: 3, d: 40 };
// @dts-jest
R.eqProps('a', o1, o2); // => false
// @dts-jest
R.eqProps('c', o1, o2); // => true
// @dts-jest:skip {<T,U>(obj1: T, obj2: U): boolean}
R.eqProps('c');
// @dts-jest:skip {<U>(obj2: U): boolean}
R.eqProps('c', o1);
