import {List} from 'ramda/src/$types';
import * as R_reverse from 'ramda/src/reverse';

declare const string: string;
declare const number_list: List<number>;

// @dts-jest:pass
R_reverse(string);
// @dts-jest:pass
R_reverse(number_list);
