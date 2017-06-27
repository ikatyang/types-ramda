import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
    <T, U extends Ordered>(fn: Morphism<T, U>, _a: PH, b: T): descend_101<T, U>;
    <T>(_fn: PH, a: T, b: T): descend_011<T>;
    <T>(_fn: PH, _a: PH, b: T): descend_001<T>;
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T): descend_111<T, U>;
    <T>(_fn: PH, a: T): descend_010<T>;
    <T, U extends Ordered>(fn: Morphism<T, U>, a: T): descend_110<T, U>;
    <$SEL extends "111">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T) => descend_111<T, U>;
    <$SEL extends "11">(): <T, U extends Ordered>(fn: Morphism<T, U>, a: T) => descend_110<T, U>;
    <$SEL extends "101">(): <T, U extends Ordered>(fn: Morphism<T, U>, _a: PH, b: T) => descend_101<T, U>;
    <$SEL extends "1">(): <T, U extends Ordered>(fn: Morphism<T, U>) => descend_100<T, U>;
    <$SEL extends "011">(): <T>(_fn: PH, a: T, b: T) => descend_011<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => descend_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => descend_001<T>;
    <T, U extends Ordered>(fn: Morphism<T, U>): descend_100<T, U>;
};
type descend_100<T, U extends Ordered> = {
    (_a: PH, b: T): descend_101<T, U>;
    (a: T, b: T): descend_111<T, U>;
    <$SEL extends "11">(): (a: T, b: T) => descend_111<T, U>;
    <$SEL extends "1">(): (a: T) => descend_110<T, U>;
    <$SEL extends "01">(): (_a: PH, b: T) => descend_101<T, U>;
    (a: T): descend_110<T, U>;
};
type descend_010<T> = {
    (_fn: PH, b: T): descend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>, b: T): descend_111<T, U>;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, b: T) => descend_111<T, U>;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => descend_110<T, U>;
    <$SEL extends "01">(): (_fn: PH, b: T) => descend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>): descend_110<T, U>;
};
type descend_110<T, U extends Ordered> = {
    (b: T): descend_111<T, U>;
};
type descend_001<T> = {
    (_fn: PH, a: T): descend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>, a: T): descend_111<T, U>;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, a: T) => descend_111<T, U>;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => descend_101<T, U>;
    <$SEL extends "01">(): (_fn: PH, a: T) => descend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>): descend_101<T, U>;
};
type descend_101<T, U extends Ordered> = {
    (a: T): descend_111<T, U>;
};
type descend_011<T> = {
    <U extends Ordered>(fn: Morphism<T, U>): descend_111<T, U>;
};
type descend_111<T, U extends Ordered> = number;
export = descend;
