import {Predicate} from 'ramda/src/$types';
import * as R_all from 'ramda/src/all';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_all(string_predicate)(string_array);
// @dts-jest
R_all(string_predicate, string_array);
