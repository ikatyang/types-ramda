import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
declare const append: append_00;
type append_00 = {
    <T>(_value: PH, list: List<T>): append_01<T>;
    <T>(value: T, list: List<T>): append_11<T>;
    <$SEL extends "11">(): <T>(value: T, list: List<T>) => append_11<T>;
    <$SEL extends "1">(): <T>(value: T) => append_10<T>;
    <$SEL extends "01">(): <T>(_value: PH, list: List<T>) => append_01<T>;
    <T>(value: T): append_10<T>;
};
type append_10<T> = {
    (list: List<T>): append_11<T>;
};
type append_01<T> = {
    (value: T): append_11<T>;
};
type append_11<T> = T[];
export = append;
