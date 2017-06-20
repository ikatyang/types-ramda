import * as R_pickBy from 'ramda/src/pickBy';

declare const string_string_object_to_boolean: (x: string, k: string, o: object) => boolean;
declare const object: object;

// @dts-jest:pass
R_pickBy(string_string_object_to_boolean)(object);
// @dts-jest:pass
R_pickBy(string_string_object_to_boolean, object);

// @dts-jest:pass
R_pickBy(string_string_object_to_boolean)<Record<string, string>>(object);
// @dts-jest:pass
R_pickBy<Record<string, string>>(string_string_object_to_boolean, object);
