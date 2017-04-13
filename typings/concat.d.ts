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
  function concat(str1: string, str2: string): string;
  function concat(_str1: Placeholder, str2: string): CurriedFunction1<string, string>;
  function concat(str1: string): CurriedFunction1<string, string>;
  function concat(str1: string, str2: string): string;

  function concat<T, U>(list1: T[], list2: U[]): (T | U)[];
  function concat<T, U>(_list1: Placeholder, list2: U[]): CurriedFunction1<T[], (T | U)[]>;
  function concat<T, U>(list1: T[]): CurriedFunction1<U[], (T | U)[]>;
  function concat<T, U>(list1: T[], list2: U[]): (T | U)[];

  function concat<T>(concatable: Concatable<T>, value: T): Concatable<T>;
  function concat<T>(_concatable: Placeholder, value: T): CurriedFunction1<Concatable<T>, Concatable<T>>;
  function concat<T>(concatable: Concatable<T>): CurriedFunction1<T, Concatable<T>>;
  function concat<T>(concatable: Concatable<T>, value: T): Concatable<T>;

}
