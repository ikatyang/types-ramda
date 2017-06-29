import { Morphism, NestedDictionary } from "./$types";
/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
declare const evolve: evolve_00;
type evolve_00 = {
    <T>(transformations: NestedDictionary<Morphism<any, any>>, object: T): evolve_remain_11<T>;
    <T>(transformations: NestedDictionary<Morphism<any, any>>, object: object): evolve_manual_11<T>;
    <$SEL extends "11", $KIND extends "remain">(): <T>(transformations: NestedDictionary<Morphism<any, any>>, object: T) => evolve_remain_11<T>;
    <$SEL extends "11", $KIND extends "manual">(): <T>(transformations: NestedDictionary<Morphism<any, any>>, object: object) => evolve_manual_11<T>;
    <$SEL extends "1">(): (transformations: NestedDictionary<Morphism<any, any>>) => evolve_10;
    (transformations: NestedDictionary<Morphism<any, any>>): evolve_10;
};
type evolve_10 = {
    <T>(object: T): evolve_remain_11<T>;
    <$SEL extends "1", $KIND extends "remain">(): <T>(object: T) => evolve_remain_11<T>;
    <$SEL extends "1", $KIND extends "manual">(): <T>(object: object) => evolve_manual_11<T>;
    <T>(object: object): evolve_manual_11<T>;
};
type evolve_remain_01<T> = {
    (transformations: NestedDictionary<Morphism<any, any>>): evolve_remain_11<T>;
};
type evolve_manual_01 = {
    <T>(transformations: NestedDictionary<Morphism<any, any>>): evolve_manual_11<T>;
};
type evolve_remain_11<T> = T;
type evolve_manual_11<T> = T;
export = evolve;
