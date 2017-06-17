import {List} from 'ramda/src/$types';
import * as R_splitEvery from 'ramda/src/splitEvery';

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest
R_splitEvery(number)(string);
// @dts-jest
R_splitEvery(number, string);

// @dts-jest
R_splitEvery(number)(object_list);
// @dts-jest
R_splitEvery(number, object_list);
