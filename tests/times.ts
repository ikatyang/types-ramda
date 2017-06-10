import * as R from 'ramda';

{
  let i = function(x: number) {return x;};
  // @dts-jest
  R.times(i, 5);
}

{
  // @dts-jest
  R.times(R.identity, 5); // => [0, 1, 2, 3, 4]
  // @dts-jest
  R.times(R.identity)(5); // => [0, 1, 2, 3, 4]
}
