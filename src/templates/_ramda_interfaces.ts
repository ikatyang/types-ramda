import * as dts from 'dts-element';

export default dts.parse(`

interface Type<T> extends Function {
  new (...args: any[]): T;
}

interface Variadic<T> {
  (...args: any[]): T;
}

interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }

interface Transformer<T, Acc, Res> {
  step: (acc: Acc, v: T) => Acc;
  init: () => Acc;
  result: (acc: Acc) => Res; // = R.identity
}

interface NumericDictionary<T> {
  [index: number]: T;
}

interface StringRepresentable<T> {
  toString(): T;
}

interface NestedObj<T> {
  [index: string]: T|NestedObj<T>;
}

// interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
// interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
interface NestedArray <T> {
  [index: number]: T | NestedArray<T>;
  length: number;
}

// an unfortunate compromise -- while the actual lens should be generic, for the purpose of TS the structure should be supplied beforehand
// interface KeyLens<T extends Struct<any>, K extends keyof T> {
//   // <T extends Struct<any>>
//   (obj: T): T[K]; // get
//   set(v: T[K], obj: T): T;
//   // map(fn: (v: T[K]) => T[K], obj: T): T
// }

interface Lens<T,U> {
  (obj: T): U; // get
  set(v: U, obj: T): T;
  // map(fn: (v: U) => U, obj: T): T
}

interface ManualLens<U> {
  <T extends Struct<any>>(obj: T): U; // get
  set<T extends Struct<any>>(v: U, obj: T): T;
  // <T extends Struct<any>>map(fn: (v: U) => U, obj: T): T
}

interface UnknownLens {
  <T,U>(obj: T): U; // get
  set<T,U>(v: U, obj: T): T;
  // map<T,U>(fn: (v: U) => U, obj: T): T
}

interface Reduced {}

`).members;
