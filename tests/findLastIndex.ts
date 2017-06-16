import {Predicate} from 'ramda/src/$types';
import * as R_findLastIndex from 'ramda/src/findLastIndex';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_findLastIndex(string_predicate);
// @dts-jest
R_findLastIndex(string_predicate)(string_array);
// @dts-jest
R_findLastIndex(string_predicate, string_array);
