import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
declare const eqProps: eqProps_000;
type eqProps_000 = {
    <T>(property: Property, _a: PH, b: T): eqProps_101<T>;
    <T$1, T$2 extends T$1 = T$1>(_property: PH, a: T$1, b: T$2): eqProps_011<T$2>;
    <T>(_property: PH, _a: PH, b: T): eqProps_001<T>;
    <T$1, T$2 extends T$1 = T$1>(property: Property, a: T$1, b: T$2): eqProps_111;
    <T>(_property: PH, a: T): eqProps_010<T>;
    <T>(property: Property, a: T): eqProps_110<T>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1>(property: Property, a: T$1, b: T$2) => eqProps_111;
    <$SEL extends "11">(): <T>(property: Property, a: T) => eqProps_110<T>;
    <$SEL extends "101">(): <T>(property: Property, _a: PH, b: T) => eqProps_101<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_100;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_property: PH, a: T$1, b: T$2) => eqProps_011<T$2>;
    <$SEL extends "01">(): <T>(_property: PH, a: T) => eqProps_010<T>;
    <$SEL extends "001">(): <T>(_property: PH, _a: PH, b: T) => eqProps_001<T>;
    (property: Property): eqProps_100;
};
type eqProps_100 = {
    <T>(_a: PH, b: T): eqProps_101<T>;
    <T$1, T$2 extends T$1 = T$1>(a: T$1, b: T$2): eqProps_111;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => eqProps_111;
    <$SEL extends "1">(): <T>(a: T) => eqProps_110<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => eqProps_101<T>;
    <T>(a: T): eqProps_110<T>;
};
type eqProps_010<T> = {
    <T$1 extends T = T>(_property: PH, b: T$1): eqProps_011<T$1>;
    <T$1 extends T = T>(property: Property, b: T$1): eqProps_111;
    <$SEL extends "11">(): <T$1 extends T = T>(property: Property, b: T$1) => eqProps_111;
    <$SEL extends "1">(): (property: Property) => eqProps_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_property: PH, b: T$1) => eqProps_011<T$1>;
    (property: Property): eqProps_110<T>;
};
type eqProps_110<T> = {
    <T$1 extends T = T>(b: T$1): eqProps_111;
};
type eqProps_001<T> = {
    (_property: PH, a: T): eqProps_011<T>;
    (property: Property, a: T): eqProps_111;
    <$SEL extends "11">(): (property: Property, a: T) => eqProps_111;
    <$SEL extends "1">(): (property: Property) => eqProps_101<T>;
    <$SEL extends "01">(): (_property: PH, a: T) => eqProps_011<T>;
    (property: Property): eqProps_101<T>;
};
type eqProps_101<T> = {
    (a: T): eqProps_111;
};
type eqProps_011<T> = {
    (property: Property): eqProps_111;
};
type eqProps_111 = boolean;
export = eqProps;
