declare namespace R {

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.
   *
   * Dispatches symmetrically to the `equals` methods of both arguments, if present.
   */
  function equals<T, U>(a: T, b: U): boolean;
  function equals<T, U>(a: T, _b: Placeholder): CurriedFunction1<U, boolean>;
  function equals<T, U>(_a: Placeholder, b: U): CurriedFunction1<T, boolean>;
  function equals<T, U>(_a: Placeholder, _b: Placeholder): CurriedFunction2<T, U, boolean>;
  function equals<T, U>(a: T): CurriedFunction1<U, boolean>;
  function equals<T, U>(_a: Placeholder): CurriedFunction2<T, U, boolean>;
  function equals<T, U>(): CurriedFunction2<T, U, boolean>;

}
