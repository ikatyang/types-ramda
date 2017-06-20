import {List} from 'ramda/src/$types';
import * as R_clone from 'ramda/src/clone';

declare const number: number;
declare const string_list: List<string>;

// @dts-jest:pass
R_clone(number);
// @dts-jest:pass
R_clone(string_list);
