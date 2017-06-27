import { Constructor, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
declare const propIs: propIs_000;
type propIs_000 = {
    <T, U>(constructor: Constructor<T>, _key: PH, object: U): propIs_record_101<T, U>;
    (constructor: Constructor<any>, _key: PH, object: any): propIs_general_101;
    <U, K extends string>(_constructor: PH, key: K, object: U): propIs_record_011<U, K>;
    <U>(_constructor: PH, _key: PH, object: U): propIs_record_001<U>;
    (_constructor: PH, key: Property, object: any): propIs_general_011;
    (_constructor: PH, _key: PH, object: any): propIs_general_001;
    <T, U, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
    (constructor: Constructor<any>, key: Property, object: any): propIs_general_111;
    <K extends string>(_constructor: PH, key: K): propIs_record_010<K>;
    (_constructor: PH, key: Property): propIs_general_010;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_record_110<T, K>;
    (constructor: Constructor<any>, key: Property): propIs_general_110;
    <T>(constructor: Constructor<T>): propIs_record_100<T>;
    (constructor: Constructor<any>): propIs_general_100;
};
type propIs_record_100<T> = {
    <U>(_key: PH, object: U): propIs_record_101<T, U>;
    <U, K extends string>(key: K, object: U): object is U & Record<K, T>;
    <K extends string>(key: K): propIs_record_110<T, K>;
};
type propIs_general_100 = {
    (_key: PH, object: any): propIs_general_101;
    (key: Property, object: any): propIs_general_111;
    (key: Property): propIs_general_110;
};
type propIs_record_010<K extends string> = {
    <U>(_constructor: PH, object: U): propIs_record_011<U, K>;
    <T, U>(constructor: Constructor<T>, object: U): object is U & Record<K, T>;
    <T>(constructor: Constructor<T>): propIs_record_110<T, K>;
};
type propIs_general_010 = {
    (_constructor: PH, object: any): propIs_general_011;
    (constructor: Constructor<any>, object: any): propIs_general_111;
    (constructor: Constructor<any>): propIs_general_110;
};
type propIs_record_110<T, K extends string> = {
    <U>(object: U): object is U & Record<K, T>;
};
type propIs_general_110 = {
    (object: any): propIs_general_111;
};
type propIs_record_001<U> = {
    <K extends string>(_constructor: PH, key: K): propIs_record_011<U, K>;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_record_111<T, U, K>;
    <T>(constructor: Constructor<T>): propIs_record_101<T, U>;
};
type propIs_general_001 = {
    (_constructor: PH, key: Property): propIs_general_011;
    (constructor: Constructor<any>, key: Property): propIs_general_111;
    (constructor: Constructor<any>): propIs_general_101;
};
type propIs_record_101<T, U> = {
    <K extends string>(key: K): propIs_record_111<T, U, K>;
};
type propIs_general_101 = {
    (key: Property): propIs_general_111;
};
type propIs_record_011<U, K extends string> = {
    <T>(constructor: Constructor<T>): propIs_record_111<T, U, K>;
};
type propIs_general_011 = {
    (constructor: Constructor<any>): propIs_general_111;
};
type propIs_record_111<T, U, K extends string> = boolean;
type propIs_general_111 = boolean;
export = propIs;
