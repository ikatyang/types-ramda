import {Predicate} from 'ramda/src/$types';
import * as R_findIndex from 'ramda/src/findIndex';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass
R_findIndex(string_predicate);
// @dts-jest:pass
R_findIndex(string_predicate)(string_array);
// @dts-jest:pass
R_findIndex(string_predicate, string_array);
