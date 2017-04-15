/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a string made by inserting the `separator` between each element and concatenating all the elements into a single string.
   */
  function join(separator: string, array: any[]): string;
  function join(_separator: PH, array: any[]): {
    (separator: string): string;
  };
  function join(separator: string): {
    (array: any[]): string;
  };
  function join(separator: string, array: any[]): string;

}
