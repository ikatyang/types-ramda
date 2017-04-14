/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
   */
  function prop<T = any>(property: Property, obj: {}): T;
  function prop<T = any>(_property: Placeholder, obj: {}): CurriedFunction1<Property, T>;
  function prop<T = any>(property: Property): CurriedFunction1<{}, T>;
  function prop<T = any>(property: Property, obj: {}): T;

}
