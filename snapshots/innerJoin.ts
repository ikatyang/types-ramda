import * as R_innerJoin from '../ramda/dist/src/innerJoin';

declare const object_number_to_boolean: (x: object, y: number) => boolean;
declare const object_array: object[];
declare const number_array: number[];

// @dts-jest:pass -> <U$1 extends number = number>(ys: U$1[] | ArrayLike<U$1>) => object[]
R_innerJoin(object_number_to_boolean, object_array);
// @dts-jest:pass -> object[]
R_innerJoin(object_number_to_boolean, object_array, number_array);
// @dts-jest:pass -> object[]
R_innerJoin(object_number_to_boolean)(object_array)(number_array);
