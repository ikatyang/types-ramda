/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Replace a substring or regex match in a string with a replacement.
   */
  function replace(pattern: string | RegExp, replacement: string, str: string): string;
  function replace(_pattern: PH, replacement: string, str: string): {
    (pattern: string | RegExp): string;
  };
  function replace(pattern: string | RegExp, _replacement: PH, str: string): {
    (replacement: string): string;
  };
  function replace(_pattern: PH, _replacement: PH, str: string): {
    (pattern: string | RegExp, replacement: string): string;
    (_pattern: PH, replacement: string): {
      (pattern: string | RegExp): string;
    };
    (pattern: string | RegExp): {
      (replacement: string): string;
    };
    (pattern: string | RegExp, replacement: string): string;
  };
  function replace(pattern: string | RegExp, str: string): {
    (replacement: string): string;
  };
  function replace(_pattern: PH, str: string): {
    (pattern: string | RegExp, replacement: string): string;
    (_pattern: PH, replacement: string): {
      (pattern: string | RegExp): string;
    };
    (pattern: string | RegExp): {
      (replacement: string): string;
    };
    (pattern: string | RegExp, replacement: string): string;
  };
  function replace(pattern: string | RegExp, replacement: string): {
    (str: string): string;
  };
  function replace(_pattern: PH, replacement: string): {
    (pattern: string | RegExp, str: string): string;
    (_pattern: PH, str: string): {
      (pattern: string | RegExp): string;
    };
    (pattern: string | RegExp): {
      (str: string): string;
    };
    (pattern: string | RegExp, str: string): string;
  };
  function replace(pattern: string | RegExp): {
    (replacement: string, str: string): string;
    (_replacement: PH, str: string): {
      (replacement: string): string;
    };
    (replacement: string): {
      (str: string): string;
    };
    (replacement: string, str: string): string;
  };
  function replace(pattern: string | RegExp, replacement: string, str: string): string;

}
