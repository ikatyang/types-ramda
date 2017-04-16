/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
   */
  function prop<R = any>(property: Property, obj: {}): R;
  function prop<R = any>(_property: PH, obj: {}): {
    (property: Property): R;
  };
  function prop<R = any>(property: Property): {
    (obj: {}): R;
  };
  function prop<R = any>(property: Property, obj: {}): R;

}
