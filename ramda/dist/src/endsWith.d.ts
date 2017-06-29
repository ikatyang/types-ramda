import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
declare const endsWith: endsWith_00;
type endsWith_00 = {
    <T extends List<any>>(_suffix: PH, list: T): endsWith_01<T>;
    <T$1 extends List<any>, T$2 extends T$1 = T$1>(suffix: T$1, list: T$2): endsWith_11;
    <$SEL extends "11">(): <T$1 extends List<any>, T$2 extends T$1 = T$1>(suffix: T$1, list: T$2) => endsWith_11;
    <$SEL extends "1">(): <T extends List<any>>(suffix: T) => endsWith_10<T>;
    <$SEL extends "01">(): <T extends List<any>>(_suffix: PH, list: T) => endsWith_01<T>;
    <T extends List<any>>(suffix: T): endsWith_10<T>;
};
type endsWith_10<T extends List<any>> = {
    <T$1 extends T = T>(list: T$1): endsWith_11;
};
type endsWith_01<T extends List<any>> = {
    (suffix: T): endsWith_11;
};
type endsWith_11 = boolean;
export = endsWith;
