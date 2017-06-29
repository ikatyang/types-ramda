import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
declare const set: set_000;
type set_000 = {
    <T, U$1, U$2 extends U$1 = U$1>(lens: Lens<T, U$1>, _value: PH, target: U$2): set_101<T, U$2>;
    <T, U>(_lens: PH, value: T, target: U): set_011<T, U>;
    <U>(_lens: PH, _value: PH, target: U): set_001<U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(lens: Lens<T$1, U$1>, value: T$2, target: U$2): set_111<U$2>;
    <T>(_lens: PH, value: T): set_010<T>;
    <T$1, U, T$2 extends T$1 = T$1>(lens: Lens<T$1, U>, value: T$2): set_110<T$2, U>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(lens: Lens<T$1, U$1>, value: T$2, target: U$2) => set_111<U$2>;
    <$SEL extends "11">(): <T$1, U, T$2 extends T$1 = T$1>(lens: Lens<T$1, U>, value: T$2) => set_110<T$2, U>;
    <$SEL extends "101">(): <T, U$1, U$2 extends U$1 = U$1>(lens: Lens<T, U$1>, _value: PH, target: U$2) => set_101<T, U$2>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => set_100<T, U>;
    <$SEL extends "011">(): <T, U>(_lens: PH, value: T, target: U) => set_011<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_010<T>;
    <$SEL extends "001">(): <U>(_lens: PH, _value: PH, target: U) => set_001<U>;
    <T, U>(lens: Lens<T, U>): set_100<T, U>;
};
type set_100<T, U> = {
    <U$1 extends U = U>(_value: PH, target: U$1): set_101<T, U$1>;
    <T$1 extends T = T, U$1 extends U = U>(value: T$1, target: U$1): set_111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(value: T$1, target: U$1) => set_111<U$1>;
    <$SEL extends "1">(): <T$1 extends T = T>(value: T$1) => set_110<T$1, U>;
    <$SEL extends "01">(): <U$1 extends U = U>(_value: PH, target: U$1) => set_101<T, U$1>;
    <T$1 extends T = T>(value: T$1): set_110<T$1, U>;
};
type set_010<T> = {
    <U>(_lens: PH, target: U): set_011<T, U>;
    <U$1, U$2 extends U$1 = U$1>(lens: Lens<T, U$1>, target: U$2): set_111<U$2>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(lens: Lens<T, U$1>, target: U$2) => set_111<U$2>;
    <$SEL extends "1">(): <U>(lens: Lens<T, U>) => set_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => set_011<T, U>;
    <U>(lens: Lens<T, U>): set_110<T, U>;
};
type set_110<T, U> = {
    <U$1 extends U = U>(target: U$1): set_111<U$1>;
};
type set_001<U> = {
    <T>(_lens: PH, value: T): set_011<T, U>;
    <T$1, T$2 extends T$1 = T$1>(lens: Lens<T$1, U>, value: T$2): set_111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(lens: Lens<T$1, U>, value: T$2) => set_111<U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => set_101<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_011<T, U>;
    <T>(lens: Lens<T, U>): set_101<T, U>;
};
type set_101<T, U> = {
    <T$1 extends T = T>(value: T$1): set_111<U>;
};
type set_011<T, U> = {
    (lens: Lens<T, U>): set_111<U>;
};
type set_111<U> = U;
export = set;
