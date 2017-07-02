import * as R_converge from '../ramda/dist/src/converge';

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (x: string, y: number, z: boolean) => object;
declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_string: (x: string) => string;

// @dts-jest:pass -> <T1, U1$1 extends string = string, U2$1 extends number = number, U3$1 extends boolean = boolean>(fns: [(v1: T1) => U1$1, (v1: T1) => U2$1, (v1: T1) => U3$1]) => CurriedFunction1<T1, object>
R_converge(string_number_boolean_to_object);
// @dts-jest:pass -> CurriedFunction1<string, object>
R_converge(string_number_boolean_to_object)([
  string_to_string,
  string_to_number,
  string_to_boolean,
]);
// @dts-jest:pass -> CurriedFunction1<string, object>
R_converge(string_number_boolean_to_object, [
  string_to_string,
  string_to_number,
  string_to_boolean,
]);

// @dts-jest:pass -> <T1, U1$1 extends any = any>(fns: [(v1: T1) => U1$1]) => CurriedFunction1<T1, object>
R_converge(any_args_to_object);
// @dts-jest:pass -> <T1, T2, U1$1 extends any = any, U2$1 extends any = any>(fns: [(v1: T1, v2: T2) => U1$1, (v1: T1, v2: T2) => U2$1]) => CurriedFunction2<T1, T2, object>
R_converge<'1', 'i2f2'>()(any_args_to_object);
// @dts-jest:pass -> (fns: ((...args: any[]) => any)[] | ArrayLike<(...args: any[]) => any>) => (...args: any[]) => object
R_converge<'1', 'variadic'>()(any_args_to_object);
