import * as R from 'ramda';

{
  // @dts-jest
  R.length([1, 2, 3]); // => 3
}

{
  // @dts-jest
  R.length([]); // => 0
  // @dts-jest
  R.length([1, 2, 3]); // => 3
}
