import {Morphism} from 'ramda/src/$types';
import * as R_adjust from 'ramda/src/adjust';

declare const string_to_string: Morphism<string, string>;
declare const string_array: string[];
declare const number: number;

// @dts-jest
R_adjust(string_to_string)(number, string_array);
// @dts-jest
R_adjust(string_to_string, number)(string_array);
// @dts-jest
R_adjust(string_to_string, number, string_array);
