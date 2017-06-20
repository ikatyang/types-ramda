import {Predicate} from 'ramda/src/$types';
import * as R_anyPass from 'ramda/src/anyPass';

declare const string_predicate: Predicate<string>;
declare const number_preficate: Predicate<number>;

// @dts-jest:pass
R_anyPass([string_predicate, string_predicate]);
// @dts-jest:pass
R_anyPass<string | number>([string_predicate, number_preficate]);
