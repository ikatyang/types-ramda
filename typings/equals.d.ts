declare namespace R {

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.
   *
   * Dispatches symmetrically to the `equals` methods of both arguments, if present.
   */
  function equals<T, U>(a: T, b: U): boolean;
  function equals<U>(_a: PH, b: U): {
    <T>(a: T): boolean;
  };
  function equals<T>(a: T): {
    <U>(b: U): boolean;
  };
  function equals<T, U>(a: T, b: U): boolean;

}
