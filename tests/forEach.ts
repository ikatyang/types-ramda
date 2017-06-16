import {List, Tap} from 'ramda/src/$types';
import * as R_forEach from 'ramda/src/forEach';

declare const number_list: List<number>;
declare const number_tap: Tap<number>;

// @dts-jest
R_forEach(number_tap);
// @dts-jest
R_forEach(number_tap)(number_list);
// @dts-jest
R_forEach(number_tap, number_list);
