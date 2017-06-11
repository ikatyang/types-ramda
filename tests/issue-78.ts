import * as R from 'ramda';

// curry loses generics
// : <T>R.CurriedFunction3<R.Pred<T>, T, T[], T[]>
// : R.CurriedFunction3<R.Pred<any>, any, any[], any[]>
const updateBy = R.curry(<T>(pred: (v: T) => boolean, val: T, array: T[]): T[] => {
  const i = R.findIndex(pred, array);
  if (i >= 0) {
    return R.update(i, val, array);
  } else {
    return array;
  }
});
// @dts-jest:skip number[]
updateBy((n: number) => n > 1, 0, [1, 2, 3]);
