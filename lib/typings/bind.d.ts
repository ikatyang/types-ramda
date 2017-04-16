/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Creates a function that is bound to a context. Note: `R.bind` does not provide the additional argument-binding capabilities of [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
   */
  function bind<T extends Function>(fn: T, context: any): T;
  function bind(_fn: PH, context: any): {
    <T extends Function>(fn: T): T;
  };
  function bind<T extends Function>(fn: T): {
    (context: any): T;
  };
  function bind<T extends Function>(fn: T, context: any): T;

}
