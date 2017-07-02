import {Predicate} from '../ramda/dist/src/$types';
import * as R_find from '../ramda/dist/src/find';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => T$1 | undefined
R_find(string_predicate);
// @dts-jest:pass -> string | undefined
R_find(string_predicate)(string_array);
// @dts-jest:pass -> string | undefined
R_find(string_predicate, string_array);
