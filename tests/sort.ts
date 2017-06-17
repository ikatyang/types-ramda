import {List} from 'ramda/src/$types';
import * as R_sort from 'ramda/src/sort';

declare const string: string;
declare const string_string_to_number: (x: string, y: string) => number;

declare const object_list: List<object>;
declare const object_object_to_number: (x: object, y: object) => number;

// @dts-jest
R_sort(string_string_to_number);
// @dts-jest
R_sort(string_string_to_number)(string);
// @dts-jest
R_sort(string_string_to_number, string);

// @dts-jest
R_sort(object_object_to_number);
// @dts-jest
R_sort(object_object_to_number)(object_list);
// @dts-jest
R_sort(object_object_to_number, object_list);
