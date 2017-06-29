import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
declare const intersection: intersection_00;
type intersection_00 = {
    <T>(_a: PH, b: List<T>): intersection_01<T>;
    <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): intersection_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => intersection_11<T$2>;
    <$SEL extends "1">(): <T>(a: List<T>) => intersection_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => intersection_01<T>;
    <T>(a: List<T>): intersection_10<T>;
};
type intersection_10<T> = {
    <T$1 extends T = T>(b: List<T$1>): intersection_11<T$1>;
};
type intersection_01<T> = {
    (a: List<T>): intersection_11<T>;
};
type intersection_11<T> = T[];
export = intersection;
