import * as R_scan from 'ramda/src/scan';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest
R_scan(object_number_to_object, object);
// @dts-jest
R_scan(object_number_to_object)(object)(number_array);
// @dts-jest
R_scan(object_number_to_object, object, number_array);
