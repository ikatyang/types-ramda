import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
declare const nth: nth_00;
type nth_00 = {
    (n: number): nth_10;
    (_n: PH, str: string): nth_string_01;
    <T>(_n: PH, list: List<T>): nth_list_01<T>;
    (n: number, str: string): nth_string_11;
    <$SEL extends "1">(): (n: number) => nth_10;
    <$SEL extends "01", $KIND extends "string">(): (_n: PH, str: string) => nth_string_01;
    <$SEL extends "01", $KIND extends "list">(): <T>(_n: PH, list: List<T>) => nth_list_01<T>;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => nth_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => nth_list_11<T>;
    <T>(n: number, list: List<T>): nth_list_11<T>;
};
type nth_10 = {
    (str: string): nth_string_11;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => nth_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => nth_list_11<T>;
    <T>(list: List<T>): nth_list_11<T>;
};
type nth_string_01 = {
    (n: number): nth_string_11;
};
type nth_list_01<T> = {
    (n: number): nth_list_11<T>;
};
type nth_string_11 = string;
type nth_list_11<T> = T | undefined;
export = nth;
