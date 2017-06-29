import { Tap } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
declare const tap: tap_00;
type tap_00 = {
    <T>(_fn: PH, value: T): tap_01<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Tap<T$1>, value: T$2): tap_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Tap<T$1>, value: T$2) => tap_11<T$2>;
    <$SEL extends "1">(): <T>(fn: Tap<T>) => tap_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, value: T) => tap_01<T>;
    <T>(fn: Tap<T>): tap_10<T>;
};
type tap_10<T> = {
    <T$1 extends T = T>(value: T$1): tap_11<T$1>;
};
type tap_01<T> = {
    (fn: Tap<T>): tap_11<T>;
};
type tap_11<T> = T;
export = tap;
