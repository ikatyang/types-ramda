import {Predicate} from '../ramda/dist/src/$types';
import * as R_either from '../ramda/dist/src/either';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass -> <T$1 extends string = string>(fn2: (value: T$1) => boolean) => (value: T$1) => boolean
R_either(string_predicate);
// @dts-jest:pass -> (value: string) => boolean
R_either(string_predicate, string_predicate);
