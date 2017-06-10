import * as R from 'ramda';

{
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) => a + b;
  // @dts-jest
  R.reduce(add, 10, numbers); // => 16;
}

{
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) => a + b;
  // @dts-jest
  R.reduce(add, 10, numbers); // => 16
  // @dts-jest
  R.reduce(add)(10, numbers); // => 16
  // @dts-jest
  R.reduce(add, 10)(numbers); // => 16
}
