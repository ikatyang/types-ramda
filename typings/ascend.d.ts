/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes an ascending comparator function out of a function that returns a value that can be compared with `<` and `>`.
   */
  function ascend<T>(fn: Morphism<T, Ordered>, a: T, b: T): 0 | 1 | -1;
  function ascend<T>(_fn: PH, a: T, b: T): {
    (fn: Morphism<T, Ordered>): 0 | 1 | -1;
  };
  function ascend<T>(fn: Morphism<T, Ordered>, _a: PH, b: T): {
    (a: T): 0 | 1 | -1;
  };
  function ascend<T>(_fn: PH, _a: PH, b: T): {
    (fn: Morphism<T, Ordered>, a: T): 0 | 1 | -1;
    (_fn: PH, a: T): {
      (fn: Morphism<T, Ordered>): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>): {
      (a: T): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>, a: T): 0 | 1 | -1;
  };
  function ascend<T>(fn: Morphism<T, Ordered>, b: T): {
    (a: T): 0 | 1 | -1;
  };
  function ascend<T>(_fn: PH, b: T): {
    (fn: Morphism<T, Ordered>, a: T): 0 | 1 | -1;
    (_fn: PH, a: T): {
      (fn: Morphism<T, Ordered>): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>): {
      (a: T): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>, a: T): 0 | 1 | -1;
  };
  function ascend<T>(fn: Morphism<T, Ordered>, a: T): {
    (b: T): 0 | 1 | -1;
  };
  function ascend<T>(_fn: PH, a: T): {
    (fn: Morphism<T, Ordered>, b: T): 0 | 1 | -1;
    (_fn: PH, b: T): {
      (fn: Morphism<T, Ordered>): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>): {
      (b: T): 0 | 1 | -1;
    };
    (fn: Morphism<T, Ordered>, b: T): 0 | 1 | -1;
  };
  function ascend<T>(fn: Morphism<T, Ordered>): {
    (a: T, b: T): 0 | 1 | -1;
    (_a: PH, b: T): {
      (a: T): 0 | 1 | -1;
    };
    (a: T): {
      (b: T): 0 | 1 | -1;
    };
    (a: T, b: T): 0 | 1 | -1;
  };
  function ascend<T>(fn: Morphism<T, Ordered>, a: T, b: T): 0 | 1 | -1;

}
