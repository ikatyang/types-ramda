import {List} from 'ramda/src/$types';
import * as R_sortBy from 'ramda/src/sortBy';

declare const string: string;
declare const string_to_number: (x: string) => number;

declare const object_list: List<object>;
declare const object_to_number: (x: object) => number;

// @dts-jest:pass
R_sortBy(string_to_number);
// @dts-jest:pass
R_sortBy(string_to_number)(string);
// @dts-jest:pass
R_sortBy(string_to_number, string);

// @dts-jest:pass
R_sortBy(object_to_number);
// @dts-jest:pass
R_sortBy(object_to_number)(object_list);
// @dts-jest:pass
R_sortBy(object_to_number, object_list);
