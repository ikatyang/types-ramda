import {List} from 'ramda/src/$types';
import * as R_splitAt from 'ramda/src/splitAt';

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest
R_splitAt(number)(string);
// @dts-jest
R_splitAt(number, string);

// @dts-jest
R_splitAt(number)(object_list);
// @dts-jest
R_splitAt(number, object_list);
