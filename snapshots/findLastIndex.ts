import {Predicate} from '../ramda/dist/src/$types';
import * as R_findLastIndex from '../ramda/dist/src/findLastIndex';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => number
R_findLastIndex(string_predicate);
// @dts-jest:pass -> number
R_findLastIndex(string_predicate)(string_array);
// @dts-jest:pass -> number
R_findLastIndex(string_predicate, string_array);
