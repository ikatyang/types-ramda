import * as R_dissoc from 'ramda/src/dissoc';

declare const string_property: string;
declare const object: object;

// @dts-jest:pass
R_dissoc(string_property, object);
// @dts-jest:pass
R_dissoc(string_property)(object);

// @dts-jest:pass
R_dissoc<string>(string_property, object);
// @dts-jest:pass
R_dissoc(string_property)<string>(object);
