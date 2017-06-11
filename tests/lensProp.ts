import * as R from 'ramda';

{
  let xLens = R.lensProp('x');
  // @dts-jest:skip number
  R.view(xLens, {x: 1, y: 2});            // => 1
  // @dts-jest:skip Dictionary<number>
  R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
  // @dts-jest:skip Dictionary<number>
  R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
}

{
  let phraseLens = R.lensProp('phrase');
  let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
  let obj2 = { phrase: "What's all this, then?"};
  // @dts-jest:skip string
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  // @dts-jest:skip string
  phraseLens(obj2); // => 'What's all this, then?'
  // @dts-jest:skip Dictionary<string>
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
}
