import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
declare const unionWith: unionWith_000;
type unionWith_000 = {
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>): unionWith_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>): unionWith_011<T$2>;
    <T>(_fn: PH, _a: PH, b: List<T>): unionWith_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>): unionWith_111<T$3>;
    <T>(_fn: PH, a: List<T>): unionWith_010<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>): unionWith_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>) => unionWith_111<T$3>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>) => unionWith_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>) => unionWith_101<T$2>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => unionWith_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>) => unionWith_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => unionWith_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: List<T>) => unionWith_001<T>;
    <T>(fn: Comparator<T, boolean>): unionWith_100<T>;
};
type unionWith_100<T> = {
    <T$1 extends T = T>(_a: PH, b: List<T$1>): unionWith_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): unionWith_111<T$2>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => unionWith_111<T$2>;
    <$SEL extends "1">(): <T$1 extends T = T>(a: List<T$1>) => unionWith_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: List<T$1>) => unionWith_101<T$1>;
    <T$1 extends T = T>(a: List<T$1>): unionWith_110<T$1>;
};
type unionWith_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: List<T$1>): unionWith_011<T$1>;
    <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>): unionWith_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>) => unionWith_111<T$1>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => unionWith_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: List<T$1>) => unionWith_011<T$1>;
    (fn: Comparator<T, boolean>): unionWith_110<T>;
};
type unionWith_110<T> = {
    <T$1 extends T = T>(b: List<T$1>): unionWith_111<T$1>;
};
type unionWith_001<T> = {
    (_fn: PH, a: List<T>): unionWith_011<T>;
    (fn: Comparator<T, boolean>, a: List<T>): unionWith_111<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => unionWith_111<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => unionWith_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: List<T>) => unionWith_011<T>;
    (fn: Comparator<T, boolean>): unionWith_101<T>;
};
type unionWith_101<T> = {
    (a: List<T>): unionWith_111<T>;
};
type unionWith_011<T> = {
    (fn: Comparator<T, boolean>): unionWith_111<T>;
};
type unionWith_111<T> = T[];
export = unionWith;
