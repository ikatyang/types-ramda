/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Replace a substring or regex match in a string with a replacement.
   */
  function replace(pattern: string | RegExp, replacement: string, str: string): string;
  function replace(pattern: string | RegExp, replacement: string, _str: Placeholder): CurriedFunction1<string, string>;
  function replace(pattern: string | RegExp, _replacement: Placeholder, str: string): CurriedFunction1<string, string>;
  function replace(pattern: string | RegExp, _replacement: Placeholder, _str: Placeholder): CurriedFunction2<string, string, string>;
  function replace(_pattern: Placeholder, replacement: string, str: string): CurriedFunction1<string | RegExp, string>;
  function replace(_pattern: Placeholder, replacement: string, _str: Placeholder): CurriedFunction2<string | RegExp, string, string>;
  function replace(_pattern: Placeholder, _replacement: Placeholder, str: string): CurriedFunction2<string | RegExp, string, string>;
  function replace(_pattern: Placeholder, _replacement: Placeholder, _str: Placeholder): CurriedFunction3<string | RegExp, string, string, string>;
  function replace(pattern: string | RegExp, replacement: string): CurriedFunction1<string, string>;
  function replace(pattern: string | RegExp, _replacement: Placeholder): CurriedFunction2<string, string, string>;
  function replace(_pattern: Placeholder, replacement: string): CurriedFunction2<string | RegExp, string, string>;
  function replace(_pattern: Placeholder, _replacement: Placeholder): CurriedFunction3<string | RegExp, string, string, string>;
  function replace(pattern: string | RegExp): CurriedFunction2<string, string, string>;
  function replace(_pattern: Placeholder): CurriedFunction3<string | RegExp, string, string, string>;

}
