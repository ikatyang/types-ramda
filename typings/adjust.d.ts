/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.
   */
  function adjust<T, U>(fn: Morphism<T, U>, index: number, list: List<T>): (T | U)[];
  function adjust<T>(_fn: PH, index: number, list: List<T>): {
    <U>(fn: Morphism<T, U>): (T | U)[];
  };
  function adjust<T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>): {
    (index: number): (T | U)[];
  };
  function adjust<T>(_fn: PH, _index: PH, list: List<T>): {
    <U>(fn: Morphism<T, U>, index: number): (T | U)[];
    (_fn: PH, index: number): {
      <U>(fn: Morphism<T, U>): (T | U)[];
    };
    <U>(fn: Morphism<T, U>): {
      (index: number): (T | U)[];
    };
  };
  function adjust<T, U>(fn: Morphism<T, U>, list: List<T>): {
    (index: number): (T | U)[];
  };
  function adjust<T>(_fn: PH, list: List<T>): {
    <U>(fn: Morphism<T, U>, index: number): (T | U)[];
    (_fn: PH, index: number): {
      <U>(fn: Morphism<T, U>): (T | U)[];
    };
    <U>(fn: Morphism<T, U>): {
      (index: number): (T | U)[];
    };
  };
  function adjust<T, U>(fn: Morphism<T, U>, index: number): {
    (list: List<T>): (T | U)[];
  };
  function adjust(_fn: PH, index: number): {
    <T, U>(fn: Morphism<T, U>, list: List<T>): (T | U)[];
    <T>(_fn: PH, list: List<T>): {
      <U>(fn: Morphism<T, U>): (T | U)[];
    };
    <T, U>(fn: Morphism<T, U>): {
      (list: List<T>): (T | U)[];
    };
  };
  function adjust<T, U>(fn: Morphism<T, U>): {
    (index: number, list: List<T>): (T | U)[];
    (_index: PH, list: List<T>): {
      (index: number): (T | U)[];
    };
    (index: number): {
      (list: List<T>): (T | U)[];
    };
  };
  function adjust<T, U>(fn: Morphism<T, U>, index: number, list: List<T>): (T | U)[];

}
