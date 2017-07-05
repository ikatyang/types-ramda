import * as R from 'ramda';
import {match} from './match';

/**
 * (object: any, target: any) => boolean
 *
 * Returns `true` if `object` contains something matches `target` recursively, `false` otherwise.
 */
export const has = R.curry(_has)(R.__, R.__, []);

function _has(object: any, target: any, path: any[]): boolean {
  return R.cond([
    [/* is cyclic */ R.contains(R.__, path), R.F],
    [match(target), R.T],
    [R.isNil, R.F],
    [R.T, R.pipe(R.keys, R.any<string>(key => _has(object[key], target, R.append(object, path))))],
  ])(object);
}