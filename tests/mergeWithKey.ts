import * as R_mergeWithKey from '../ramda/dist/src/mergeWithKey';

declare const string_string_string_to_number: (key: string, a: string, b: string) => number;
declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass
R_mergeWithKey(string_string_string_to_number, a_1);

// @dts-jest:pass
R_mergeWithKey(string_string_string_to_number, a_1)(b_2);
// @dts-jest:pass
R_mergeWithKey(string_string_string_to_number, a_1, b_2);

// @dts-jest:pass
R_mergeWithKey(string_string_string_to_number, a_1)<{a: 1, b: 2}>(b_2);
// @dts-jest:pass
R_mergeWithKey<any, {a: 1, b: 2}>(string_string_string_to_number, a_1, b_2);
