import {Morphism} from 'ramda/src/$types';
import * as R_adjust from 'ramda/src/adjust';

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const number: number;

// @dts-jest
R_adjust(string_to_number)(number, string_array);
// @dts-jest
R_adjust(string_to_number, number)(string_array);
// @dts-jest
R_adjust(string_to_number, number, string_array);
