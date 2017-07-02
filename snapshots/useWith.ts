import * as R_useWith from '../ramda/dist/src/useWith';

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (x: string, y: number, z: boolean) => object;
declare const number_to_boolean: (x: number) => boolean;
declare const symbol_to_number: (x: symbol) => number;
declare const number_to_string: (x: number) => string;

// @dts-jest:pass -> <T1, T2, T3, U1$1 extends string = string, U2$1 extends number = number, U3$1 extends boolean = boolean>(fns: [(value: T1) => U1$1, (value: T2) => U2$1, (value: T3) => U3$1]) => CurriedFunction3<T1, T2, T3, object>
R_useWith(string_number_boolean_to_object);
// @dts-jest:pass -> CurriedFunction3<number, symbol, number, object>
R_useWith(string_number_boolean_to_object)([
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);
// @dts-jest:pass -> CurriedFunction3<number, symbol, number, object>
R_useWith(string_number_boolean_to_object, [
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);

// @dts-jest:pass -> (fns: never[]) => () => object
R_useWith(any_args_to_object);
// @dts-jest:pass -> <T1, T2, U1$1 extends any = any, U2$1 extends any = any>(fns: [(value: T1) => U1$1, (value: T2) => U2$1]) => CurriedFunction2<T1, T2, object>
R_useWith<'1', '2arity'>()(any_args_to_object);
// @dts-jest:pass -> (fns: Function[]) => (...args: any[]) => object
R_useWith<'1', 'variadic'>()(any_args_to_object);
