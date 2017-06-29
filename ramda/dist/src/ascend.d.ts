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
    <T$1, U extends Ordered, T$2 extends T$1 = T$1>(fn: Morphism<T$1, U>, _a: PH, b: T$2): ascend_101<T$2, U>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2): ascend_011<T$2>;
    <T>(_fn: PH, _a: PH, b: T): ascend_001<T>;
    <T$1, U extends Ordered, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, U>, a: T$2, b: T$3): ascend_111;
    <T>(_fn: PH, a: T): ascend_010<T>;
    <T$1, U extends Ordered, T$2 extends T$1 = T$1>(fn: Morphism<T$1, U>, a: T$2): ascend_110<T$2, U>;
    <$SEL extends "111">(): <T$1, U extends Ordered, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, U>, a: T$2, b: T$3) => ascend_111;
    <$SEL extends "11">(): <T$1, U extends Ordered, T$2 extends T$1 = T$1>(fn: Morphism<T$1, U>, a: T$2) => ascend_110<T$2, U>;
    <$SEL extends "101">(): <T$1, U extends Ordered, T$2 extends T$1 = T$1>(fn: Morphism<T$1, U>, _a: PH, b: T$2) => ascend_101<T$2, U>;
    <$SEL extends "1">(): <T, U extends Ordered>(fn: Morphism<T, U>) => ascend_100<T, U>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2) => ascend_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => ascend_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => ascend_001<T>;
    <T, U extends Ordered>(fn: Morphism<T, U>): ascend_100<T, U>;
};
type ascend_100<T, U extends Ordered> = {
    <T$1 extends T = T>(_a: PH, b: T$1): ascend_101<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2): ascend_111;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => ascend_111;
    <$SEL extends "1">(): <T$1 extends T = T>(a: T$1) => ascend_110<T$1, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: T$1) => ascend_101<T$1, U>;
    <T$1 extends T = T>(a: T$1): ascend_110<T$1, U>;
};
type ascend_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: T$1): ascend_011<T$1>;
    <U extends Ordered, T$1 extends T = T>(fn: Morphism<T$1, U>, b: T): ascend_111;
    <$SEL extends "11">(): <U extends Ordered, T$1 extends T = T>(fn: Morphism<T$1, U>, b: T) => ascend_111;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => ascend_110<T, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: T$1) => ascend_011<T$1>;
    <U extends Ordered>(fn: Morphism<T, U>): ascend_110<T, U>;
};
type ascend_110<T, U extends Ordered> = {
    <T$1 extends T = T>(b: T$1): ascend_111;
};
type ascend_001<T> = {
    (_fn: PH, a: T): ascend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>, a: T): ascend_111;
    <$SEL extends "11">(): <U extends Ordered>(fn: Morphism<T, U>, a: T) => ascend_111;
    <$SEL extends "1">(): <U extends Ordered>(fn: Morphism<T, U>) => ascend_101<T, U>;
    <$SEL extends "01">(): (_fn: PH, a: T) => ascend_011<T>;
    <U extends Ordered>(fn: Morphism<T, U>): ascend_101<T, U>;
};
type ascend_101<T, U extends Ordered> = {
    (a: T): ascend_111;
};
type ascend_011<T> = {
    <U extends Ordered>(fn: Morphism<T, U>): ascend_111;
};
type ascend_111 = number;
export = ascend;
