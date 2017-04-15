declare namespace R {

  /**
   * Multiplies two numbers. Equivalent to `a * b` but curried.
   */
  function multiply(a: number, b: number): number;
  function multiply(_a: PH, b: number): {
    (a: number): number;
  };
  function multiply(a: number): {
    (b: number): number;
  };
  function multiply(a: number, b: number): number;

}
