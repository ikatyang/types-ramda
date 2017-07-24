import { Predicate } from '../ramda/dist/src/$types';
import * as R_allPass from '../ramda/dist/src/allPass';

declare const string_predicate: Predicate<string>;
declare const number_preficate: Predicate<number>;

// @dts-jest:pass -> (value: string) => boolean
R_allPass([string_predicate, string_predicate]);
// @dts-jest:pass -> (value: string | number) => boolean
R_allPass<string | number>([string_predicate, number_preficate]);
