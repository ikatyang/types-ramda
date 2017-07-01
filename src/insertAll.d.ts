import { List } from "./$types";
/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
declare const insertAll: insertAll_000;
type insertAll_000 = {
    (index: number): insertAll_100;
    <T>(index: number, values: List<T>): insertAll_110<T>;
    <$SEL extends "111">(): <T>(index: number, values: List<T>, list: List<T>) => insertAll_111<T>;
    <$SEL extends "11">(): <T>(index: number, values: List<T>) => insertAll_110<T>;
    <$SEL extends "1">(): (index: number) => insertAll_100;
    <T>(index: number, values: List<T>, list: List<T>): insertAll_111<T>;
};
type insertAll_100 = {
    <T>(values: List<T>): insertAll_110<T>;
    <$SEL extends "11">(): <T>(values: List<T>, list: List<T>) => insertAll_111<T>;
    <$SEL extends "1">(): <T>(values: List<T>) => insertAll_110<T>;
    <T>(values: List<T>, list: List<T>): insertAll_111<T>;
};
type insertAll_010<T> = {
    (index: number): insertAll_110<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => insertAll_111<T>;
    <$SEL extends "1">(): (index: number) => insertAll_110<T>;
    (index: number, list: List<T>): insertAll_111<T>;
};
type insertAll_110<T> = {
    (list: List<T>): insertAll_111<T>;
};
type insertAll_001<T> = {
    (index: number): insertAll_101<T>;
    <$SEL extends "11">(): (index: number, values: List<T>) => insertAll_111<T>;
    <$SEL extends "1">(): (index: number) => insertAll_101<T>;
    (index: number, values: List<T>): insertAll_111<T>;
};
type insertAll_101<T> = {
    (values: List<T>): insertAll_111<T>;
};
type insertAll_011<T> = {
    (index: number): insertAll_111<T>;
};
type insertAll_111<T> = T[];
export = insertAll;
