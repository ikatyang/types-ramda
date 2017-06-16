import {NestedList} from 'ramda/src/$types';
import * as R_flatten from 'ramda/src/flatten';

declare const string_array: string[];
declare const nested_object_list: NestedList<object>;

// @dts-jest
R_flatten(string_array);
// @dts-jest
R_flatten(nested_object_list);
