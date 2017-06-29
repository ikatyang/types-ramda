import { Morphism, Ordered } from "./$types";
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
declare const descend: descend_000;
type descend_000 = {
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T): descend_111;
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T): descend_110<T, U>;
    <$SEL extends "111">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T) => descend_111;
    <$SEL extends "11">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T) => descend_110<T, U>;
    <$SEL extends "1">(): <T, U extends Ordered>(fn: Morphism<T, U>) => descend_100<T, U>;
    <T, U extends Ordered>(fn: Morphism<T, U>): descend_100<T, U>;
};
type descend_100<T, U extends Ordered> = {
    (a: T, b: T): descend_111;
    <$SEL extends "11">(): (a: T, b: T) => descend_111;
    <$SEL extends "1">(): (a: T) => descend_110<T, U>;
    (a: T): descend_110<T, U>;
};
type descend_010<T> = {
    <U extends Ordered>(fn: Morphism<T, U>, b: T): descend_111;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, b: T) => descend_111;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => descend_110<T, U>;
    <U extends Ordered>(fn: Morphism<T, U>): descend_110<T, U>;
};
type descend_110<T, U extends Ordered> = {
    (b: T): descend_111;
};
type descend_001<T> = {
    <U extends Ordered>(fn: Morphism<T, U>, a: T): descend_111;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, a: T) => descend_111;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => descend_101<T, U>;
    <U extends Ordered>(fn: Morphism<T, U>): descend_101<T, U>;
};
type descend_101<T, U extends Ordered> = {
    (a: T): descend_111;
};
type descend_011<T> = {
    <U extends Ordered>(fn: Morphism<T, U>): descend_111;
};
type descend_111 = number;
export = descend;
