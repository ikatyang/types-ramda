import * as R_pickBy from 'ramda/src/pickBy';

declare const string_string_object_to_boolean: (x: string, k: string, o: object) => boolean;
declare const object: object;
declare const string: string;

// @dts-jest
R_pickBy(string_string_object_to_boolean)(object);
// @dts-jest
R_pickBy(string_string_object_to_boolean, object);

// @dts-jest
R_pickBy(string_string_object_to_boolean)<Record<string, string>>(object);
// @dts-jest
R_pickBy<Record<string, string>>(string_string_object_to_boolean, object);
