import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
declare const innerJoin: innerJoin_000;
type innerJoin_000 = {
    <T, U$1, U$2 extends U$1 = U$1>(pred: (a: T, b: U$1) => boolean, _xs: PH, ys: List<U$2>): innerJoin_101<T, U$2>;
    <T, U>(_pred: PH, xs: List<T>, ys: List<U>): innerJoin_011<T, U>;
    <U>(_pred: PH, _xs: PH, ys: List<U>): innerJoin_001<U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (a: T$1, b: U$1) => boolean, xs: List<T$2>, ys: List<U$2>): innerJoin_111<T$2>;
    <T>(_pred: PH, xs: List<T>): innerJoin_010<T>;
    <T$1, U, T$2 extends T$1 = T$1>(pred: (a: T$1, b: U) => boolean, xs: List<T$2>): innerJoin_110<T$2, U>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (a: T$1, b: U$1) => boolean, xs: List<T$2>, ys: List<U$2>) => innerJoin_111<T$2>;
    <$SEL extends "11">(): <T$1, U, T$2 extends T$1 = T$1>(pred: (a: T$1, b: U) => boolean, xs: List<T$2>) => innerJoin_110<T$2, U>;
    <$SEL extends "101">(): <T, U$1, U$2 extends U$1 = U$1>(pred: (a: T, b: U$1) => boolean, _xs: PH, ys: List<U$2>) => innerJoin_101<T, U$2>;
    <$SEL extends "1">(): <T, U>(pred: (a: T, b: U) => boolean) => innerJoin_100<T, U>;
    <$SEL extends "011">(): <T, U>(_pred: PH, xs: List<T>, ys: List<U>) => innerJoin_011<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_010<T>;
    <$SEL extends "001">(): <U>(_pred: PH, _xs: PH, ys: List<U>) => innerJoin_001<U>;
    <T, U>(pred: (a: T, b: U) => boolean): innerJoin_100<T, U>;
};
type innerJoin_100<T, U> = {
    <U$1 extends U = U>(_xs: PH, ys: List<U$1>): innerJoin_101<T, U$1>;
    <T$1 extends T = T, U$1 extends U = U>(xs: List<T$1>, ys: List<U$1>): innerJoin_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(xs: List<T$1>, ys: List<U$1>) => innerJoin_111<T$1>;
    <$SEL extends "1">(): <T$1 extends T = T>(xs: List<T$1>) => innerJoin_110<T$1, U>;
    <$SEL extends "01">(): <U$1 extends U = U>(_xs: PH, ys: List<U$1>) => innerJoin_101<T, U$1>;
    <T$1 extends T = T>(xs: List<T$1>): innerJoin_110<T$1, U>;
};
type innerJoin_010<T> = {
    <U>(_pred: PH, ys: List<U>): innerJoin_011<T, U>;
    <U$1, U$2 extends U$1 = U$1>(pred: (a: T, b: U$1) => boolean, ys: List<U$2>): innerJoin_111<T>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(pred: (a: T, b: U$1) => boolean, ys: List<U$2>) => innerJoin_111<T>;
    <$SEL extends "1">(): <U>(pred: (a: T, b: U) => boolean) => innerJoin_110<T, U>;
    <$SEL extends "01">(): <U>(_pred: PH, ys: List<U>) => innerJoin_011<T, U>;
    <U>(pred: (a: T, b: U) => boolean): innerJoin_110<T, U>;
};
type innerJoin_110<T, U> = {
    <U$1 extends U = U>(ys: List<U$1>): innerJoin_111<T>;
};
type innerJoin_001<U> = {
    <T>(_pred: PH, xs: List<T>): innerJoin_011<T, U>;
    <T$1, T$2 extends T$1 = T$1>(pred: (a: T$1, b: U) => boolean, xs: List<T$2>): innerJoin_111<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(pred: (a: T$1, b: U) => boolean, xs: List<T$2>) => innerJoin_111<T$2>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: U) => boolean) => innerJoin_101<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_011<T, U>;
    <T>(pred: (a: T, b: U) => boolean): innerJoin_101<T, U>;
};
type innerJoin_101<T, U> = {
    <T$1 extends T = T>(xs: List<T$1>): innerJoin_111<T$1>;
};
type innerJoin_011<T, U> = {
    (pred: (a: T, b: U) => boolean): innerJoin_111<T>;
};
type innerJoin_111<T> = T[];
export = innerJoin;
