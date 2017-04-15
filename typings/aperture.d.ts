/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a new list, composed of n-tuples of consecutive elements If `n` is greater than the length of the list, an empty list is returned.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function aperture<T>(n: number, list: List<T>): T[][];
  function aperture<T>(_n: PH, list: List<T>): {
    (n: number): T[][];
  };
  function aperture(n: number): {
    <T>(list: List<T>): T[][];
  };
  function aperture<T>(n: number, list: List<T>): T[][];

}
