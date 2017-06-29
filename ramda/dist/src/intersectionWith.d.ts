import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
declare const intersectionWith: intersectionWith_000;
type intersectionWith_000 = {
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>): intersectionWith_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>): intersectionWith_011<T$2>;
    <T>(_fn: PH, _a: PH, b: List<T>): intersectionWith_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>): intersectionWith_111<T$3>;
    <T>(_fn: PH, a: List<T>): intersectionWith_010<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>): intersectionWith_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Comparator<T$1, boolean>, a: List<T$2>, b: List<T$3>) => intersectionWith_111<T$3>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, a: List<T$2>) => intersectionWith_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(fn: Comparator<T$1, boolean>, _a: PH, b: List<T$2>) => intersectionWith_101<T$2>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => intersectionWith_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: List<T$1>, b: List<T$2>) => intersectionWith_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => intersectionWith_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: List<T>) => intersectionWith_001<T>;
    <T>(fn: Comparator<T, boolean>): intersectionWith_100<T>;
};
type intersectionWith_100<T> = {
    <T$1 extends T = T>(_a: PH, b: List<T$1>): intersectionWith_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): intersectionWith_111<T$2>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => intersectionWith_111<T$2>;
    <$SEL extends "1">(): <T$1 extends T = T>(a: List<T$1>) => intersectionWith_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: List<T$1>) => intersectionWith_101<T$1>;
    <T$1 extends T = T>(a: List<T$1>): intersectionWith_110<T$1>;
};
type intersectionWith_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: List<T$1>): intersectionWith_011<T$1>;
    <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>): intersectionWith_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Comparator<T$1, boolean>, b: List<T>) => intersectionWith_111<T$1>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: List<T$1>) => intersectionWith_011<T$1>;
    (fn: Comparator<T, boolean>): intersectionWith_110<T>;
};
type intersectionWith_110<T> = {
    <T$1 extends T = T>(b: List<T$1>): intersectionWith_111<T$1>;
};
type intersectionWith_001<T> = {
    (_fn: PH, a: List<T>): intersectionWith_011<T>;
    (fn: Comparator<T, boolean>, a: List<T>): intersectionWith_111<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => intersectionWith_111<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: List<T>) => intersectionWith_011<T>;
    (fn: Comparator<T, boolean>): intersectionWith_101<T>;
};
type intersectionWith_101<T> = {
    (a: List<T>): intersectionWith_111<T>;
};
type intersectionWith_011<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_111<T>;
};
type intersectionWith_111<T> = T[];
export = intersectionWith;
