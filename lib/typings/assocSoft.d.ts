/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
   */
  function assocSoft<T extends {}>(property: Property, value: any, obj: T): T;
  function assocSoft<T extends {}>(_property: PH, value: any, obj: T): {
    (property: Property): T;
  };
  function assocSoft<T extends {}>(property: Property, _value: PH, obj: T): {
    (value: any): T;
  };
  function assocSoft<T extends {}>(_property: PH, _value: PH, obj: T): {
    (property: Property, value: any): T;
    (_property: PH, value: any): {
      (property: Property): T;
    };
    (property: Property): {
      (value: any): T;
    };
  };
  function assocSoft<T extends {}>(property: Property, obj: T): {
    (value: any): T;
  };
  function assocSoft<T extends {}>(_property: PH, obj: T): {
    (property: Property, value: any): T;
    (_property: PH, value: any): {
      (property: Property): T;
    };
    (property: Property): {
      (value: any): T;
    };
  };
  function assocSoft(property: Property, value: any): {
    <T extends {}>(obj: T): T;
  };
  function assocSoft(_property: PH, value: any): {
    <T extends {}>(property: Property, obj: T): T;
    <T extends {}>(_property: PH, obj: T): {
      (property: Property): T;
    };
    (property: Property): {
      <T extends {}>(obj: T): T;
    };
  };
  function assocSoft(property: Property): {
    <T extends {}>(value: any, obj: T): T;
    <T extends {}>(_value: PH, obj: T): {
      (value: any): T;
    };
    (value: any): {
      <T extends {}>(obj: T): T;
    };
  };
  function assocSoft<T extends {}>(property: Property, value: any, obj: T): T;

}
