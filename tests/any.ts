import {Predicate} from 'ramda/src/$types';
import * as R_any from 'ramda/src/any';

declare const string_predicater: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_any(string_predicater)(string_array);
// @dts-jest
R_any(string_predicater, string_array);
