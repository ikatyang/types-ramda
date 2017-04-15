/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a time and return a negative number if the first value is smaller, a positive number if it's larger, and zero if they are equal. Please note that this is a **copy** of the list. It does not modify the original.
   */
  function sort<T>(fn: Comparator<T>, list: List<T>): T[];
  function sort<T>(_fn: PH, list: List<T>): {
    (fn: Comparator<T>): T[];
  };
  function sort<T>(fn: Comparator<T>): {
    (list: List<T>): T[];
  };
  function sort<T>(fn: Comparator<T>, list: List<T>): T[];

}
