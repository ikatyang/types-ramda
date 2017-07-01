import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that
 *
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
declare const insert: insert_000;
type insert_000 = {
    (index: number): insert_100;
    <T>(_index: PH, value: T): insert_010<T>;
    <T>(index: number, value: T): insert_110<T>;
    <T>(_index: PH, _value: PH, list: List<T>): insert_001<T>;
    <T>(_index: PH, value: T, list: List<T>): insert_011<T>;
    <T>(index: number, _value: PH, list: List<T>): insert_101<T>;
    <T>(index: number, value: T, list: List<T>): insert_111<T>;
};
type insert_100 = {
    <T>(value: T): insert_110<T>;
    <T>(_value: PH, list: List<T>): insert_101<T>;
    <T>(value: T, list: List<T>): insert_111<T>;
};
type insert_010<T> = {
    (index: number): insert_110<T>;
    (_index: PH, list: List<T>): insert_011<T>;
    (index: number, list: List<T>): insert_111<T>;
};
type insert_110<T> = {
    (list: List<T>): insert_111<T>;
};
type insert_001<T> = {
    (index: number): insert_101<T>;
    (_index: PH, value: T): insert_011<T>;
    (index: number, value: T): insert_111<T>;
};
type insert_101<T> = {
    (value: T): insert_111<T>;
};
type insert_011<T> = {
    (index: number): insert_111<T>;
};
type insert_111<T> = T[];
export = insert;
