import * as R from 'ramda';

// lose generics in compose
let pairs = [['1','A'], ['2','B'], ['3','C']];
// @dts-jest:skip { [index: string]: string }
R.fromPairs ([['1','A'], ['2','B'], ['3','C']]);
// @dts-jest:skip { [index: string]: string }
R.fromPairs (pairs);   // fails -- variable reduced to string[][], killing tuples
// @dts-jest:skip { [index: string]: string }
R.pipe   (R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);
// @dts-jest:skip { [index: string]: string }
R.compose(R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);

// generics in pipe loses generics
R.pipe(R.identity);
