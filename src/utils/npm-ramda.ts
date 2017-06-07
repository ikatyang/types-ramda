import * as R from 'ramda';

// https://github.com/types/npm-ramda/blob/master/scripts.js

// tslint:disable:max-line-length

const nm = (cnt: number, fn: (v: number) => string) => R.range(0, cnt).map(fn).join(', ');

export function composeDef(i: number, j: number) {
  const vals = nm(j, n => `V${n}`);
  const pars = nm(j, n => `x${n}: V${n}`);
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => T${i - n}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function compose<${vals}, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (${pars}) => T1): (${pars}) => T${i};`;
}

export function composeKDef(i: number) {
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => Chain<T${i - n}>`);
  const types = nm(i, n => `T${n + 1}`);
  return `function composeK<V, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T${i}>;`;
}

export function composePDef(i: number, j: number) {
  const vals = nm(j, n => `V${n}`);
  const pars = nm(j, n => `x${n}: V${n}`);
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => Promise<T${i - n}>|T${i - n}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function composeP<${vals}, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (${pars}) => Promise<T1>): (${pars}) => Promise<T${i}>;`;
}

const alphabets = 26;
const letters = (idx: number) => (n: number) => R.range(idx, idx + R.clamp(0, alphabets, n)).map(i => String.fromCharCode(i));
const lower = letters('a'.charCodeAt(0));
export function curryDef(i: number) {
  const lows = lower(i);
  const pars = nm(i, n => `${lows[n]}: T${n + 1}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function curry<${types}, TResult>(fn: (${pars}) => TResult): CurriedFunction${i}<${types}, TResult>;`;
}

export function liftDef(i: number) {
  const pars = nm(i, n => `v${n + 1}: T${n + 1}`);
  const listPars = nm(i, n => `v${n + 1}: List<T${n + 1}>`);
  const types = nm(i, n => `T${n + 1}`);
  return `function lift<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`;
}

export function liftNDef(i: number, together = true) {
  const pars = nm(i, n => `v${n + 1}: T${n + 1}`);
  const listPars = nm(i, n => `v${n + 1}: List<T${n + 1}>`);
  const types = nm(i, n => `T${n + 1}`);
  return together
    ? `function liftN<${types}, TResult>(n: number, fn: (${pars}) => TResult): (${listPars}) => TResult[];`
    : `function liftN(n: number): <${types}, TResult>(fn: (${pars}) => TResult) => (${listPars}) => TResult[];`;
}

export function pathDef(i: number) {
  const obj = R.range(1, i + 1).reduce((str, n) => `{[K${i - n + 1} in T${i - n + 1}]: ${str}}`, 'TResult');
  const types = nm(i, n => `T${n + 1}`);
  const typesStr = nm(i, n => `T${n + 1} extends string`);
  return `function path<${typesStr}, TResult>(path: [${types}], obj: ${obj}): TResult;`;
}

export function pipeDef(i: number, j: number) {
  const vals = nm(j, n => `V${n}`);
  const pars = nm(j, n => `x${n}: V${n}`);
  const fns = nm(i - 1, n => `fn${n + 1}: (x: T${n + 1}) => T${n + 2}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function pipe<${vals}, ${types}>(fn0: (${pars}) => T1${i > 1 ? ', ' : ''}${fns}): (${pars}) => T${i};`;
}

export function pipeKDef(i: number) {
  const fns = nm(i - 1, n => `fn${n + 1}: (x: T${n + 1}) => Chain<T${n + 2}>`);
  const types = nm(i, n => `T${n + 1}`);
  return `function pipeK<V, ${types}>(fn0: (v: Chain<V>) => Chain<T1>${i > 1 ? ', ' : ''}${fns}): (v: V) => Chain<T${i}>;`;
}
