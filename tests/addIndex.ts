import * as R from 'ramda';

{
  const lastTwo = (val: number, idx: number, list: number[]) =>
    list.length - idx <= 2;
  const filterIndexed = R.addIndex(R.filter);

  // @dts-jest:skip number[]
  filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
  const lastTwoFn = filterIndexed(lastTwo);
  // @dts-jest:skip number[]
  lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
}

{
  const squareEnds = (elt: number, idx: number, list: number[]) => {
    if (idx === 0 || idx === list.length - 1) {
      return elt * elt;
    }
    return elt;
  };
  // @dts-jest:skip number[]
  R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
  // @dts-jest:skip number[]
  R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
}

{
  const reduceIndexed = R.addIndex(R.reduce);
  const letters = ['a', 'b', 'c'];
  const objectify = (accObject: {[elem: string]: number}, elem: string, idx: number, list: string[]) => {
    accObject[elem] = idx;
    return accObject;
  };
  // @dts-jest:skip Dictionary<number>
  reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
  // @dts-jest:skip Dictionary<number>
  reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
  // @dts-jest:skip Dictionary<number>
  reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
}

{
  const reduceIndexed = R.addIndex(R.reduce);
  // @dts-jest:skip string[]
  reduceIndexed(
    (acc: string, val: string, idx: number) => `${acc},${idx}-${val}`,
    '',
    ['f', 'o', 'o', 'b', 'a', 'r'],
  );
  // => ['0-f,1-o,2-o,3-b,4-a,5-r']
}

{
  const plusFive = (num: number, idx: number, list: number[]) => {
    list[idx] = num + 5;
  };
  // @dts-jest:skip number[]
  R.addIndex(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
}
