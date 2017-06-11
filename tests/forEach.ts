import * as R from 'ramda';

{
  const printXPlusFive = (x: number) => { console.log(x + 5); };
  // @dts-jest
  R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
  // @dts-jest
  R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
  // => 6
  // => 7
  // => 8
}

{
  let printKeyConcatValue = (value: any, key: string, obj: any) => console.log(key + ':' + value);
  // @dts-jest:skip {x: 1, y: 2}
  R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2});
  // @dts-jest:skip {x: 1, y: 2}
  R.forEachObjIndexed(printKeyConcatValue)({x: 1, y: 2});
  // @dts-jest:skip [1, 2]
  R.forEachObjIndexed(printKeyConcatValue, [1, 2]);
  // @dts-jest:skip [1, 2]
  R.forEachObjIndexed(printKeyConcatValue)([1, 2]);
}
