declare namespace R {

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   */
  function and(a: boolean, b: boolean): boolean;
  function and(_a: PH, b: boolean): {
    (a: boolean): boolean;
  };
  function and(a: boolean): {
    (b: boolean): boolean;
  };
  function and(a: boolean, b: boolean): boolean;

}
