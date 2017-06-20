import {Predicate} from 'ramda/src/$types';
import * as R_both from 'ramda/src/both';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass
R_both(string_predicate);
// @dts-jest:pass
R_both(string_predicate, string_predicate);
