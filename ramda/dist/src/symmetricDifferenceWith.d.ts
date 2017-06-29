import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
declare const symmetricDifferenceWith: symmetricDifferenceWith_000;
type symmetricDifferenceWith_000 = {
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>): symmetricDifferenceWith_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>): symmetricDifferenceWith_011<T$2>;
    <T>(_fn: PH, _a: PH, b: List<T>): symmetricDifferenceWith_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>): symmetricDifferenceWith_111<T$3>;
    <T>(_fn: PH, a: List<T>): symmetricDifferenceWith_010<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>): symmetricDifferenceWith_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>) => symmetricDifferenceWith_111<T$3>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>) => symmetricDifferenceWith_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>) => symmetricDifferenceWith_101<T$2>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => symmetricDifferenceWith_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>) => symmetricDifferenceWith_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => symmetricDifferenceWith_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: List<T>) => symmetricDifferenceWith_001<T>;
    <T>(fn: Comparator<T, boolean>): symmetricDifferenceWith_100<T>;
};
type symmetricDifferenceWith_100<T> = {
    <T$1 extends T = T>(_a: PH, b: List<T$1>): symmetricDifferenceWith_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): symmetricDifferenceWith_111<T$2>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => symmetricDifferenceWith_111<T$2>;
    <$SEL extends "1">(): <T$1 extends T = T>(a: List<T$1>) => symmetricDifferenceWith_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: List<T$1>) => symmetricDifferenceWith_101<T$1>;
    <T$1 extends T = T>(a: List<T$1>): symmetricDifferenceWith_110<T$1>;
};
type symmetricDifferenceWith_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: List<T$1>): symmetricDifferenceWith_011<T$1>;
    <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>): symmetricDifferenceWith_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>) => symmetricDifferenceWith_111<T$1>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => symmetricDifferenceWith_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: List<T$1>) => symmetricDifferenceWith_011<T$1>;
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_110<T>;
};
type symmetricDifferenceWith_110<T> = {
    <T$1 extends T = T>(b: List<T$1>): symmetricDifferenceWith_111<T$1>;
};
type symmetricDifferenceWith_001<T> = {
    (_fn: PH, a: List<T>): symmetricDifferenceWith_011<T>;
    (fn: Comparator<T, boolean>, a: List<T>): symmetricDifferenceWith_111<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => symmetricDifferenceWith_111<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => symmetricDifferenceWith_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: List<T>) => symmetricDifferenceWith_011<T>;
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_101<T>;
};
type symmetricDifferenceWith_101<T> = {
    (a: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_011<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_111<T> = T[];
export = symmetricDifferenceWith;
