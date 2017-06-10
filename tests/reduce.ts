import * as R from 'ramda';

{
  let numbers = [1, 2, 3];
  let add = function(a: number, b: number) {
      return a + b;
  };
  // @dts-jest
  R.reduce(add, 10, numbers); // => 16;
}

{
  let numbers = [1, 2, 3];
  let add = function(a: number, b: number) {
      return a + b;
  };
  // @dts-jest
  R.reduce(add, 10, numbers); // => 16
  // @dts-jest
  R.reduce(add)(10, numbers); // => 16
  // @dts-jest
  R.reduce(add, 10)(numbers); // => 16
}
