/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
   */
  function assocPath<R extends {}>(properties: Property[], value: any, obj: {}): R;
  function assocPath<R extends {}>(_properties: PH, value: any, obj: {}): {
    (properties: Property[]): R;
  };
  function assocPath<R extends {}>(properties: Property[], _value: PH, obj: {}): {
    (value: any): R;
  };
  function assocPath<R extends {}>(_properties: PH, _value: PH, obj: {}): {
    (properties: Property[], value: any): R;
    (_properties: PH, value: any): {
      (properties: Property[]): R;
    };
    (properties: Property[]): {
      (value: any): R;
    };
  };
  function assocPath<R extends {}>(properties: Property[], obj: {}): {
    (value: any): R;
  };
  function assocPath<R extends {}>(_properties: PH, obj: {}): {
    (properties: Property[], value: any): R;
    (_properties: PH, value: any): {
      (properties: Property[]): R;
    };
    (properties: Property[]): {
      (value: any): R;
    };
  };
  function assocPath<R extends {}>(properties: Property[], value: any): {
    (obj: {}): R;
  };
  function assocPath<R extends {}>(_properties: PH, value: any): {
    (properties: Property[], obj: {}): R;
    (_properties: PH, obj: {}): {
      (properties: Property[]): R;
    };
    (properties: Property[]): {
      (obj: {}): R;
    };
  };
  function assocPath<R extends {}>(properties: Property[]): {
    (value: any, obj: {}): R;
    (_value: PH, obj: {}): {
      (value: any): R;
    };
    (value: any): {
      (obj: {}): R;
    };
  };
  function assocPath<R extends {}>(properties: Property[], value: any, obj: {}): R;

}
