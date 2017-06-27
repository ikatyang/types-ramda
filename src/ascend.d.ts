import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Makes an ascending comparator function out of a function that returns a value
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
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
declare const ascend: ascend_000;
type ascend_000 = {
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T): ascend_111<T, U>;
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T): ascend_110<T, U>;
    <$SEL extends "111">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T) => ascend_111<T, U>;
    <$SEL extends "11">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T) => ascend_110<T, U>;
    <$SEL extends "1">(): <T, U extends Ordered>(fn: Morphism<T, U>) => ascend_100<T, U>;
    <T, U extends Ordered>(fn: Morphism<T, U>): ascend_100<T, U>;
};
type ascend_100<T, U extends Ordered> = {
    (a: T, b: T): ascend_111<T, U>;
    <$SEL extends "11">(): (a: T, b: T) => ascend_111<T, U>;
    <$SEL extends "1">(): (a: T) => ascend_110<T, U>;
    (a: T): ascend_110<T, U>;
};
type ascend_010<T> = {
    <U extends Ordered>(fn: Morphism<T, U>, b: T): ascend_111<T, U>;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, b: T) => ascend_111<T, U>;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => ascend_110<T, U>;
    <U extends Ordered>(fn: Morphism<T, U>): ascend_110<T, U>;
};
type ascend_110<T, U extends Ordered> = {
    (b: T): ascend_111<T, U>;
};
type ascend_001<T> = {
    <U extends Ordered>(fn: Morphism<T, U>, a: T): ascend_111<T, U>;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, a: T) => ascend_111<T, U>;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => ascend_101<T, U>;
    <U extends Ordered>(fn: Morphism<T, U>): ascend_101<T, U>;
};
type ascend_101<T, U extends Ordered> = {
    (a: T): ascend_111<T, U>;
};
type ascend_011<T> = {
    <U extends Ordered>(fn: Morphism<T, U>): ascend_111<T, U>;
};
type ascend_111<T, U extends Ordered> = number;
export = ascend;
