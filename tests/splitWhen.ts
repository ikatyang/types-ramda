import {List} from 'ramda/src/$types';
import * as R_splitWhen from 'ramda/src/splitWhen';

declare const string: string;
declare const string_to_boolean: (x: string) => boolean;

declare const object_list: List<object>;
declare const object_to_boolean: (x: object) => boolean;

// @dts-jest
R_splitWhen(string_to_boolean);
// @dts-jest
R_splitWhen(string_to_boolean)(string);
// @dts-jest
R_splitWhen(string_to_boolean, string);

// @dts-jest
R_splitWhen(object_to_boolean);
// @dts-jest
R_splitWhen(object_to_boolean)(object_list);
// @dts-jest
R_splitWhen(object_to_boolean, object_list);
