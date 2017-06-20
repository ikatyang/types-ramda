import {Predicate} from 'ramda/src/$types';
import * as R_either from 'ramda/src/either';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass
R_either(string_predicate);
// @dts-jest:pass
R_either(string_predicate, string_predicate);
