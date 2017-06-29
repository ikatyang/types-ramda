import { Dictionary, Filterable, List, Predicate } from "./$types";
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
    <T>(fn: Predicate<T>, list: List<T>): filter_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): filter_filterable_11<T, U>;
    <T>(fn: Predicate<T>, object: Dictionary<T>): filter_dictionary_11<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(fn: Predicate<T>, list: List<T>) => filter_list_11<T>;
    <$SEL extends "11", $KIND extends "filterable">(): <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U) => filter_filterable_11<T, U>;
    <$SEL extends "11", $KIND extends "dictionary">(): <T>(fn: Predicate<T>, object: Dictionary<T>) => filter_dictionary_11<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => filter_10<T>;
    <T>(fn: Predicate<T>): filter_10<T>;
};
type filter_10<T> = {
    (list: List<T>): filter_list_11<T>;
    <U extends Filterable<T>>(filterable: U): filter_filterable_11<T, U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => filter_list_11<T>;
    <$SEL extends "1", $KIND extends "filterable">(): <U extends Filterable<T>>(filterable: U) => filter_filterable_11<T, U>;
    <$SEL extends "1", $KIND extends "dictionary">(): (object: Dictionary<T>) => filter_dictionary_11<T>;
    (object: Dictionary<T>): filter_dictionary_11<T>;
};
type filter_list_01<T> = {
    (fn: Predicate<T>): filter_list_11<T>;
};
type filter_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): filter_filterable_11<T, U>;
};
type filter_dictionary_01<T> = {
    (fn: Predicate<T>): filter_dictionary_11<T>;
};
type filter_list_11<T> = T[];
type filter_filterable_11<T, U extends Filterable<T>> = U;
type filter_dictionary_11<T> = Dictionary<T>;
export = filter;
