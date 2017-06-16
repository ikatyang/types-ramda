import {Predicate} from 'ramda/src/$types';
import * as R_findLast from 'ramda/src/findLast';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_findLast(string_predicate);
// @dts-jest
R_findLast(string_predicate)(string_array);
// @dts-jest
R_findLast(string_predicate, string_array);
