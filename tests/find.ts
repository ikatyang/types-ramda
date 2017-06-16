import {Predicate} from 'ramda/src/$types';
import * as R_find from 'ramda/src/find';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_find(string_predicate);
// @dts-jest
R_find(string_predicate)(string_array);
// @dts-jest
R_find(string_predicate, string_array);
