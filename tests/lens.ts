import * as R from 'ramda';

{
  interface xy {
    x: number;
    y: number;
  }
  // let xLens = R.lens(R.prop('x'), R.assoc('x'));
  // let xLens = R.lens<number, xy>(R.prop('x'), R.assoc('x'));
  let xLens = R.lens<number>(R.prop('x'))(R.assoc('x'));
  // ^ works with only 1 generic, for curried version managed to split the inferred generic from the manual generic
  // @dts-jest:skip number
  R.view(xLens, {x: 1, y: 2});            // => 1
  // @dts-jest:skip { x: number, y: number }
  R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
  // @dts-jest:skip { x: number, y: number }
  R.set(xLens)(4, {x: 1, y: 2});          // => {x: 4, y: 2}
  // @dts-jest:skip { x: number, y: number }
  R.set(xLens, 4)({x: 1, y: 2});          // => {x: 4, y: 2}
  // @dts-jest:skip { x: number, y: number }
  R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
  // @dts-jest:skip { x: number, y: number }
  R.over(xLens, R.negate)({x: 1, y: 2});  // => {x: -1, y: 2}
  // @dts-jest:skip { x: number, y: number }
  R.over(xLens)(R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
}

{
  let headLens = R.lens(
    function get(arr: number[]) { return arr[0]; },
    function set(val: number, arr: number[]) { return [val].concat(arr.slice(1)); }
  );
  headLens([10, 20, 30, 40]); // => 10
  // // @dts-jest:skip Argument of type 'mu' is not assignable to parameter of type 'number'.
  // headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]
  
  let phraseLens = R.lens(
    function get(obj: any) { return obj.phrase; },
    function set(val: string, obj: any) {
      let out = R.clone(obj);
      out.phrase = val;
      return out;
    }
  );
  let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
  let obj2 = { phrase: "What's all this, then?"};
  // @dts-jest:skip string
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  // @dts-jest:skip string
  phraseLens(obj2); // => "What's all this, then?"
  // @dts-jest:skip Dictionary<string>
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
}
