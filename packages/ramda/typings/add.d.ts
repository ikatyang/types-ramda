declare namespace R {

  /**
   * `(a: number, b: numer): number`
   * 
   * Adds two values.
   */
  function add(a: number, b: number): number;
  function add(a: number, _b: Placeholder): CurriedFunction1<number, number>;
  function add(_a: Placeholder, b: number): CurriedFunction1<number, number>;
  function add(_a: Placeholder, _b: Placeholder): CurriedFunction2<number, number, number>;
  function add(a: number): CurriedFunction1<number, number>;
  function add(_a: Placeholder): CurriedFunction2<number, number, number>;

}
