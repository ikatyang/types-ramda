declare namespace R {

  /**
   * Adds two values.
   */
  function add(a: number, b: number): number;
  function add(_a: PH, b: number): {
    (a: number): number;
  };
  function add(a: number): {
    (b: number): number;
  };
  function add(a: number, b: number): number;

}
