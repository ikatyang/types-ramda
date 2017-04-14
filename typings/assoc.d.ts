/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
   */
  function assoc<P extends string, V, T extends {}>(property: P, value: V, obj: T): T & { [K in P]: V };
  function assoc<P extends string, V, T extends {}>(property: P, _value: Placeholder, obj: T): CurriedFunction1<V, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(_property: Placeholder, value: V, obj: T): CurriedFunction1<P, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(_property: Placeholder, _value: Placeholder, obj: T): CurriedFunction2<P, V, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(property: P, value: V): CurriedFunction1<T, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(_property: Placeholder, value: V): CurriedFunction2<P, T, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(property: P): CurriedFunction2<V, T, T & { [K in P]: V }>;
  function assoc<P extends string, V, T extends {}>(property: P, value: V, obj: T): T & { [K in P]: V };

  function assoc<T extends {}>(property: Property, value: any, obj: T): T;
  function assoc<T extends {}>(property: Property, _value: Placeholder, obj: T): CurriedFunction1<any, T>;
  function assoc<T extends {}>(_property: Placeholder, value: any, obj: T): CurriedFunction1<Property, T>;
  function assoc<T extends {}>(_property: Placeholder, _value: Placeholder, obj: T): CurriedFunction2<Property, any, T>;
  function assoc<T extends {}>(property: Property, value: any): CurriedFunction1<T, T>;
  function assoc<T extends {}>(_property: Placeholder, value: any): CurriedFunction2<Property, T, T>;
  function assoc<T extends {}>(property: Property): CurriedFunction2<any, T, T>;
  function assoc<T extends {}>(property: Property, value: any, obj: T): T;

}
