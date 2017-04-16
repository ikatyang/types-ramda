/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns the result of concatenating the given lists or strings.
   *
   * Note: `R.concat` expects both arguments to be of the same type, unlike the native `Array.prototype.concat` method. It will throw an error if you `concat` an Array with a non-Array value.
   *
   * Dispatches to the `concat` method of the first argument, if present.
   */
  function concat<T, U>(array1: T[], array2: U[]): (T | U)[];
  function concat<U>(_array1: PH, array2: U[]): {
    <T>(array1: T[]): (T | U)[];
  };
  function concat<T>(array1: T[]): {
    <U>(array2: U[]): (T | U)[];
  };
  function concat(str1: string, str2: string): string;
  function concat(_str1: PH, str2: string): {
    (str1: string): string;
  };
  function concat(str1: string): {
    (str2: string): string;
  };
  function concat<T>(concatable: Concatable<T>, value: T): Concatable<T>;
  function concat<T>(_concatable: PH, value: T): {
    (concatable: Concatable<T>): Concatable<T>;
  };
  function concat<T>(concatable: Concatable<T>): {
    (value: T): Concatable<T>;
  };
  function concat<T, U>(array1: T[], array2: U[]): (T | U)[];
  type ConcatArray = {
    <T, U>(array1: T[], array2: U[]): (T | U)[];
    <U>(_array1: PH, array2: U[]): {
      <T>(array1: T[]): (T | U)[];
    };
    <T>(array1: T[]): {
      <U>(array2: U[]): (T | U)[];
    };
  };
  type ConcatString = {
    (str1: string, str2: string): string;
    (_str1: PH, str2: string): {
      (str1: string): string;
    };
    (str1: string): {
      (str2: string): string;
    };
  };
  type ConcatSelf = {
    <T>(concatable: Concatable<T>, value: T): Concatable<T>;
    <T>(_concatable: PH, value: T): {
      (concatable: Concatable<T>): Concatable<T>;
    };
    <T>(concatable: Concatable<T>): {
      (value: T): Concatable<T>;
    };
  };

}
