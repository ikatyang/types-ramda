import * as R_reduce from 'ramda/src/reduce';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest
R_reduce(object_number_to_object, object);
// @dts-jest
R_reduce(object_number_to_object)(object)(number_array);
// @dts-jest
R_reduce(object_number_to_object, object, number_array);
