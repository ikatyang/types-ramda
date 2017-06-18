import { Constructor, Variadic } from "./$types";
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
declare const constructN: typeof $;
declare function $<R>(n: 0, constructor: new (...args: any[]) => R): () => R;
declare function $<T1, R>(n: 1, constructor: new (v1: T1, ...args: any[]) => R): (v1: T1) => R;
declare function $<T1, T2, R>(n: 2, constructor: new (v1: T1, v2: T2, ...args: any[]) => R): (v1: T1, v2: T2) => R;
declare function $<T1, T2, T3, R>(n: 3, constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): (v1: T1, v2: T2, v3: T3) => R;
declare function $<T1, T2, T3, T4, R>(n: 4, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): (v1: T1, v2: T2, v3: T3, v4: T4) => R;
declare function $<T1, T2, T3, T4, T5, R>(n: 5, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
declare function $<T1, T2, T3, T4, T5, T6, R>(n: 6, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
declare function $<R>(n: number, constructor: Constructor<R>): Variadic<R>;
export = constructN;
