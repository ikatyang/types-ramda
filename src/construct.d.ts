import { Constructor, Variadic } from "./$types";
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
declare const construct: typeof $;
declare function $<R>(constructor: new () => R): () => R;
declare function $<T1, R>(constructor: new (v1: T1) => R): (v1: T1) => R;
declare function $<T1, T2, R>(constructor: new (v1: T1, v2: T2) => R): (v1: T1, v2: T2) => R;
declare function $<T1, T2, T3, R>(constructor: new (v1: T1, v2: T2, v3: T3) => R): (v1: T1, v2: T2, v3: T3) => R;
declare function $<T1, T2, T3, T4, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4) => R): (v1: T1, v2: T2, v3: T3, v4: T4) => R;
declare function $<T1, T2, T3, T4, T5, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
declare function $<T1, T2, T3, T4, T5, T6, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
declare function $<R>(constructor: Constructor<R>): Variadic<R>;
export = construct;
