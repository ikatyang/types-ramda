import { Dictionary, List, Predicate } from "./$types";
/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
declare const partition: partition_00;
type partition_00 = {
    <T>(fn: Predicate<T>): partition_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): partition_list_11<T>;
    <T, KT extends string, KF extends string>(fn: Predicate<T>, object: Record<KT | KF, T>): partition_object_11<T, KT, KF>;
    <T>(fn: Predicate<T>, dictionary: Dictionary<T>): partition_dictionary_11<T>;
};
type partition_10<T> = {
    (list: List<T>): partition_list_11<T>;
    <KT extends string, KF extends string>(object: Record<KT | KF, T>): partition_object_11<T, KT, KF>;
    (dictionary: Dictionary<T>): partition_dictionary_11<T>;
};
type partition_list_01<T> = {
    (fn: Predicate<T>): partition_list_11<T>;
};
type partition_object_01<T, KT extends string, KF extends string> = {
    (fn: Predicate<T>): partition_object_11<T, KT, KF>;
};
type partition_dictionary_01<T> = {
    (fn: Predicate<T>): partition_dictionary_11<T>;
};
type partition_list_11<T> = [T[], T[]];
type partition_object_11<T, KT extends string, KF extends string> = [Record<KT, T>, Record<KF, T>];
type partition_dictionary_11<T> = [Dictionary<T>, Dictionary<T>];
export = partition;
