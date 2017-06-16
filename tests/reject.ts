import {Dictionary, Filterable, Predicate} from 'ramda/src/$types';
import * as R_reject from 'ramda/src/reject';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];
declare const string_dictionary: Dictionary<string>;
declare const string_filterable: Filterable<string>;

// @dts-jest
R_reject(string_predicate, string_array);
// @dts-jest
R_reject(string_predicate)(string_array);

// @dts-jest
R_reject(string_predicate, string_dictionary);
// @dts-jest
R_reject(string_predicate)(string_dictionary);

// @dts-jest
R_reject(string_predicate, string_filterable);
// @dts-jest
R_reject(string_predicate)(string_filterable);
