import * as R from 'ramda';

// @dts-jest:skip {a: {b: {}}}
R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}}
// optionally specify return type
// @dts-jest:skip {a: {b: {}}}
R.dissocPath<{a : { b: number}}>(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}}
// @dts-jest:skip {a: {b: {}}}
R.dissocPath(['a', 'b', 'c'])({a: {b: {c: 42}}}); // => {a: {b: {}}}
