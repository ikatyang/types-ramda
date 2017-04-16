/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the specified object property is equal, in `R.equals` terms, to the given value; `false` otherwise.
   */
  function propEq(property: Property, value: any, obj: {}): boolean;
  function propEq(_property: PH, value: any, obj: {}): {
    (property: Property): boolean;
  };
  function propEq(property: Property, _value: PH, obj: {}): {
    (value: any): boolean;
  };
  function propEq(_property: PH, _value: PH, obj: {}): {
    (property: Property, value: any): boolean;
    (_property: PH, value: any): {
      (property: Property): boolean;
    };
    (property: Property): {
      (value: any): boolean;
    };
    (property: Property, value: any): boolean;
  };
  function propEq(property: Property, obj: {}): {
    (value: any): boolean;
  };
  function propEq(_property: PH, obj: {}): {
    (property: Property, value: any): boolean;
    (_property: PH, value: any): {
      (property: Property): boolean;
    };
    (property: Property): {
      (value: any): boolean;
    };
    (property: Property, value: any): boolean;
  };
  function propEq(property: Property, value: any): {
    (obj: {}): boolean;
  };
  function propEq(_property: PH, value: any): {
    (property: Property, obj: {}): boolean;
    (_property: PH, obj: {}): {
      (property: Property): boolean;
    };
    (property: Property): {
      (obj: {}): boolean;
    };
    (property: Property, obj: {}): boolean;
  };
  function propEq(property: Property): {
    (value: any, obj: {}): boolean;
    (_value: PH, obj: {}): {
      (value: any): boolean;
    };
    (value: any): {
      (obj: {}): boolean;
    };
    (value: any, obj: {}): boolean;
  };
  function propEq(property: Property, value: any, obj: {}): boolean;

}
