/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the specified object property is equal, in `R.equals` terms, to the given value; `false` otherwise.
   */
  function propEq(property: Property, value: any, obj: {}): boolean;
  function propEq(property: Property, _value: Placeholder, obj: {}): CurriedFunction1<any, boolean>;
  function propEq(_property: Placeholder, value: any, obj: {}): CurriedFunction1<Property, boolean>;
  function propEq(_property: Placeholder, _value: Placeholder, obj: {}): CurriedFunction2<Property, any, boolean>;
  function propEq(property: Property, value: any): CurriedFunction1<{}, boolean>;
  function propEq(_property: Placeholder, value: any): CurriedFunction2<Property, {}, boolean>;
  function propEq(property: Property): CurriedFunction2<any, {}, boolean>;
  function propEq(property: Property, value: any, obj: {}): boolean;

}
