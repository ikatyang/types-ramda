import { Dictionary, Filterable, List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
declare const filter: filter_00;
type filter_00 = {
    <T>(fn: Predicate<T>): filter_10<T>;
    <T>(_fn: PH, list: List<T>): filter_list_01<T>;
    <T, U extends Filterable<T>>(_fn: PH, filterable: U): filter_filterable_01<T, U>;
    <T, U extends Dictionary<T>>(_fn: PH, object: U): filter_object_01<T, U>;
    <T>(fn: Predicate<T>, list: List<T>): filter_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): filter_filterable_11<T, U>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U): filter_object_11<T, U>;
};
type filter_10<T> = {
    (list: List<T>): filter_list_11<T>;
    <U extends Filterable<T>>(filterable: U): filter_filterable_11<T, U>;
    <U extends Dictionary<T>>(object: U): filter_object_11<T, U>;
};
type filter_list_01<T> = {
    (fn: Predicate<T>): filter_list_11<T>;
};
type filter_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): filter_filterable_11<T, U>;
};
type filter_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): filter_object_11<T, U>;
};
type filter_list_11<T> = T[];
type filter_filterable_11<T, U extends Filterable<T>> = U;
type filter_object_11<T, U extends Dictionary<T>> = Partial<U>;
export = filter;
