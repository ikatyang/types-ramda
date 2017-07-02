import * as R_scan from '../ramda/dist/src/scan';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest:pass -> <T$1 extends number = number>(values: T$1[] | ArrayLike<T$1>) => object[]
R_scan(object_number_to_object, object);
// @dts-jest:pass -> object[]
R_scan(object_number_to_object)(object)(number_array);
// @dts-jest:pass -> object[]
R_scan(object_number_to_object, object, number_array);
