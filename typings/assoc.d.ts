/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
   */
  function assoc<P extends string, V, T extends {}>(property: P, value: V, obj: T): T & { [K in P]: V };
  function assoc<V, T extends {}>(_property: PH, value: V, obj: T): {
    <P extends string>(property: P): T & { [K in P]: V };
  };
  function assoc<P extends string, T extends {}>(property: P, _value: PH, obj: T): {
    <V>(value: V): T & { [K in P]: V };
  };
  function assoc<T extends {}>(_property: PH, _value: PH, obj: T): {
    <P extends string, V>(property: P, value: V): T & { [K in P]: V };
    <V>(_property: PH, value: V): {
      <P extends string>(property: P): T & { [K in P]: V };
    };
    <P extends string>(property: P): {
      <V>(value: V): T & { [K in P]: V };
    };
  };
  function assoc<P extends string, T extends {}>(property: P, obj: T): {
    <V>(value: V): T & { [K in P]: V };
  };
  function assoc<T extends {}>(_property: PH, obj: T): {
    <P extends string, V>(property: P, value: V): T & { [K in P]: V };
    <V>(_property: PH, value: V): {
      <P extends string>(property: P): T & { [K in P]: V };
    };
    <P extends string>(property: P): {
      <V>(value: V): T & { [K in P]: V };
    };
  };
  function assoc<P extends string, V>(property: P, value: V): {
    <T extends {}>(obj: T): T & { [K in P]: V };
  };
  function assoc<V>(_property: PH, value: V): {
    <P extends string, T extends {}>(property: P, obj: T): T & { [K in P]: V };
    <T extends {}>(_property: PH, obj: T): {
      <P extends string>(property: P): T & { [K in P]: V };
    };
    <P extends string>(property: P): {
      <T extends {}>(obj: T): T & { [K in P]: V };
    };
  };
  function assoc<P extends string>(property: P): {
    <V, T extends {}>(value: V, obj: T): T & { [K in P]: V };
    <T extends {}>(_value: PH, obj: T): {
      <V>(value: V): T & { [K in P]: V };
    };
    <V>(value: V): {
      <T extends {}>(obj: T): T & { [K in P]: V };
    };
  };
  function assoc<P extends string, V, T extends {}>(property: P, value: V, obj: T): T & { [K in P]: V };

  function assoc<T extends {}>(property: Property, value: any, obj: T): T;
  function assoc<T extends {}>(_property: PH, value: any, obj: T): {
    (property: Property): T;
  };
  function assoc<T extends {}>(property: Property, _value: PH, obj: T): {
    (value: any): T;
  };
  function assoc<T extends {}>(_property: PH, _value: PH, obj: T): {
    (property: Property, value: any): T;
    (_property: PH, value: any): {
      (property: Property): T;
    };
    (property: Property): {
      (value: any): T;
    };
  };
  function assoc<T extends {}>(property: Property, obj: T): {
    (value: any): T;
  };
  function assoc<T extends {}>(_property: PH, obj: T): {
    (property: Property, value: any): T;
    (_property: PH, value: any): {
      (property: Property): T;
    };
    (property: Property): {
      (value: any): T;
    };
  };
  function assoc(property: Property, value: any): {
    <T extends {}>(obj: T): T;
  };
  function assoc(_property: PH, value: any): {
    <T extends {}>(property: Property, obj: T): T;
    <T extends {}>(_property: PH, obj: T): {
      (property: Property): T;
    };
    (property: Property): {
      <T extends {}>(obj: T): T;
    };
  };
  function assoc(property: Property): {
    <T extends {}>(value: any, obj: T): T;
    <T extends {}>(_value: PH, obj: T): {
      (value: any): T;
    };
    (value: any): {
      <T extends {}>(obj: T): T;
    };
  };
  function assoc<T extends {}>(property: Property, value: any, obj: T): T;

}
