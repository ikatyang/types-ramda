import * as R from 'ramda';

// lose generics in compose

// can't infer cond paths, must annotate:
const x = R.cond([
    [R.F, R.F],
    [R.T, R.identity]
]);
// @dts-jest:skip <T>(v: T) => T
x;
// argument order matters for some reason...
// @dts-jest:skip (v: number) => number
R.pipe   (R.inc, x); // ok
// @dts-jest:skip (v: number) => number
R.compose(x, R.inc); // boom

// don't use generics in pipe/compose/curry if it can't resolve them right away:
let pipeF0 = R.pipe   (R.identity);         // : (v: {}) => {}
let compF0 = R.compose(R.identity);         // : (v: {}) => {}

// argument order matters too:
let pipeF1 = R.pipe   (R.inc, R.identity);  // : (v: number) => number
let compF1 = R.compose(R.identity, R.inc);  // : (v: number) => {}
// @dts-jest:skip number
compF1(1);          // uh-oh, fails

// also can't reason backward:
let compF2 = R.compose(R.inc, R.identity);  // : (v: {}) => number
// @dts-jest
compF2('foo');      // uh-oh, passes
let pipeF2 = R.pipe   (R.identity, R.inc);  // : (v: {}) => number
// @dts-jest
pipeF2('foo');      // uh-oh, passes
