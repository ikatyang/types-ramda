import * as R from 'ramda';

// @dts-jest:skip {a: {b: {c: number}}}
R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
// @dts-jest:skip {a: {b: {c: number}}}
R.assocPath(['a', 'b', 'c'])(42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
// @dts-jest:skip {a: {b: {c: number}}}
R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
