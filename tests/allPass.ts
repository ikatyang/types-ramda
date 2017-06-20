import {Predicate} from 'ramda/src/$types';
import * as R_allPass from 'ramda/src/allPass';

declare const string_predicate: Predicate<string>;
declare const number_preficate: Predicate<number>;

// @dts-jest:pass
R_allPass([string_predicate, string_predicate]);
// @dts-jest:pass
R_allPass<string | number>([string_predicate, number_preficate]);
