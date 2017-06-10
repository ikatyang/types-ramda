import * as R from 'ramda';

{
  const plus3 = R.add(3);
  // @dts-jest
  plus3(5);
}

{
  // @dts-jest
  R.add(2, 3);       // =>  5
  // @dts-jest
  R.add(7)(10);      // => 17
}
