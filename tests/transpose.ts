import {List} from 'ramda/src/$types';
import * as R_transpose from 'ramda/src/transpose';

declare const number_array_array: number[][];
declare const number_list_list: List<List<number>>;
declare const boolean_array_array: boolean[][];

// @dts-jest
R_transpose(number_list_list);
// @dts-jest
R_transpose(number_array_array);
// @dts-jest
R_transpose(boolean_array_array);
