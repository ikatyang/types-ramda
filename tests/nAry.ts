import {Variadic} from 'ramda/src/$types';
import * as R_nAry from 'ramda/src/nAry';

declare const number: number;
declare const string_number_symbol_to_boolean: (a: string, b: number, c: symbol) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest
R_nAry(1, string_number_symbol_to_boolean);
// @dts-jest
R_nAry(1, object_variadic);

// @dts-jest
R_nAry(number, string_number_symbol_to_boolean);
// @dts-jest
R_nAry(number, object_variadic);
