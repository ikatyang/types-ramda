/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
   */
  function assocPath<R extends {}>(propertys: Property[], value: any, obj: {}): R;
  function assocPath<R extends {}>(_propertys: PH, value: any, obj: {}): {
    (propertys: Property[]): R;
  };
  function assocPath<R extends {}>(propertys: Property[], _value: PH, obj: {}): {
    (value: any): R;
  };
  function assocPath<R extends {}>(_propertys: PH, _value: PH, obj: {}): {
    (propertys: Property[], value: any): R;
    (_propertys: PH, value: any): {
      (propertys: Property[]): R;
    };
    (propertys: Property[]): {
      (value: any): R;
    };
  };
  function assocPath<R extends {}>(propertys: Property[], obj: {}): {
    (value: any): R;
  };
  function assocPath<R extends {}>(_propertys: PH, obj: {}): {
    (propertys: Property[], value: any): R;
    (_propertys: PH, value: any): {
      (propertys: Property[]): R;
    };
    (propertys: Property[]): {
      (value: any): R;
    };
  };
  function assocPath<R extends {}>(propertys: Property[], value: any): {
    (obj: {}): R;
  };
  function assocPath<R extends {}>(_propertys: PH, value: any): {
    (propertys: Property[], obj: {}): R;
    (_propertys: PH, obj: {}): {
      (propertys: Property[]): R;
    };
    (propertys: Property[]): {
      (obj: {}): R;
    };
  };
  function assocPath<R extends {}>(propertys: Property[]): {
    (value: any, obj: {}): R;
    (_value: PH, obj: {}): {
      (value: any): R;
    };
    (value: any): {
      (obj: {}): R;
    };
  };
  function assocPath<R extends {}>(propertys: Property[], value: any, obj: {}): R;

}
