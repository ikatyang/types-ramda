/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the specified object property is equal, in `R.equals` terms, to the given value; `false` otherwise.
   */
  function propEq(property: Property, value: any, container: any): boolean;
  function propEq(property: Property, value: any, _container: Placeholder): CurriedFunction1<any, boolean>;
  function propEq(property: Property, _value: Placeholder, container: any): CurriedFunction1<any, boolean>;
  function propEq(property: Property, _value: Placeholder, _container: Placeholder): CurriedFunction2<any, any, boolean>;
  function propEq(_property: Placeholder, value: any, container: any): CurriedFunction1<Property, boolean>;
  function propEq(_property: Placeholder, value: any, _container: Placeholder): CurriedFunction2<Property, any, boolean>;
  function propEq(_property: Placeholder, _value: Placeholder, container: any): CurriedFunction2<Property, any, boolean>;
  function propEq(_property: Placeholder, _value: Placeholder, _container: Placeholder): CurriedFunction3<Property, any, any, boolean>;
  function propEq(property: Property, value: any): CurriedFunction1<any, boolean>;
  function propEq(property: Property, _value: Placeholder): CurriedFunction2<any, any, boolean>;
  function propEq(_property: Placeholder, value: any): CurriedFunction2<Property, any, boolean>;
  function propEq(_property: Placeholder, _value: Placeholder): CurriedFunction3<Property, any, any, boolean>;
  function propEq(property: Property): CurriedFunction2<any, any, boolean>;
  function propEq(_property: Placeholder): CurriedFunction3<Property, any, any, boolean>;
  function propEq(): CurriedFunction3<Property, any, any, boolean>;

}
