import * as R from 'ramda';

{
  const printXPlusFive = (x: number) => {
    console.log(x + 5);
  };
  R.forEach(printXPlusFive, [1, 2, 3]);
  // @dts-jest:skip Object[]
  R.clone([{}, {}, {}]);
  // @dts-jest
  R.clone([1, 2, 3]);
}

{
  const obj1 = [{}, {}, {}];
  const obj2 = [{a: 1}, {a: 2}, {a: 3}];
  // @dts-jest:skip any[]
  R.clone(obj1);
  // @dts-jest:skip {a: number}[]
  R.clone(obj2);
  // @dts-jest:skip Object
  R.clone({});
  // @dts-jest
  R.clone(10);
  // @dts-jest
  R.clone('foo');
  // @dts-jest
  R.clone(Date.now());
}
