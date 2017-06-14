import {Predicate} from 'ramda/src/$types';
import * as R_all from 'ramda/src/all';

declare const string_predicater: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_all(string_predicater)(string_array);
// @dts-jest
R_all(string_predicater, string_array);
